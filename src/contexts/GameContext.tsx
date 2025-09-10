import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { GameState, UserProgress, GameItem } from '../types';

interface GameContextType {
  gameState: GameState;
  userProgress: UserProgress;
  updateGameState: (updates: Partial<GameState>) => void;
  updateScore: (points: number) => void;
  resetGame: () => void;
  saveProgress: () => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

const initialGameState: GameState = {
  currentItem: null,
  hintsRevealed: 0,
  score: 0,
  streak: 0,
  category: '',
  isGameActive: false
};

const initialUserProgress: UserProgress = {
  totalScore: 0,
  gamesPlayed: 0,
  bestStreak: 0,
  categoryScores: {},
  language: 'en'
};

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [gameState, setGameState] = useState<GameState>(initialGameState);
  const [userProgress, setUserProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem('teeso-progress');
    return saved ? JSON.parse(saved) : initialUserProgress;
  });

  const updateGameState = (updates: Partial<GameState>) => {
    setGameState(prev => ({ ...prev, ...updates }));
  };

  const updateScore = (points: number) => {
    setGameState(prev => ({ ...prev, score: prev.score + points }));
    setUserProgress(prev => ({
      ...prev,
      totalScore: prev.totalScore + points,
      categoryScores: {
        ...prev.categoryScores,
        [gameState.category]: (prev.categoryScores[gameState.category] || 0) + points
      }
    }));
  };

  const resetGame = () => {
    setGameState(initialGameState);
  };

  const saveProgress = () => {
    const updatedProgress = {
      ...userProgress,
      gamesPlayed: userProgress.gamesPlayed + 1,
      bestStreak: Math.max(userProgress.bestStreak, gameState.streak)
    };
    setUserProgress(updatedProgress);
    localStorage.setItem('teeso-progress', JSON.stringify(updatedProgress));
  };

  useEffect(() => {
    localStorage.setItem('teeso-progress', JSON.stringify(userProgress));
  }, [userProgress]);

  return (
    <GameContext.Provider value={{
      gameState,
      userProgress,
      updateGameState,
      updateScore,
      resetGame,
      saveProgress
    }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};