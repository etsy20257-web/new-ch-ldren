import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Star, Sparkles, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  DEFAULT_LANGUAGE,
  SITE_CONFIG,
  GAMES_CONFIG,
  TRANSLATIONS,
  THEMES,
  AVAILABLE_LANGUAGES,
  ANIMALS_DATA,
  COLORS_DATA,
  SHAPES_DATA,
  ALPHABET_DATA,
  BODY_PARTS_DATA,
  FRUITS_DATA,
  VEHICLES_DATA,
  NUMBERS_DATA,
  type LanguageCode,
} from './config';

// Translation helper
const t = (key: string, lang: LanguageCode) => {
  return TRANSLATIONS[lang]?.[key] || TRANSLATIONS['en'][key] || key;
};

// Sound effects using Web Speech API
const speak = (text: string, lang: LanguageCode) => {
  if (!SITE_CONFIG.enableSound || !('speechSynthesis' in window)) return;
  
  const langMap: Record<LanguageCode, string> = {
    en: 'en-US',
    tr: 'tr-TR',
    es: 'es-ES',
    de: 'de-DE',
    fr: 'fr-FR',
  };
  
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = langMap[lang] || 'en-US';
  utterance.rate = 0.8;
  utterance.pitch = 1.2;
  window.speechSynthesis.speak(utterance);
};

// Confetti component
const Confetti = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  const colors = ['#FF6B6B', '#FFE66D', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFB6C1', '#DDA0DD', '#F59E0B'];
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {Array.from({ length: 40 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 md:w-4 md:h-4 rounded-full"
          style={{
            backgroundColor: colors[i % colors.length],
            left: `${Math.random() * 100}%`,
            top: '-20px',
          }}
          animate={{
            y: window.innerHeight + 50,
            x: (Math.random() - 0.5) * 300,
            rotate: Math.random() * 720,
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            ease: 'easeOut',
            delay: Math.random() * 0.5,
          }}
        />
      ))}
    </div>
  );
};

// Language Context
const useLanguage = () => {
  const [language, setLanguage] = useState<LanguageCode>(DEFAULT_LANGUAGE);
  return { language, setLanguage };
};

// ============================================
// HERO SECTION
// ============================================
const HeroSection = ({ 
  onStart, 
  language 
}: { 
  onStart: () => void; 
  language: LanguageCode;
}) => {
  return (
    <motion.div 
      className="min-h-screen flex flex-col items-center justify-center p-4"
      style={{ background: THEMES.rainbow.background }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
      >
        <motion.div 
          className="text-7xl md:text-9xl mb-4 md:mb-6"
          animate={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          {SITE_CONFIG.heroEmoji}
        </motion.div>
        <h1 className="text-4xl md:text-7xl font-black text-white mb-2 md:mb-4 drop-shadow-lg">
          {SITE_CONFIG.title}
        </h1>
        <p className="text-xl md:text-3xl text-white font-bold mb-6 md:mb-10 drop-shadow-md">
          {SITE_CONFIG.subtitle}
        </p>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            onClick={onStart}
            className="toddler-btn bg-white text-purple-600 hover:bg-yellow-300 text-xl md:text-3xl font-black px-10 md:px-16 py-6 md:py-8 rounded-full shadow-2xl"
          >
            <Play className="w-8 h-8 md:w-10 md:h-10 mr-3 md:mr-4" />
            {t('home.start', language)}
          </Button>
        </motion.div>
      </motion.div>

      {/* Floating elements */}
      {SITE_CONFIG.floatingEmojis.slice(0, 6).map((emoji, i) => (
        <motion.div 
          key={i}
          className={`absolute text-4xl md:text-6xl ${
            i === 0 ? 'top-16 md:top-20 left-4 md:left-10' :
            i === 1 ? 'top-24 md:top-32 right-4 md:right-10' :
            i === 2 ? 'bottom-24 md:bottom-32 left-8 md:left-20' :
            i === 3 ? 'bottom-16 md:bottom-20 right-8 md:right-20' :
            i === 4 ? 'top-1/3 left-4 md:left-8' :
            'top-1/2 right-4 md:right-8'
          }`}
          animate={{ y: [0, -15 - i * 3, 0], rotate: [0, i % 2 === 0 ? 10 : -10, 0] }}
          transition={{ duration: 2.5 + i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
        >
          {emoji}
        </motion.div>
      ))}
    </motion.div>
  );
};

// ============================================
// ANIMALS GAME
// ============================================
const AnimalGame = ({ language }: { language: LanguageCode }) => {
  const animals = Object.entries(ANIMALS_DATA);
  const [selectedAnimal, setSelectedAnimal] = useState<[string, typeof ANIMALS_DATA[keyof typeof ANIMALS_DATA]] | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleAnimalClick = (animal: [string, typeof ANIMALS_DATA[keyof typeof ANIMALS_DATA]]) => {
    setSelectedAnimal(animal);
    const [name, data] = animal;
    speak(`${name}! ${data.sound}!`, language);
    if (SITE_CONFIG.enableConfetti) setShowConfetti(true);
  };

  return (
    <div className="p-4 md:p-8">
      {showConfetti && <Confetti onComplete={() => setShowConfetti(false)} />}
      <h2 className="text-3xl md:text-5xl font-black text-center mb-6 md:mb-8 text-purple-600">
        <span className="mr-3">🐾</span>
        {t('game.animals.subtitle', language)}
        <span className="ml-3">🐾</span>
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 max-w-6xl mx-auto">
        {animals.map(([name, data]) => (
          <motion.div
            key={name}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card
              onClick={() => handleAnimalClick([name, data])}
              className={`toddler-card p-4 md:p-6 cursor-pointer text-center transition-all ${
                selectedAnimal?.[0] === name 
                  ? 'ring-4 ring-yellow-400 bg-yellow-50' 
                  : 'bg-white hover:bg-blue-50'
              }`}
            >
              <div className="text-4xl md:text-5xl mb-2">{data.emoji}</div>
              <p className="text-base md:text-lg font-bold text-gray-700 capitalize">{name}</p>
              {selectedAnimal?.[0] === name && (
                <motion.p 
                  className="text-sm md:text-base text-purple-600 font-semibold mt-1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {data.sound}!
                </motion.p>
              )}
            </Card>
          </motion.div>
        ))}
      </div>

      {selectedAnimal && (
        <motion.div 
          className="mt-6 md:mt-8 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 inline-block shadow-xl">
            <p className="text-2xl md:text-4xl font-black text-purple-600 mb-1 md:mb-2 capitalize">
              {selectedAnimal[1].emoji} {selectedAnimal[0]}
            </p>
            <p className="text-lg md:text-2xl text-gray-600">
              says {selectedAnimal[1].sound}!
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

// ============================================
// COLORS GAME
// ============================================
const ColorsGame = ({ language }: { language: LanguageCode }) => {
  const colors = Object.entries(COLORS_DATA);
  const [selectedColor, setSelectedColor] = useState<[string, typeof COLORS_DATA[keyof typeof COLORS_DATA]] | null>(null);

  const handleColorClick = (color: [string, typeof COLORS_DATA[keyof typeof COLORS_DATA]]) => {
    setSelectedColor(color);
    speak(`${color[0]}!`, language);
  };

  return (
    <div className="p-4 md:p-8">
      <h2 className="text-3xl md:text-5xl font-black text-center mb-6 md:mb-8 text-pink-600">
        <span className="mr-3">🎨</span>
        {t('game.colors.subtitle', language)}
        <span className="ml-3">🎨</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4 max-w-5xl mx-auto">
        {colors.map(([name, data]) => (
          <motion.div
            key={name}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card
              onClick={() => handleColorClick([name, data])}
              className="toddler-card p-4 md:p-6 cursor-pointer text-center overflow-hidden"
              style={{ 
                backgroundColor: data.hex,
                boxShadow: selectedColor?.[0] === name ? `0 0 30px ${data.hex}` : undefined
              }}
            >
              <div className="text-4xl md:text-5xl mb-2">{data.emoji}</div>
              <p className="text-lg md:text-xl font-black text-white drop-shadow-md capitalize">
                {name}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>

      {selectedColor && (
        <motion.div 
          className="mt-6 md:mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div 
            className="rounded-2xl md:rounded-3xl p-6 md:p-8 inline-block shadow-xl"
            style={{ backgroundColor: selectedColor[1].hex }}
          >
            <p className="text-4xl md:text-6xl mb-3">{selectedColor[1].emoji}</p>
            <p className="text-3xl md:text-5xl font-black text-white drop-shadow-lg capitalize">
              {selectedColor[0]}
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

// ============================================
// SHAPES GAME
// ============================================
const ShapesGame = ({ language }: { language: LanguageCode }) => {
  const shapes = Object.entries(SHAPES_DATA);
  const [selectedShape, setSelectedShape] = useState<[string, typeof SHAPES_DATA[keyof typeof SHAPES_DATA]] | null>(null);

  const handleShapeClick = (shape: [string, typeof SHAPES_DATA[keyof typeof SHAPES_DATA]]) => {
    setSelectedShape(shape);
    speak(`${shape[0]}! ${shape[1].sides}!`, language);
  };

  return (
    <div className="p-4 md:p-8">
      <h2 className="text-3xl md:text-5xl font-black text-center mb-6 md:mb-8 text-blue-600">
        <span className="mr-3">🔷</span>
        {t('game.shapes.subtitle', language)}
        <span className="ml-3">🔷</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto">
        {shapes.map(([name, data]) => (
          <motion.div
            key={name}
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card
              onClick={() => handleShapeClick([name, data])}
              className={`toddler-card p-4 md:p-6 cursor-pointer text-center ${
                selectedShape?.[0] === name 
                  ? 'ring-4 ring-blue-400 bg-blue-50' 
                  : 'bg-white hover:bg-purple-50'
              }`}
            >
              <div className="text-5xl md:text-6xl mb-3 animate-pulse-soft">{data.emoji}</div>
              <p className="text-xl md:text-2xl font-black text-gray-700 capitalize">{name}</p>
              <p className="text-sm md:text-base text-gray-500 mt-1">{data.sides}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      {selectedShape && (
        <motion.div 
          className="mt-6 md:mt-8 text-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <div className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl md:rounded-3xl p-6 md:p-8 inline-block shadow-xl">
            <p className="text-6xl md:text-7xl mb-3">{selectedShape[1].emoji}</p>
            <p className="text-3xl md:text-4xl font-black text-white capitalize">{selectedShape[0]}</p>
            <p className="text-lg md:text-xl text-white/80 mt-2">{selectedShape[1].sides}</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

// ============================================
// NUMBERS GAME
// ============================================
const NumbersGame = ({ language }: { language: LanguageCode }) => {
  const [selectedNumber, setSelectedNumber] = useState<typeof NUMBERS_DATA[0] | null>(null);
  const [count, setCount] = useState(0);

  const handleNumberClick = (number: typeof NUMBERS_DATA[0]) => {
    setSelectedNumber(number);
    setCount(0);
    speak(`${number.num}!`, language);
  };

  useEffect(() => {
    if (selectedNumber && count < selectedNumber.num) {
      const timer = setTimeout(() => {
        setCount(c => c + 1);
        speak(String(count + 1), language);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [selectedNumber, count, language]);

  return (
    <div className="p-4 md:p-8">
      <h2 className="text-3xl md:text-5xl font-black text-center mb-6 md:mb-8 text-green-600">
        <span className="mr-3">🔢</span>
        {t('game.numbers.subtitle', language)}
        <span className="ml-3">🔢</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4 max-w-4xl mx-auto">
        {NUMBERS_DATA.map((number) => (
          <motion.div
            key={number.num}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card
              onClick={() => handleNumberClick(number)}
              className={`toddler-card p-4 md:p-6 cursor-pointer text-center ${
                selectedNumber?.num === number.num 
                  ? 'ring-4 ring-green-400 bg-green-50' 
                  : 'bg-white hover:bg-yellow-50'
              }`}
            >
              <p className="text-3xl md:text-5xl font-black text-green-600 mb-1">{number.num}</p>
              <p className="text-2xl md:text-3xl">{number.emoji}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      {selectedNumber && (
        <motion.div 
          className="mt-6 md:mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="bg-gradient-to-r from-green-400 to-teal-500 rounded-2xl md:rounded-3xl p-6 md:p-8 inline-block shadow-xl">
            <p className="text-5xl md:text-7xl font-black text-white mb-2">{selectedNumber.num}</p>
            <div className="text-3xl md:text-4xl tracking-wider">
              {Array(selectedNumber.num).fill(selectedNumber.emoji).slice(0, count).join(' ')}
            </div>
            {count === selectedNumber.num && (
              <motion.p 
                className="text-xl md:text-2xl text-yellow-300 mt-4 font-black"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                🎉 {t('feedback.great', language)}! 🎉
              </motion.p>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
};

// ============================================
// ALPHABET GAME
// ============================================
const AlphabetGame = ({ language }: { language: LanguageCode }) => {
  const letters = Object.entries(ALPHABET_DATA);
  const [selectedLetter, setSelectedLetter] = useState<[string, typeof ALPHABET_DATA[keyof typeof ALPHABET_DATA]] | null>(null);

  const handleLetterClick = (letter: [string, typeof ALPHABET_DATA[keyof typeof ALPHABET_DATA]]) => {
    setSelectedLetter(letter);
    speak(`${letter[0]} for ${letter[1].word}!`, language);
  };

  return (
    <div className="p-4 md:p-8">
      <h2 className="text-3xl md:text-5xl font-black text-center mb-6 md:mb-8 text-orange-600">
        <span className="mr-3">🔤</span>
        {t('game.alphabet.subtitle', language)}
        <span className="ml-3">🔤</span>
      </h2>

      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 gap-2 md:gap-3 max-w-5xl mx-auto">
        {letters.map(([letter, data]) => (
          <motion.div
            key={letter}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card
              onClick={() => handleLetterClick([letter, data])}
              className={`toddler-card p-3 md:p-4 cursor-pointer text-center ${
                selectedLetter?.[0] === letter 
                  ? 'ring-4 ring-orange-400 bg-orange-50' 
                  : 'bg-white hover:bg-yellow-50'
              }`}
            >
              <p className="text-2xl md:text-3xl font-black text-orange-600">{letter}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      {selectedLetter && (
        <motion.div 
          className="mt-6 md:mt-8 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl md:rounded-3xl p-6 md:p-8 inline-block shadow-xl">
            <p className="text-6xl md:text-8xl font-black text-white mb-2">{selectedLetter[0]}</p>
            <p className="text-4xl md:text-6xl mb-3">{selectedLetter[1].emoji}</p>
            <p className="text-xl md:text-3xl text-white font-bold">
              {selectedLetter[0]} for {selectedLetter[1].word}
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

// ============================================
// BODY PARTS GAME
// ============================================
const BodyPartsGame = ({ language }: { language: LanguageCode }) => {
  const parts = Object.entries(BODY_PARTS_DATA);
  const [selectedPart, setSelectedPart] = useState<[string, typeof BODY_PARTS_DATA[keyof typeof BODY_PARTS_DATA]] | null>(null);

  const handlePartClick = (part: [string, typeof BODY_PARTS_DATA[keyof typeof BODY_PARTS_DATA]]) => {
    setSelectedPart(part);
    speak(`${part[0]}! ${part[1].action}!`, language);
  };

  return (
    <div className="p-4 md:p-8">
      <h2 className="text-3xl md:text-5xl font-black text-center mb-6 md:mb-8 text-teal-600">
        <span className="mr-3">🧍</span>
        {t('game.bodyParts.subtitle', language)}
        <span className="ml-3">🧍</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 max-w-4xl mx-auto">
        {parts.map(([name, data]) => (
          <motion.div
            key={name}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card
              onClick={() => handlePartClick([name, data])}
              className={`toddler-card p-4 md:p-6 cursor-pointer text-center ${
                selectedPart?.[0] === name 
                  ? 'ring-4 ring-teal-400 bg-teal-50' 
                  : 'bg-white hover:bg-cyan-50'
              }`}
            >
              <div className="text-4xl md:text-5xl mb-2">{data.emoji}</div>
              <p className="text-lg md:text-xl font-bold text-gray-700 capitalize">{name}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      {selectedPart && (
        <motion.div 
          className="mt-6 md:mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="bg-gradient-to-r from-teal-400 to-cyan-500 rounded-2xl md:rounded-3xl p-6 md:p-8 inline-block shadow-xl">
            <p className="text-6xl md:text-8xl mb-3">{selectedPart[1].emoji}</p>
            <p className="text-3xl md:text-4xl font-black text-white capitalize mb-2">{selectedPart[0]}</p>
            <p className="text-lg md:text-xl text-white/90">{selectedPart[1].action}!</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

// ============================================
// FRUITS GAME
// ============================================
const FruitsGame = ({ language }: { language: LanguageCode }) => {
  const fruits = Object.entries(FRUITS_DATA);
  const [selectedFruit, setSelectedFruit] = useState<[string, typeof FRUITS_DATA[keyof typeof FRUITS_DATA]] | null>(null);

  const handleFruitClick = (fruit: [string, typeof FRUITS_DATA[keyof typeof FRUITS_DATA]]) => {
    setSelectedFruit(fruit);
    speak(`${fruit[0]}! ${fruit[1].color}!`, language);
  };

  return (
    <div className="p-4 md:p-8">
      <h2 className="text-3xl md:text-5xl font-black text-center mb-6 md:mb-8 text-red-600">
        <span className="mr-3">🍎</span>
        {t('game.fruits.subtitle', language)}
        <span className="ml-3">🥕</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 max-w-5xl mx-auto">
        {fruits.map(([name, data]) => (
          <motion.div
            key={name}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card
              onClick={() => handleFruitClick([name, data])}
              className={`toddler-card p-4 md:p-6 cursor-pointer text-center ${
                selectedFruit?.[0] === name 
                  ? 'ring-4 ring-red-400 bg-red-50' 
                  : 'bg-white hover:bg-green-50'
              }`}
            >
              <div className="text-4xl md:text-5xl mb-2">{data.emoji}</div>
              <p className="text-base md:text-lg font-bold text-gray-700 capitalize">{name}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      {selectedFruit && (
        <motion.div 
          className="mt-6 md:mt-8 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="bg-gradient-to-r from-red-400 to-orange-500 rounded-2xl md:rounded-3xl p-6 md:p-8 inline-block shadow-xl">
            <p className="text-6xl md:text-8xl mb-3">{selectedFruit[1].emoji}</p>
            <p className="text-3xl md:text-4xl font-black text-white capitalize mb-2">{selectedFruit[0]}</p>
            <p className="text-lg md:text-xl text-white/90">Color: {selectedFruit[1].color}</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

// ============================================
// VEHICLES GAME
// ============================================
const VehiclesGame = ({ language }: { language: LanguageCode }) => {
  const vehicles = Object.entries(VEHICLES_DATA);
  const [selectedVehicle, setSelectedVehicle] = useState<[string, typeof VEHICLES_DATA[keyof typeof VEHICLES_DATA]] | null>(null);

  const handleVehicleClick = (vehicle: [string, typeof VEHICLES_DATA[keyof typeof VEHICLES_DATA]]) => {
    setSelectedVehicle(vehicle);
    speak(`${vehicle[0]}! ${vehicle[1].sound}!`, language);
  };

  return (
    <div className="p-4 md:p-8">
      <h2 className="text-3xl md:text-5xl font-black text-center mb-6 md:mb-8 text-indigo-600">
        <span className="mr-3">🚗</span>
        {t('game.vehicles.subtitle', language)}
        <span className="ml-3">✈️</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4 max-w-4xl mx-auto">
        {vehicles.map(([name, data]) => (
          <motion.div
            key={name}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card
              onClick={() => handleVehicleClick([name, data])}
              className={`toddler-card p-4 md:p-6 cursor-pointer text-center ${
                selectedVehicle?.[0] === name 
                  ? 'ring-4 ring-indigo-400 bg-indigo-50' 
                  : 'bg-white hover:bg-blue-50'
              }`}
            >
              <div className="text-4xl md:text-5xl mb-2">{data.emoji}</div>
              <p className="text-base md:text-lg font-bold text-gray-700 capitalize">{name}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      {selectedVehicle && (
        <motion.div 
          className="mt-6 md:mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="bg-gradient-to-r from-indigo-400 to-purple-500 rounded-2xl md:rounded-3xl p-6 md:p-8 inline-block shadow-xl">
            <p className="text-6xl md:text-8xl mb-3">{selectedVehicle[1].emoji}</p>
            <p className="text-3xl md:text-4xl font-black text-white capitalize mb-2">{selectedVehicle[0]}</p>
            <p className="text-lg md:text-xl text-white/90">{selectedVehicle[1].sound}!</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

// ============================================
// MAIN MENU
// ============================================
const MainMenu = ({ 
  onSelectGame, 
  language,
  onLanguageChange,
}: { 
  onSelectGame: (game: string) => void; 
  language: LanguageCode;
  onLanguageChange: (lang: LanguageCode) => void;
}) => {
  const games = [
    { id: 'animals', icon: '🦁', color: 'from-purple-400 to-pink-500' },
    { id: 'colors', icon: '🎨', color: 'from-pink-400 to-red-500' },
    { id: 'shapes', icon: '🔷', color: 'from-blue-400 to-cyan-500' },
    { id: 'numbers', icon: '🔢', color: 'from-green-400 to-teal-500' },
    { id: 'alphabet', icon: '🔤', color: 'from-orange-400 to-red-500' },
    { id: 'bodyParts', icon: '🧍', color: 'from-teal-400 to-cyan-500' },
    { id: 'fruits', icon: '🍎', color: 'from-red-400 to-orange-500' },
    { id: 'vehicles', icon: '🚗', color: 'from-indigo-400 to-purple-500' },
  ].filter(game => GAMES_CONFIG.enabled[game.id as keyof typeof GAMES_CONFIG.enabled]);

  return (
    <div className="p-4 md:p-8 min-h-screen bg-gradient-to-b from-yellow-100 to-pink-100">
      {/* Language Selector */}
      <div className="flex justify-center mb-6 md:mb-8">
        <div className="bg-white rounded-full p-2 shadow-lg flex gap-1 md:gap-2">
          {AVAILABLE_LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => onLanguageChange(lang.code)}
              className={`px-2 md:px-4 py-1 md:py-2 rounded-full text-lg md:text-xl transition-all ${
                language === lang.code 
                  ? 'bg-purple-500 text-white' 
                  : 'hover:bg-gray-100'
              }`}
              title={lang.name}
            >
              {lang.flag}
            </button>
          ))}
        </div>
      </div>

      <motion.h1 
        className="text-3xl md:text-6xl font-black text-center mb-6 md:mb-12 text-purple-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Sparkles className="inline-block w-8 h-8 md:w-14 md:h-14 mr-2 md:mr-3 text-yellow-500" />
        {t('home.selectGame', language)}
        <Sparkles className="inline-block w-8 h-8 md:w-14 md:h-14 ml-2 md:ml-3 text-yellow-500" />
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
        {games.map((game, index) => (
          <motion.div
            key={game.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card
              onClick={() => onSelectGame(game.id)}
              className={`toddler-card p-6 md:p-10 cursor-pointer text-center bg-gradient-to-br ${game.color}`}
            >
              <div className="text-5xl md:text-7xl mb-3 md:mb-4">{game.icon}</div>
              <p className="text-xl md:text-3xl font-black text-white drop-shadow-lg">
                {t(`game.${game.id}`, language)}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Fun decorations */}
      <motion.div 
        className="fixed bottom-10 left-10 text-4xl md:text-5xl opacity-50"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        🌈
      </motion.div>
      <motion.div 
        className="fixed top-20 right-10 text-4xl md:text-5xl opacity-50"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        ☀️
      </motion.div>
    </div>
  );
};

// ============================================
// NAVIGATION BAR
// ============================================
const NavBar = ({ 
  onHome, 
  language,
}: { 
  onHome: () => void; 
  language: LanguageCode;
}) => {
  return (
    <motion.nav 
      className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-40 px-3 md:px-4 py-2 md:py-3"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <motion.button
          onClick={onHome}
          className="flex items-center gap-1 md:gap-2 text-purple-600 hover:text-purple-800 font-bold text-base md:text-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Home className="w-6 h-6 md:w-8 md:h-8" />
          <span className="hidden md:inline">{t('nav.home', language)}</span>
        </motion.button>

        <div className="flex items-center gap-1 md:gap-2">
          <Star className="w-5 h-5 md:w-6 md:h-6 text-yellow-500 animate-pulse" />
          <span className="text-lg md:text-xl font-black text-purple-600">{SITE_CONFIG.title}</span>
          <Star className="w-5 h-5 md:w-6 md:h-6 text-yellow-500 animate-pulse" />
        </div>

        <div className="w-16 md:w-24" />
      </div>
    </motion.nav>
  );
};

// ============================================
// MAIN APP
// ============================================
function App() {
  const [started, setStarted] = useState(false);
  const [currentGame, setCurrentGame] = useState<string | null>(null);
  const { language, setLanguage } = useLanguage();

  const handleStart = () => {
    setStarted(true);
    speak('Welcome! Choose a game.', language);
  };

  const handleHome = () => {
    setCurrentGame(null);
    speak('Back to menu!', language);
  };

  const handleSelectGame = (game: string) => {
    setCurrentGame(game);
    const gameNames: Record<string, string> = {
      animals: 'Animal Sounds Game!',
      colors: 'Colors Game!',
      shapes: 'Shapes Game!',
      numbers: 'Numbers Game!',
      alphabet: 'Alphabet Game!',
      bodyParts: 'Body Parts Game!',
      fruits: 'Fruits and Vegetables Game!',
      vehicles: 'Vehicles Game!',
    };
    speak(gameNames[game] || 'Game starting!', language);
  };

  const handleLanguageChange = (lang: LanguageCode) => {
    setLanguage(lang);
    const welcomeMessages: Record<LanguageCode, string> = {
      en: 'Language changed to English!',
      tr: 'Dil Türkçe olarak değiştirildi!',
      es: '¡Idioma cambiado a Español!',
      de: 'Sprache auf Deutsch geändert!',
      fr: 'Langue changée en Français!',
    };
    speak(welcomeMessages[lang], lang);
  };

  if (!started) {
    return <HeroSection onStart={handleStart} language={language} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      <NavBar onHome={handleHome} language={language} />
      
      <AnimatePresence mode="wait">
        {currentGame === null && (
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <MainMenu 
              onSelectGame={handleSelectGame} 
              language={language}
              onLanguageChange={handleLanguageChange}
            />
          </motion.div>
        )}
        
        {currentGame === 'animals' && (
          <motion.div
            key="animals"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100"
          >
            <AnimalGame language={language} />
          </motion.div>
        )}
        
        {currentGame === 'colors' && (
          <motion.div
            key="colors"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="min-h-screen bg-gradient-to-b from-pink-100 to-red-100"
          >
            <ColorsGame language={language} />
          </motion.div>
        )}
        
        {currentGame === 'shapes' && (
          <motion.div
            key="shapes"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="min-h-screen bg-gradient-to-b from-blue-100 to-cyan-100"
          >
            <ShapesGame language={language} />
          </motion.div>
        )}
        
        {currentGame === 'numbers' && (
          <motion.div
            key="numbers"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="min-h-screen bg-gradient-to-b from-green-100 to-teal-100"
          >
            <NumbersGame language={language} />
          </motion.div>
        )}

        {currentGame === 'alphabet' && (
          <motion.div
            key="alphabet"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="min-h-screen bg-gradient-to-b from-orange-100 to-red-100"
          >
            <AlphabetGame language={language} />
          </motion.div>
        )}

        {currentGame === 'bodyParts' && (
          <motion.div
            key="bodyParts"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="min-h-screen bg-gradient-to-b from-teal-100 to-cyan-100"
          >
            <BodyPartsGame language={language} />
          </motion.div>
        )}

        {currentGame === 'fruits' && (
          <motion.div
            key="fruits"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="min-h-screen bg-gradient-to-b from-red-100 to-orange-100"
          >
            <FruitsGame language={language} />
          </motion.div>
        )}

        {currentGame === 'vehicles' && (
          <motion.div
            key="vehicles"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="min-h-screen bg-gradient-to-b from-indigo-100 to-purple-100"
          >
            <VehiclesGame language={language} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
