export interface GameItem {
  id: string;
  name: {
    en: string;
    ur: string;
  };
  hints: {
    en: string[];
    ur: string[];
  };
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface Category {
  id: string;
  name: {
    en: string;
    ur: string;
  };
  icon: string;
  color: string;
  items: GameItem[];
}

export interface GameState {
  currentItem: GameItem | null;
  hintsRevealed: number;
  score: number;
  streak: number;
  category: string;
  isGameActive: boolean;
}

export interface UserProgress {
  totalScore: number;
  gamesPlayed: number;
  bestStreak: number;
  categoryScores: { [key: string]: number };
  language: 'en' | 'ur';
}

export type Language = 'en' | 'ur';