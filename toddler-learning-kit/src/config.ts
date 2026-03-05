/**
 * ============================================
 * TODDLER LEARNING KIT - CONFIGURATION FILE
 * ============================================
 * 
 * Customize your website easily by editing this file!
 * No coding knowledge required.
 * 
 */

// ============================================
// 1. LANGUAGE SETTINGS
// ============================================
// Supported: 'en' (English), 'tr' (Turkish), 'es' (Spanish), 'de' (German), 'fr' (French)
export const DEFAULT_LANGUAGE: LanguageCode = 'en';

export type LanguageCode = 'en' | 'tr' | 'es' | 'de' | 'fr';

export interface Language {
  code: LanguageCode;
  name: string;
  flag: string;
}

export const AVAILABLE_LANGUAGES: Language[] = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
];

// ============================================
// 2. THEME SETTINGS
// ============================================
// Choose your theme: 'rainbow' | 'ocean' | 'sunset' | 'forest' | 'candy'
export const DEFAULT_THEME: ThemeName = 'rainbow';

export type ThemeName = 'rainbow' | 'ocean' | 'sunset' | 'forest' | 'candy';

export interface Theme {
  name: ThemeName;
  label: string;
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  card: string;
  text: string;
}

export const THEMES: Record<ThemeName, Theme> = {
  rainbow: {
    name: 'rainbow',
    label: 'Rainbow',
    primary: '#8B5CF6',
    secondary: '#EC4899',
    accent: '#F59E0B',
    background: 'linear-gradient(135deg, #FF6B6B 0%, #FFE66D 25%, #4ECDC4 50%, #45B7D1 75%, #96CEB4 100%)',
    card: '#FFFFFF',
    text: '#1F2937',
  },
  ocean: {
    name: 'ocean',
    label: 'Ocean',
    primary: '#0EA5E9',
    secondary: '#06B6D4',
    accent: '#14B8A6',
    background: 'linear-gradient(135deg, #0EA5E9 0%, #06B6D4 50%, #14B8A6 100%)',
    card: '#FFFFFF',
    text: '#1E3A5F',
  },
  sunset: {
    name: 'sunset',
    label: 'Sunset',
    primary: '#F97316',
    secondary: '#EF4444',
    accent: '#FBBF24',
    background: 'linear-gradient(135deg, #F97316 0%, #EF4444 50%, #FBBF24 100%)',
    card: '#FFFFFF',
    text: '#7C2D12',
  },
  forest: {
    name: 'forest',
    label: 'Forest',
    primary: '#10B981',
    secondary: '#059669',
    accent: '#84CC16',
    background: 'linear-gradient(135deg, #10B981 0%, #059669 50%, #84CC16 100%)',
    card: '#FFFFFF',
    text: '#064E3B',
  },
  candy: {
    name: 'candy',
    label: 'Candy',
    primary: '#EC4899',
    secondary: '#F472B6',
    accent: '#A78BFA',
    background: 'linear-gradient(135deg, #FFB6C1 0%, #FFE4E1 50%, #FFF0F5 100%)',
    card: '#FFFFFF',
    text: '#831843',
  },
};

// ============================================
// 3. SITE BRANDING
// ============================================
export const SITE_CONFIG = {
  // Main title shown on homepage
  title: 'Little World',
  
  // Subtitle/tagline
  subtitle: 'Fun Learning Games for Kids',
  
  // Hero emoji (main character)
  heroEmoji: '🌈',
  
  // Floating emojis on homepage
  floatingEmojis: ['🦁', '🐘', '🦋', '🌟', '🎈', '🎨'],
  
  // Enable/disable confetti animations
  enableConfetti: true,
  
  // Enable/disable sound (text-to-speech)
  enableSound: true,
};

// ============================================
// 4. GAME CONFIGURATION
// ============================================
export const GAMES_CONFIG = {
  // Enable/disable specific games
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
  
  // Game display order
  order: ['animals', 'colors', 'shapes', 'numbers', 'alphabet', 'bodyParts', 'fruits', 'vehicles'],
};

// ============================================
// 5. TRANSLATIONS
// ============================================
export const TRANSLATIONS: Record<LanguageCode, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.menu': 'Menu',
    'nav.back': 'Back',
    
    // Homepage
    'home.welcome': 'Welcome!',
    'home.start': 'START',
    'home.selectGame': 'Choose a Game',
    
    // Games
    'game.animals': 'Animals',
    'game.colors': 'Colors',
    'game.shapes': 'Shapes',
    'game.numbers': 'Numbers',
    'game.alphabet': 'Alphabet',
    'game.bodyParts': 'Body Parts',
    'game.fruits': 'Fruits',
    'game.vehicles': 'Vehicles',
    
    // Game subtitles
    'game.animals.subtitle': 'Animal Sounds',
    'game.colors.subtitle': 'Learn Colors',
    'game.shapes.subtitle': 'Learn Shapes',
    'game.numbers.subtitle': 'Count Together',
    'game.alphabet.subtitle': 'Learn Letters',
    'game.bodyParts.subtitle': 'Body Parts',
    'game.fruits.subtitle': 'Fruits & Vegetables',
    'game.vehicles.subtitle': 'Vehicles',
    
    // Feedback
    'feedback.great': 'Great!',
    'feedback.awesome': 'Awesome!',
    'feedback.wellDone': 'Well Done!',
    'feedback.amazing': 'Amazing!',
  },
  tr: {
    'nav.home': 'Ana Menü',
    'nav.menu': 'Menü',
    'nav.back': 'Geri',
    'home.welcome': 'Hoş Geldin!',
    'home.start': 'BAŞLA',
    'home.selectGame': 'Oyun Seç',
    'game.animals': 'Hayvanlar',
    'game.colors': 'Renkler',
    'game.shapes': 'Şekiller',
    'game.numbers': 'Sayılar',
    'game.alphabet': 'Alfabe',
    'game.bodyParts': 'Vücut Bölümleri',
    'game.fruits': 'Meyveler',
    'game.vehicles': 'Araçlar',
    'game.animals.subtitle': 'Hayvan Sesleri',
    'game.colors.subtitle': 'Renkleri Öğren',
    'game.shapes.subtitle': 'Şekilleri Tanı',
    'game.numbers.subtitle': 'Sayıları Say',
    'game.alphabet.subtitle': 'Harfleri Öğren',
    'game.bodyParts.subtitle': 'Vücut Bölümleri',
    'game.fruits.subtitle': 'Meyve ve Sebzeler',
    'game.vehicles.subtitle': 'Araçlar',
    'feedback.great': 'Harika!',
    'feedback.awesome': 'Mükemmel!',
    'feedback.wellDone': 'Aferin!',
    'feedback.amazing': 'Şahane!',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.menu': 'Menú',
    'nav.back': 'Atrás',
    'home.welcome': '¡Bienvenido!',
    'home.start': 'COMENZAR',
    'home.selectGame': 'Elige un Juego',
    'game.animals': 'Animales',
    'game.colors': 'Colores',
    'game.shapes': 'Formas',
    'game.numbers': 'Números',
    'game.alphabet': 'Alfabeto',
    'game.bodyParts': 'Partes del Cuerpo',
    'game.fruits': 'Frutas',
    'game.vehicles': 'Vehículos',
    'game.animals.subtitle': 'Sonidos de Animales',
    'game.colors.subtitle': 'Aprende los Colores',
    'game.shapes.subtitle': 'Aprende las Formas',
    'game.numbers.subtitle': 'Contar Juntos',
    'game.alphabet.subtitle': 'Aprende las Letras',
    'game.bodyParts.subtitle': 'Partes del Cuerpo',
    'game.fruits.subtitle': 'Frutas y Verduras',
    'game.vehicles.subtitle': 'Vehículos',
    'feedback.great': '¡Genial!',
    'feedback.awesome': '¡Increíble!',
    'feedback.wellDone': '¡Bien Hecho!',
    'feedback.amazing': '¡Asombroso!',
  },
  de: {
    'nav.home': 'Startseite',
    'nav.menu': 'Menü',
    'nav.back': 'Zurück',
    'home.welcome': 'Willkommen!',
    'home.start': 'START',
    'home.selectGame': 'Wähle ein Spiel',
    'game.animals': 'Tiere',
    'game.colors': 'Farben',
    'game.shapes': 'Formen',
    'game.numbers': 'Zahlen',
    'game.alphabet': 'Alphabet',
    'game.bodyParts': 'Körperteile',
    'game.fruits': 'Obst',
    'game.vehicles': 'Fahrzeuge',
    'game.animals.subtitle': 'Tiergeräusche',
    'game.colors.subtitle': 'Farben Lernen',
    'game.shapes.subtitle': 'Formen Lernen',
    'game.numbers.subtitle': 'Zusammen Zählen',
    'game.alphabet.subtitle': 'Buchstaben Lernen',
    'game.bodyParts.subtitle': 'Körperteile',
    'game.fruits.subtitle': 'Obst und Gemüse',
    'game.vehicles.subtitle': 'Fahrzeuge',
    'feedback.great': 'Toll!',
    'feedback.awesome': 'Super!',
    'feedback.wellDone': 'Gut Gemacht!',
    'feedback.amazing': 'Fantastisch!',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.menu': 'Menu',
    'nav.back': 'Retour',
    'home.welcome': 'Bienvenue!',
    'home.start': 'COMMENCER',
    'home.selectGame': 'Choisis un Jeu',
    'game.animals': 'Animaux',
    'game.colors': 'Couleurs',
    'game.shapes': 'Formes',
    'game.numbers': 'Nombres',
    'game.alphabet': 'Alphabet',
    'game.bodyParts': 'Parties du Corps',
    'game.fruits': 'Fruits',
    'game.vehicles': 'Véhicules',
    'game.animals.subtitle': 'Sons des Animaux',
    'game.colors.subtitle': 'Apprendre les Couleurs',
    'game.shapes.subtitle': 'Apprendre les Formes',
    'game.numbers.subtitle': 'Compter Ensemble',
    'game.alphabet.subtitle': 'Apprendre les Lettres',
    'game.bodyParts.subtitle': 'Parties du Corps',
    'game.fruits.subtitle': 'Fruits et Légumes',
    'game.vehicles.subtitle': 'Véhicules',
    'feedback.great': 'Génial!',
    'feedback.awesome': 'Excellent!',
    'feedback.wellDone': 'Bien Joué!',
    'feedback.amazing': 'Incroyable!',
  },
};

// ============================================
// 6. GAME DATA (Customizable)
// ============================================

// Animals Game Data
export const ANIMALS_DATA = {
  lion: { emoji: '🦁', sound: 'Roar' },
  elephant: { emoji: '🐘', sound: 'Trumpet' },
  dog: { emoji: '🐶', sound: 'Woof woof' },
  cat: { emoji: '🐱', sound: 'Meow' },
  cow: { emoji: '🐮', sound: 'Moo' },
  pig: { emoji: '🐷', sound: 'Oink oink' },
  frog: { emoji: '🐸', sound: 'Ribbit' },
  chick: { emoji: '🐤', sound: 'Cheep cheep' },
  duck: { emoji: '🦆', sound: 'Quack quack' },
  sheep: { emoji: '🐑', sound: 'Baa baa' },
  horse: { emoji: '🐴', sound: 'Neigh' },
  monkey: { emoji: '🐵', sound: 'Ooh ooh' },
};

// Colors Game Data
export const COLORS_DATA = {
  red: { emoji: '🍎', hex: '#FF6B6B' },
  blue: { emoji: '💧', hex: '#45B7D1' },
  yellow: { emoji: '🌻', hex: '#FFE66D' },
  green: { emoji: '🍀', hex: '#96CEB4' },
  purple: { emoji: '🍇', hex: '#DDA0DD' },
  orange: { emoji: '🍊', hex: '#FFA07A' },
  pink: { emoji: '🌸', hex: '#FFB6C1' },
  brown: { emoji: '🍫', hex: '#D2691E' },
  black: { emoji: '🐈‍⬛', hex: '#2D2D2D' },
  white: { emoji: '🕊️', hex: '#F5F5F5' },
};

// Shapes Game Data
export const SHAPES_DATA = {
  circle: { emoji: '🔵', sides: 'No sides' },
  square: { emoji: '🟦', sides: '4 sides' },
  triangle: { emoji: '🔺', sides: '3 sides' },
  star: { emoji: '⭐', sides: '5 points' },
  heart: { emoji: '❤️', sides: 'Love shape' },
  rectangle: { emoji: '🟩', sides: '4 sides' },
  diamond: { emoji: '🔶', sides: '4 sides' },
  oval: { emoji: '🥚', sides: 'No sides' },
};

// Alphabet Game Data
export const ALPHABET_DATA = {
  A: { emoji: '🍎', word: 'Apple' },
  B: { emoji: '🍌', word: 'Banana' },
  C: { emoji: '🐱', word: 'Cat' },
  D: { emoji: '🐕', word: 'Dog' },
  E: { emoji: '🥚', word: 'Egg' },
  F: { emoji: '🐟', word: 'Fish' },
  G: { emoji: '🍇', word: 'Grapes' },
  H: { emoji: '🏠', word: 'House' },
  I: { emoji: '🍦', word: 'Ice Cream' },
  J: { emoji: '🤹', word: 'Juggle' },
  K: { emoji: '🔑', word: 'Key' },
  L: { emoji: '🦁', word: 'Lion' },
  M: { emoji: '🌙', word: 'Moon' },
  N: { emoji: '🪺', word: 'Nest' },
  O: { emoji: '🍊', word: 'Orange' },
  P: { emoji: '🍕', word: 'Pizza' },
  Q: { emoji: '👸', word: 'Queen' },
  R: { emoji: '🌈', word: 'Rainbow' },
  S: { emoji: '☀️', word: 'Sun' },
  T: { emoji: '🐯', word: 'Tiger' },
  U: { emoji: '☂️', word: 'Umbrella' },
  V: { emoji: '🎻', word: 'Violin' },
  W: { emoji: '🍉', word: 'Watermelon' },
  X: { emoji: '📻', word: 'Xylophone' },
  Y: { emoji: '🧶', word: 'Yarn' },
  Z: { emoji: '🦓', word: 'Zebra' },
};

// Body Parts Game Data
export const BODY_PARTS_DATA = {
  head: { emoji: '👤', action: 'Nod your head' },
  eyes: { emoji: '👀', action: 'Blink your eyes' },
  nose: { emoji: '👃', action: 'Touch your nose' },
  mouth: { emoji: '👄', action: 'Open your mouth' },
  ears: { emoji: '👂', action: 'Touch your ears' },
  hands: { emoji: '👋', action: 'Wave your hands' },
  fingers: { emoji: '🤚', action: 'Count your fingers' },
  feet: { emoji: '🦶', action: 'Stamp your feet' },
  tummy: { emoji: '🫃', action: 'Rub your tummy' },
};

// Fruits Game Data
export const FRUITS_DATA = {
  apple: { emoji: '🍎', color: 'Red' },
  banana: { emoji: '🍌', color: 'Yellow' },
  grapes: { emoji: '🍇', color: 'Purple' },
  orange: { emoji: '🍊', color: 'Orange' },
  strawberry: { emoji: '🍓', color: 'Red' },
  watermelon: { emoji: '🍉', color: 'Green' },
  cherry: { emoji: '🍒', color: 'Red' },
  peach: { emoji: '🍑', color: 'Pink' },
  pear: { emoji: '🍐', color: 'Green' },
  kiwi: { emoji: '🥝', color: 'Brown' },
  carrot: { emoji: '🥕', color: 'Orange' },
  broccoli: { emoji: '🥦', color: 'Green' },
};

// Vehicles Game Data
export const VEHICLES_DATA = {
  car: { emoji: '🚗', sound: 'Beep beep' },
  bus: { emoji: '🚌', sound: 'Vroom vroom' },
  train: { emoji: '🚂', sound: 'Choo choo' },
  airplane: { emoji: '✈️', sound: 'Whoosh' },
  boat: { emoji: '🚢', sound: 'Toot toot' },
  bicycle: { emoji: '🚲', sound: 'Ring ring' },
  ambulance: { emoji: '🚑', sound: 'Wee woo' },
  firetruck: { emoji: '🚒', sound: 'Wee woo' },
  police: { emoji: '🚓', sound: 'Wee woo' },
  rocket: { emoji: '🚀', sound: 'Blast off' },
};

// Numbers Game Data (1-10)
export const NUMBERS_DATA = [
  { num: 1, emoji: '🍎' },
  { num: 2, emoji: '🍌' },
  { num: 3, emoji: '🍇' },
  { num: 4, emoji: '🍓' },
  { num: 5, emoji: '🍊' },
  { num: 6, emoji: '🍑' },
  { num: 7, emoji: '🍒' },
  { num: 8, emoji: '🥝' },
  { num: 9, emoji: '🍋' },
  { num: 10, emoji: '🍉' },
];
