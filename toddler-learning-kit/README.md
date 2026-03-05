# 🌈 Toddler Learning Kit

A fun, interactive educational website for toddlers and young children (ages 1-5). Features colorful games, animations, and text-to-speech in multiple languages.

![Toddler Learning Kit](https://img.shields.io/badge/Toddler-Learning%20Kit-purple?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-cyan?style=for-the-badge&logo=tailwindcss)

---

## ✨ Features

### 🎮 8 Educational Games
1. **🦁 Animals** - Learn animal names and sounds
2. **🎨 Colors** - Learn colors with visual examples
3. **🔷 Shapes** - Learn geometric shapes
4. **🔢 Numbers** - Count from 1 to 10
5. **🔤 Alphabet** - Learn A-Z with examples
6. **🧍 Body Parts** - Learn body parts
7. **🍎 Fruits & Vegetables** - Learn healthy foods
8. **🚗 Vehicles** - Learn different vehicles

### 🌍 Multi-Language Support
- 🇬🇧 English
- 🇹🇷 Turkish
- 🇪🇸 Spanish
- 🇩🇪 German
- 🇫🇷 French

### 🎨 5 Color Themes
- Rainbow (default)
- Ocean
- Sunset
- Forest
- Candy

### 🔊 Text-to-Speech
- Automatic voice feedback in selected language
- Perfect for language learning

### 📱 Responsive Design
- Works on desktop, tablet, and mobile
- Touch-friendly for little fingers
- Large, easy-to-tap buttons

---

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) 18+ installed
- npm or yarn package manager

### Installation

1. **Extract the ZIP file** to your desired location

2. **Open terminal** in the project folder:
```bash
cd toddler-learning-kit
```

3. **Install dependencies**:
```bash
npm install
```

4. **Start the development server**:
```bash
npm run dev
```

5. **Open your browser** and go to:
```
http://localhost:5173
```

---

## 📦 Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist/` folder. You can deploy these to any static hosting service like:
- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- [GitHub Pages](https://pages.github.com)
- [Firebase Hosting](https://firebase.google.com/products/hosting)

---

## ⚙️ Customization

All customization is done through the `src/config.ts` file. **No coding knowledge required!**

### Change Language
```typescript
export const DEFAULT_LANGUAGE: LanguageCode = 'en';
// Options: 'en' | 'tr' | 'es' | 'de' | 'fr'
```

### Change Theme
```typescript
export const DEFAULT_THEME: ThemeName = 'rainbow';
// Options: 'rainbow' | 'ocean' | 'sunset' | 'forest' | 'candy'
```

### Change Site Title
```typescript
export const SITE_CONFIG = {
  title: 'Little World',
  subtitle: 'Fun Learning Games for Kids',
  heroEmoji: '🌈',
  // ...
};
```

### Enable/Disable Games
```typescript
export const GAMES_CONFIG = {
  enabled: {
    animals: true,
    colors: true,
    shapes: true,
    numbers: true,
    alphabet: true,
    bodyParts: true,
    fruits: true,
    vehicles: true,
  },
};
```

### Customize Game Content
You can easily change the animals, colors, shapes, etc. in the same config file:

```typescript
export const ANIMALS_DATA = {
  lion: { emoji: '🦁', sound: 'Roar' },
  elephant: { emoji: '🐘', sound: 'Trumpet' },
  // Add your own!
  unicorn: { emoji: '🦄', sound: 'Magic' },
};
```

---

## 📁 Project Structure

```
toddler-learning-kit/
├── src/
│   ├── config.ts          # ⚙️ All customization here!
│   ├── App.tsx            # Main application
│   ├── index.css          # Styles
│   ├── main.tsx           # Entry point
│   └── components/        # UI components
├── public/                # Static assets
├── index.html             # HTML template
├── package.json           # Dependencies
├── tailwind.config.js     # Tailwind config
├── tsconfig.json          # TypeScript config
└── vite.config.ts         # Vite config
```

---

## 🎨 Themes Preview

| Theme | Preview |
|-------|---------|
| Rainbow | `linear-gradient(135deg, #FF6B6B, #FFE66D, #4ECDC4, #45B7D1, #96CEB4)` |
| Ocean | `linear-gradient(135deg, #0EA5E9, #06B6D4, #14B8A6)` |
| Sunset | `linear-gradient(135deg, #F97316, #EF4444, #FBBF24)` |
| Forest | `linear-gradient(135deg, #10B981, #059669, #84CC16)` |
| Candy | `linear-gradient(135deg, #FFB6C1, #FFE4E1, #FFF0F5)` |

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify
1. Build: `npm run build`
2. Drag the `dist/` folder to [Netlify Drop](https://app.netlify.com/drop)

### Deploy to GitHub Pages
1. Install gh-pages: `npm i -D gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Run: `npm run deploy`

---

## 📄 License

This project is licensed under the MIT License - feel free to use it for personal or commercial projects.

---

## 🙏 Credits

- Built with [React](https://react.dev)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- UI Components from [shadcn/ui](https://ui.shadcn.com)
- Animations by [Framer Motion](https://www.framer.com/motion)
- Icons by [Lucide](https://lucide.dev)

---

## 💡 Tips for Parents & Teachers

- **Use on a tablet** for the best experience with little fingers
- **Turn up the volume** - the text-to-speech helps with pronunciation
- **Switch languages** to help with bilingual learning
- **Play together** - ask your child to repeat the words
- **Customize content** in `config.ts` to match what your child is learning

---

## 🐛 Troubleshooting

### Sound not working?
- Make sure your device volume is up
- Check browser permissions for audio
- Some mobile browsers require user interaction before playing audio

### Build errors?
- Make sure you're using Node.js 18+
- Delete `node_modules` and run `npm install` again

### Changes not showing?
- Restart the development server
- Clear browser cache

---

## 📧 Support

For questions or issues, please open an issue on GitHub or contact the developer.

---

**Enjoy learning with your little ones!** 🌟
