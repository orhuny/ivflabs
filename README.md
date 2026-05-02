# Doğuş IVF Center - Website Renovation

This is the renovated website for **Doğuş IVF Center** (www.cyprusivflabs.com), a leading fertility clinic in Nicosia, North Cyprus.

## Features

- 🌍 **Multi-language Support**: English, Turkish, German, Russian, and Arabic
- 👨‍⚕️ **Doctor Profiles**: Detailed information about Dr. Şevket Alptürk and Fatma Tertemiz
- 🏥 **Comprehensive Services**: IVF, ICSI, PGD, Egg/Sperm/Embryo Donation, and more
- 📱 **Responsive Design**: Modern, mobile-friendly interface
- 🤖 **AI Assistant**: Integrated fertility AI assistant powered by Gemini

## Content Updates

All content has been updated to match the original www.cyprusivflabs.com website:

- ✅ Doctor profiles with accurate biographical information
- ✅ Hospital/about section with complete history
- ✅ All treatment methods with detailed descriptions
- ✅ Multi-language translations for all content
- ✅ Contact information and clinic details

## Doctor Images

**Important**: Doctor photos need to be added to display properly.

1. Download photos of **Fatma Tertemiz** and **Şevket Alptürk** from the original website
2. Place them in `public/doctors/` folder:
   - `fatma-tertemiz.jpg`
   - `dr-sevket-alpturk.jpg`
3. See `public/doctors/README.md` for detailed instructions

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set the `GEMINI_API_KEY` in `.env.local` to your Gemini API key (for AI Assistant)

3. Run the app:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Build for Production

```bash
npm run build
```

## Project Structure

- `App.tsx` - Main application component with all content
- `components/` - Reusable React components (Navbar, Hero, Services, Footer, etc.)
- `constants.tsx` - Translations and service definitions
- `public/doctors/` - Doctor photos (add images here)
- `services/` - API services (Gemini AI)

## Languages Supported

- 🇹🇷 Turkish (TR)
- 🇬🇧 English (EN)
- 🇩🇪 German (DE)
- 🇷🇺 Russian (RU)
- 🇸🇦 Arabic (AR)

## Contact Information

- **Phone**: +90 533 869 23 30
- **Email**: cyprusivflabs@gmail.com
- **Location**: Şht. Erdoğan Mustafa Sk, Nicosia, Northern Cyprus
- **Hours**: 8:30am – 6:30pm (Monday-Saturday, Closed Sunday)
