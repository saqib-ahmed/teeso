import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  ArrowLeft,
  Lightbulb,
  Heart,
  Star,
  RefreshCw,
  Volume2,
} from "lucide-react";
import { useGame } from "../contexts/GameContext";
import { useLanguage } from "../contexts/LanguageContext";
import { categories } from "../data/gameData";
import { GameItem } from "../types";

interface GamePlayProps {
  categoryId: string;
  onBackToMenu: () => void;
}

const GamePlay: React.FC<GamePlayProps> = ({ categoryId, onBackToMenu }) => {
  const { gameState, updateGameState, updateScore, saveProgress } = useGame();
  const { language } = useLanguage();

  const [currentItem, setCurrentItem] = useState<GameItem | null>(null);
  const [hintsRevealed, setHintsRevealed] = useState(0);
  const [lives, setLives] = useState(3);
  const [multipleChoiceOptions, setMultipleChoiceOptions] = useState<string[]>(
    []
  );
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [usedItems, setUsedItems] = useState<Set<string>>(new Set());

  const generateMultipleChoiceOptions = useCallback(
    (correctItem: GameItem, items: GameItem[]) => {
      const allItems = items.filter((item) => item.id !== correctItem.id);
      const wrongOptions = allItems
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)
        .map((item) => item.name[language]);

      const options = [...wrongOptions, correctItem.name[language]].sort(
        () => 0.5 - Math.random()
      );

      setMultipleChoiceOptions(options);
    },
    [language]
  );

  const startNewRound = useCallback(() => {
    const currentCategoryItems =
      categories.find((cat) => cat.id === categoryId)?.items || [];
    if (currentCategoryItems.length === 0) return;

    // Get items that haven't been used yet
    const availableItems = currentCategoryItems.filter(
      (item) => !usedItems.has(item.id)
    );

    let selectedItem: GameItem;

    // If all items have been used, reset and start over
    if (availableItems.length === 0) {
      setUsedItems(new Set());
      selectedItem =
        currentCategoryItems[
          Math.floor(Math.random() * currentCategoryItems.length)
        ];
      setUsedItems(new Set([selectedItem.id]));
    } else {
      // Pick a random item from unused items
      selectedItem =
        availableItems[Math.floor(Math.random() * availableItems.length)];
      setUsedItems((prev) => new Set([...prev, selectedItem.id]));
    }

    setCurrentItem(selectedItem);
    setHintsRevealed(1); // Always show the first hint
    setSelectedAnswer("");
    setShowFeedback(false);
    setIsCorrect(false);

    // Always use multiple choice for all difficulties
    generateMultipleChoiceOptions(selectedItem, currentCategoryItems);
  }, [categoryId, generateMultipleChoiceOptions, usedItems]);

  const initialized = useRef(false);

  // Initialize game
  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      startNewRound();
      updateGameState({
        category: categoryId,
        isGameActive: true,
        score: 0,
        streak: 0,
      });
    }
  }, [categoryId, startNewRound, updateGameState]);

  // Reset initialization and used items when category changes
  useEffect(() => {
    initialized.current = false;
    setUsedItems(new Set());
  }, [categoryId]);

  const handleMultipleChoiceAnswer = (answer: string) => {
    if (!currentItem) return;

    setSelectedAnswer(answer);
    const correct =
      answer.toLowerCase() === currentItem.name[language].toLowerCase();
    setIsCorrect(correct);
    setShowFeedback(true);

    if (correct) {
      const points = Math.max(100 - hintsRevealed * 20, 10);
      updateScore(points);
      updateGameState({ streak: gameState.streak + 1 });
      playSuccessSound();

      // Show congratulations overlay for correct answers
      setTimeout(() => {
        startNewRound();
      }, 3000);
    } else {
      setLives((prev) => Math.max(0, prev - 1));
      updateGameState({ streak: 0 });
      playErrorSound();

      // Put the item back in the queue for later (remove from usedItems)
      if (currentItem) {
        setUsedItems((prev) => {
          const newSet = new Set(prev);
          newSet.delete(currentItem.id);
          return newSet;
        });
      }

      setTimeout(() => {
        if (lives <= 1) {
          setLives(3);
        }
        startNewRound();
      }, 3000);
    }
  };

  const revealHint = () => {
    if (!currentItem || hintsRevealed >= currentItem.hints[language].length)
      return;
    setHintsRevealed((prev) => prev + 1);
  };

  const playSuccessSound = () => {
    try {
      const AudioContext =
        window.AudioContext ||
        (
          window as unknown as {
            webkitAudioContext: typeof window.AudioContext;
          }
        ).webkitAudioContext;
      const audioContext = new AudioContext();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
      oscillator.frequency.setValueAtTime(
        659.25,
        audioContext.currentTime + 0.1
      ); // E5
      oscillator.frequency.setValueAtTime(
        783.99,
        audioContext.currentTime + 0.2
      ); // G5

      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(
        0.01,
        audioContext.currentTime + 0.3
      );

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.3);
    } catch (error) {
      console.warn(error);
      console.log("Audio not supported");
    }
  };

  const playErrorSound = () => {
    try {
      const AudioContext =
        window.AudioContext ||
        (
          window as unknown as {
            webkitAudioContext: typeof window.AudioContext;
          }
        ).webkitAudioContext;
      const audioContext = new AudioContext();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(
        0.01,
        audioContext.currentTime + 0.5
      );

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.5);
    } catch (error) {
      console.warn(error);
      console.log("Audio not supported");
    }
  };

  const speakText = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language === "ur" ? "ur-PK" : "en-US";
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  if (!currentItem) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500'></div>
      </div>
    );
  }

  return (
    <div className='max-w-4xl mx-auto px-4 py-4 sm:py-6'>
      {/* Header */}
      <div className='flex items-center justify-between mb-4 sm:mb-6'>
        <button
          onClick={onBackToMenu}
          className='flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors touch-manipulation p-2 -ml-2'
        >
          <ArrowLeft size={20} className='sm:w-6 sm:h-6' />
          <span
            className={`text-sm sm:text-base ${
              language === "ur" ? "font-urdu" : ""
            }`}
          >
            {language === "ur" ? "واپس" : "Back"}
          </span>
        </button>

        <div className='flex items-center space-x-2 sm:space-x-4'>
          <div className='flex items-center space-x-1'>
            {[...Array(lives)].map((_, i) => (
              <Heart
                key={i}
                size={16}
                className='sm:w-5 sm:h-5 text-red-500 fill-current'
              />
            ))}
          </div>

          {/* Progress indicator */}
          {(() => {
            const totalItems =
              categories.find((cat) => cat.id === categoryId)?.items.length ||
              0;
            const completedItems = usedItems.size;
            return (
              <div className='flex items-center space-x-1 sm:space-x-2 bg-blue-100 px-2 sm:px-3 py-1 rounded-full'>
                <span className='text-blue-700 font-semibold text-xs sm:text-sm'>
                  {completedItems}/{totalItems}
                </span>
              </div>
            );
          })()}

          <div className='flex items-center space-x-1 sm:space-x-2 bg-yellow-100 px-2 sm:px-3 py-1 rounded-full'>
            <Star size={14} className='sm:w-4 sm:h-4 text-yellow-500' />
            <span className='font-bold text-yellow-700 text-sm sm:text-base'>
              {gameState.score}
            </span>
          </div>
        </div>
      </div>

      {/* Game Area */}
      <div className='bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-8 mb-4 sm:mb-6'>
        {/* Hints Section */}
        <div className='mb-6 sm:mb-8'>
          <div className='flex items-center justify-between mb-4'>
            <h2
              className={`text-xl sm:text-2xl font-bold text-gray-800 ${
                language === "ur" ? "font-urdu" : ""
              }`}
            >
              {language === "ur" ? "اشارے" : "Hints"}
            </h2>
            <button
              onClick={() =>
                speakText(
                  currentItem.hints[language][hintsRevealed - 1] ||
                    currentItem.hints[language][0]
                )
              }
              className='p-2 bg-blue-100 hover:bg-blue-200 rounded-full transition-colors touch-manipulation'
              aria-label='Speak hint'
            >
              <Volume2 size={18} className='sm:w-5 sm:h-5 text-blue-600' />
            </button>
          </div>

          <div className='space-y-3'>
            {currentItem.hints[language]
              .slice(0, hintsRevealed)
              .map((hint, index) => (
                <div
                  key={index}
                  className={`p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-l-4 border-blue-400 animate-bounce-in ${
                    language === "ur" ? "font-urdu text-right" : ""
                  }`}
                >
                  <p className='text-gray-700 text-sm sm:text-base'>{hint}</p>
                </div>
              ))}
          </div>

          {hintsRevealed < currentItem.hints[language].length && (
            <button
              onClick={revealHint}
              className='mt-4 flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:shadow-lg transition-all transform hover:scale-105 touch-manipulation'
            >
              <Lightbulb size={18} className='sm:w-5 sm:h-5' />
              <span
                className={`text-sm sm:text-base ${
                  language === "ur" ? "font-urdu" : ""
                }`}
              >
                {language === "ur" ? "اگلا اشارہ" : "Next Hint"}
              </span>
            </button>
          )}
        </div>

        {/* Guessing Interface */}
        <div className='border-t pt-6 sm:pt-8'>
          <div>
            <h3
              className={`text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-center ${
                language === "ur" ? "font-urdu" : ""
              }`}
            >
              {language === "ur"
                ? "صحیح جواب چنیں"
                : "Choose the correct answer"}
            </h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4'>
              {multipleChoiceOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleMultipleChoiceAnswer(option)}
                  disabled={showFeedback}
                  className={`p-3 sm:p-4 rounded-xl border-2 transition-all transform hover:scale-105 touch-manipulation text-sm sm:text-base ${
                    showFeedback && option === currentItem.name[language]
                      ? "bg-green-100 border-green-400 text-green-700 animate-success-pulse"
                      : showFeedback && option === selectedAnswer && !isCorrect
                      ? "bg-red-100 border-red-400 text-red-700 animate-shake"
                      : "bg-gray-50 border-gray-200 hover:border-blue-400 hover:bg-blue-50"
                  } ${language === "ur" ? "font-urdu" : ""}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Feedback - only for wrong answers */}
        {showFeedback && !isCorrect && (
          <div className='mt-4 sm:mt-6 p-4 sm:p-6 rounded-xl text-center bg-red-100 border-red-400 border-2'>
            <div className='text-3xl sm:text-4xl mb-2'>😔</div>
            <p
              className={`text-lg sm:text-xl font-semibold text-red-700 ${
                language === "ur" ? "font-urdu" : ""
              }`}
            >
              {(language === "ur"
                ? "کوشش کریں! صحیح جواب: "
                : "Try again! Correct answer: ") + currentItem.name[language]}
            </p>
          </div>
        )}

        {/* Category completion celebration */}
        {(() => {
          const totalItems =
            categories.find((cat) => cat.id === categoryId)?.items.length || 0;
          const completedItems = usedItems.size;
          return completedItems === totalItems &&
            completedItems > 0 &&
            !showFeedback ? (
            <div className='mt-4 sm:mt-6 p-4 sm:p-6 bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-purple-400 rounded-xl text-center'>
              <div className='text-4xl sm:text-5xl mb-3'>🎊</div>
              <h3
                className={`text-xl sm:text-2xl font-bold text-purple-700 mb-2 ${
                  language === "ur" ? "font-urdu" : ""
                }`}
              >
                {language === "ur" ? "مبارک ہو!" : "Congratulations!"}
              </h3>
              <p
                className={`text-purple-600 ${
                  language === "ur" ? "font-urdu" : ""
                }`}
              >
                {language === "ur"
                  ? "آپ نے اس کیٹگری کے تمام سوالات مکمل کر لیے!"
                  : "You've completed all items in this category!"}
              </p>
            </div>
          ) : null;
        })()}
      </div>

      {/* Correct Answer Celebration Overlay */}
      {showFeedback && isCorrect && (
        <div className='fixed inset-0 bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 bg-opacity-95 flex items-center justify-center z-50 p-4'>
          <div className='text-center'>
            <div className='text-8xl sm:text-9xl mb-6 animate-bounce'>🎉</div>
            <h2
              className={`text-4xl sm:text-6xl font-bold text-white mb-4 drop-shadow-lg ${
                language === "ur" ? "font-urdu" : ""
              }`}
            >
              {language === "ur" ? "بہترین!" : "Excellent!"}
            </h2>
            <p
              className={`text-2xl sm:text-3xl text-white mb-6 drop-shadow-md ${
                language === "ur" ? "font-urdu" : ""
              }`}
            >
              {language === "ur" ? "صحیح جواب!" : "Correct Answer!"}
            </p>
            <div className='text-6xl sm:text-7xl mb-4'>⭐</div>
            <p
              className={`text-xl sm:text-2xl text-white font-semibold ${
                language === "ur" ? "font-urdu" : ""
              }`}
            >
              {currentItem?.name[language]}
            </p>
          </div>
        </div>
      )}

      {/* Game Over */}
      {lives === 0 && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'>
          <div className='bg-white rounded-3xl p-6 sm:p-8 max-w-md mx-4 text-center'>
            <div className='text-5xl sm:text-6xl mb-4'>🎮</div>
            <h2
              className={`text-xl sm:text-2xl font-bold mb-4 ${
                language === "ur" ? "font-urdu" : ""
              }`}
            >
              {language === "ur" ? "کھیل ختم!" : "Game Over!"}
            </h2>
            <p
              className={`text-gray-600 mb-6 ${
                language === "ur" ? "font-urdu" : ""
              }`}
            >
              {language === "ur"
                ? `آپ کا سکور: ${gameState.score}`
                : `Your Score: ${gameState.score}`}
            </p>
            <div className='flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4'>
              <button
                onClick={() => {
                  setLives(3);
                  startNewRound();
                }}
                className='flex items-center justify-center space-x-2 bg-blue-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-blue-600 transition-colors touch-manipulation'
              >
                <RefreshCw size={18} className='sm:w-5 sm:h-5' />
                <span
                  className={`text-sm sm:text-base ${
                    language === "ur" ? "font-urdu" : ""
                  }`}
                >
                  {language === "ur" ? "دوبارہ کھیلیں" : "Play Again"}
                </span>
              </button>
              <button
                onClick={() => {
                  saveProgress();
                  onBackToMenu();
                }}
                className={`bg-gray-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-gray-600 transition-colors touch-manipulation text-sm sm:text-base ${
                  language === "ur" ? "font-urdu" : ""
                }`}
              >
                {language === "ur" ? "مینو" : "Menu"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GamePlay;
