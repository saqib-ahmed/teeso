import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    appName: 'Teeso',
    welcomeTitle: 'Welcome to Teeso!',
    welcomeSubtitle: 'Choose a category and start guessing!',
    selectCategory: 'Select Category',
    score: 'Score',
    streak: 'Streak',
    bestScore: 'Best Score',
    hint: 'Hint',
    guess: 'Your Guess',
    submit: 'Submit',
    nextRound: 'Next Round',
    correct: 'Correct!',
    incorrect: 'Try Again!',
    gameOver: 'Game Over',
    playAgain: 'Play Again',
    backToMenu: 'Back to Menu',
    giveUp: 'Give Up',
    showAnswer: 'Show Answer',
    answer: 'Answer',
    excellent: 'Excellent!',
    wellDone: 'Well Done!',
    goodJob: 'Good Job!',
    keepTrying: 'Keep Trying!',
    placeholder: 'Enter your guess...',
    settings: 'Settings',
    language: 'Language',
    statistics: 'Statistics',
    totalGames: 'Total Games',
    totalScore: 'Total Score',
    bestStreak: 'Best Streak'
  },
  ur: {
    appName: 'تیسو',
    welcomeTitle: 'تیسو میں خوش آمدید!',
    welcomeSubtitle: 'ایک کیٹگری چنیں اور اندازہ لگانا شروع کریں!',
    selectCategory: 'کیٹگری منتخب کریں',
    score: 'سکور',
    streak: 'تسلسل',
    bestScore: 'بہترین سکور',
    hint: 'اشارہ',
    guess: 'آپ کا اندازہ',
    submit: 'جمع کریں',
    nextRound: 'اگلا راؤنڈ',
    correct: 'صحیح!',
    incorrect: 'دوبارہ کوشش کریں!',
    gameOver: 'کھیل ختم',
    playAgain: 'دوبارہ کھیلیں',
    backToMenu: 'مینو پر واپس',
    giveUp: 'ہار مان لیں',
    showAnswer: 'جواب دکھائیں',
    answer: 'جواب',
    excellent: 'بہترین!',
    wellDone: 'شاباش!',
    goodJob: 'اچھا کام!',
    keepTrying: 'کوشش جاری رکھیں!',
    placeholder: 'اپنا اندازہ درج کریں...',
    settings: 'سیٹنگز',
    language: 'زبان',
    statistics: 'اعداد و شمار',
    totalGames: 'کل کھیل',
    totalScore: 'کل سکور',
    bestStreak: 'بہترین تسلسل'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('teeso-language');
    return (saved as Language) || 'en';
  });

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('teeso-language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleLanguageChange, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};