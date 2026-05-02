
import React, { useState, useRef, useEffect } from 'react';
import { Language, Message } from '../types';
import { TRANSLATIONS } from '../constants';
import { getGeminiResponse } from '../services/geminiService';

interface AiAssistantProps {
  lang: Language;
}

const AiAssistant: React.FC<AiAssistantProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const t = TRANSLATIONS[lang];

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const response = await getGeminiResponse(input, messages, lang);
    const modelMessage: Message = { role: 'model', text: response };

    setMessages(prev => [...prev, modelMessage]);
    setIsLoading(false);
  };

  const quickQuestions: Record<Language, string[]> = {
    tr: ['IVF nedir?', 'Tedavi süreci nasıl?', 'Başarı oranları', 'Randevu nasıl alınır?', 'Yumurta donasyonu'],
    en: ['What is IVF?', 'How does the process work?', 'Success rates', 'How to get an appointment?', 'Egg donation'],
    de: ['Was ist IVF?', 'Ablauf der Behandlung', 'Erfolgsraten', 'Termin vereinbaren', 'Eizellspende'],
    ru: ['Что такое ЭКО?', 'Как проходит лечение?', 'Процент успеха', 'Как записаться?', 'Донорство яйцеклеток'],
    ar: ['ما هو أطفال الأنابيب؟', 'كيف تتم العملية؟', 'نسب النجاح', 'كيف أحجز موعداً؟', 'التبرع بالبويضات'],
  };
  const quickQuestionsList = quickQuestions[lang];

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* Chat Window */}
      <div className={`absolute bottom-20 right-0 w-[380px] max-w-[calc(100vw-48px)] transition-all duration-500 ${
        isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-4'
      }`}>
        <div className="bg-white rounded-3xl shadow-2xl shadow-black/10 flex flex-col overflow-hidden border border-gray-100" style={{ height: '550px' }}>
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-600 to-cyan-600 p-5 text-white">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <i className="fas fa-robot text-2xl"></i>
                </div>
                <div>
                  <span className="font-bold text-lg block">{t.aiTitle}</span>
                  <span className="text-primary-200 text-sm flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                    {lang === 'tr' ? 'Çevrimiçi' : 'Online'}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <i className="fas fa-times text-sm"></i>
              </button>
            </div>
            <p className="text-primary-100 text-sm">
              {lang === 'tr'
                ? 'IVF tedavisi hakkında sorularınızı yanıtlıyorum.'
                : 'I answer your questions about IVF treatment.'}
            </p>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gray-50">
            {messages.length === 0 && (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-comments text-primary-500 text-2xl"></i>
                </div>
                <p className="text-gray-500 mb-6">
                  {lang === 'tr' ? 'Size nasıl yardımcı olabilirim?' : 'How can I assist you today?'}
                </p>
                {/* Quick Questions */}
                <div className="flex flex-wrap justify-center gap-2">
                  {quickQuestionsList.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => setInput(q)}
                      className="px-3 py-1.5 bg-white text-primary-600 text-sm rounded-full border border-primary-200 hover:bg-primary-50 transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'model' && (
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mr-2 shrink-0">
                    <i className="fas fa-robot text-white text-xs"></i>
                  </div>
                )}
                <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-tr-sm'
                    : 'bg-white text-gray-700 shadow-sm border border-gray-100 rounded-tl-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mr-2">
                  <i className="fas fa-robot text-white text-xs"></i>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 rounded-tl-sm">
                  <div className="flex space-x-1.5">
                    <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={t.aiPlaceholder}
                  className="w-full text-sm bg-gray-100 rounded-2xl pl-4 pr-12 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl flex items-center justify-center hover:shadow-lg hover:shadow-primary-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <i className="fas fa-paper-plane text-xs"></i>
                </button>
              </div>
            </div>
            <p className="text-xs text-gray-400 text-center mt-3">
              {lang === 'tr' ? 'AI destekli yanıtlar' : 'AI-powered responses'} <i className="fas fa-sparkles text-primary-400"></i>
            </p>
          </form>
        </div>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-16 h-16 rounded-2xl shadow-2xl flex items-center justify-center transition-all duration-500 group ${
          isOpen
            ? 'bg-gray-900 rotate-0'
            : 'bg-gradient-to-r from-primary-500 to-primary-600 hover:scale-110'
        }`}
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-comment-medical'} text-white text-xl transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}></i>

        {/* Pulse Animation */}
        {!isOpen && (
          <>
            <span className="absolute inset-0 rounded-2xl bg-primary-500 animate-ping opacity-30"></span>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
              <span className="text-[8px] text-white font-bold">1</span>
            </span>
          </>
        )}

        {/* Tooltip */}
        <span className={`absolute -top-12 right-0 bg-gray-900 text-white text-xs font-medium py-2 px-4 rounded-xl shadow-lg transition-all whitespace-nowrap ${
          isOpen ? 'opacity-0 invisible' : 'opacity-0 group-hover:opacity-100 invisible group-hover:visible'
        }`}>
          {lang === 'tr' ? 'AI Asistan' : 'AI Assistant'}
          <span className="absolute -bottom-1 right-6 w-2 h-2 bg-gray-900 rotate-45"></span>
        </span>
      </button>
    </div>
  );
};

export default AiAssistant;
