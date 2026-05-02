import { GoogleGenAI } from "@google/genai";
import { Message, Language } from "../types";
import { AI_ASSISTANT_KNOWLEDGE, AI_ASSISTANT_FAQS } from "./aiAssistantKnowledge";

function getApiKey(): string {
  try {
    const env = typeof import.meta !== "undefined" && (import.meta as { env?: Record<string, string> }).env;
    const fromMeta = (env?.VITE_GEMINI_API_KEY || env?.VITE_API_KEY || "") as string;
    if (fromMeta) return fromMeta;
    const fromProcess = typeof process !== "undefined" && (process as { env?: Record<string, string> }).env;
    return (fromProcess?.GEMINI_API_KEY || fromProcess?.API_KEY || "") as string;
  } catch {
    return "";
  }
}

let aiInstance: InstanceType<typeof GoogleGenAI> | null = null;
function getAi(): InstanceType<typeof GoogleGenAI> | null {
  const key = getApiKey();
  if (!key) return null;
  if (!aiInstance) aiInstance = new GoogleGenAI({ apiKey: key });
  return aiInstance;
}

const LANGUAGE_NAMES: Record<Language, string> = {
  tr: 'Turkish',
  en: 'English',
  de: 'German',
  ru: 'Russian',
  ar: 'Arabic',
};

function buildSystemInstruction(language: Language): string {
  const langName = LANGUAGE_NAMES[language];
  return `You are the official Fertility AI Assistant for Doğuş IVF Center (Doğuş Tüp Bebek Merkezi) in North Cyprus. You help potential and current patients with information about IVF, embryology, and the center's services.

## Your role
- Answer questions about Doğuş IVF Center, its treatments, team, process, and contact details.
- Be empathetic, professional, and clear. Use the knowledge base below for accurate, center-specific answers.
- Always reply in ${langName} (user's current language). Keep answers concise but informative; for long topics use short paragraphs or bullet points.

## Knowledge base – use this for your answers

${AI_ASSISTANT_KNOWLEDGE}

## FAQ summary (quick reference)

${AI_ASSISTANT_FAQS}

## Rules
1. Base your answers on the knowledge base above. Do not invent contact details, success rates, or treatment steps.
2. If asked about pricing, say that specific prices are not published and they should contact the center for a free consultation (phone +90 533 869 23 30 or cyprusivflabs@gmail.com).
3. For medical advice, diagnosis, or treatment decisions, always recommend consulting their doctor or the center's medical team. Your information is for general guidance only.
4. If the question is outside fertility/IVF/Doğuş Center, politely say you are here to help with IVF and Doğuş IVF Center and offer to answer related questions.`;
}

export const getGeminiResponse = async (prompt: string, history: Message[], language: Language) => {
  const fallbackMsg =
    language === "tr"
      ? "Asistan şu an yanıt veremiyor. Lütfen doğrudan +90 533 869 23 30 numaralı telefondan veya cyprusivflabs@gmail.com adresinden bize ulaşın."
      : "The assistant is currently unavailable. Please contact us directly at +90 533 869 23 30 or cyprusivflabs@gmail.com.";

  const ai = getAi();
  if (!ai) return fallbackMsg;

  try {
    const systemInstruction = buildSystemInstruction(language);

    // Build conversation contents: last N turns of history + current prompt (to stay within context limits)
    const maxHistoryTurns = 10;
    const recentHistory = history.slice(-maxHistoryTurns);
    const contents: { role: "user" | "model"; parts: { text: string }[] }[] = [
      ...recentHistory.map((m) => ({
        role: m.role as "user" | "model",
        parts: [{ text: m.text }],
      })),
      { role: "user", parts: [{ text: prompt }] },
    ];

    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents,
      config: {
        systemInstruction,
        temperature: 0.5,
        topP: 0.9,
        topK: 40,
      },
    });

    return response.text || (language === 'tr' ? "Üzgünüm, bu isteği işleyemedim." : "I'm sorry, I couldn't process that request.");
  } catch (error) {
    console.error("Gemini API Error:", error);
    return fallbackMsg;
  }
};
