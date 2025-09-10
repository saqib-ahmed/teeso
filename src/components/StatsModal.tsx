import React from 'react';
import { X, Trophy, Target, Zap, BarChart3 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useGame } from '../contexts/GameContext';

interface StatsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const StatsModal: React.FC<StatsModalProps> = ({ isOpen, onClose }) => {
  const { language, t } = useLanguage();
  const { userProgress } = useGame();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-8 transform transition-all">
        <div className="flex items-center justify-between mb-6">
          <h2 className={`text-2xl font-bold text-gray-800 ${
            language === 'ur' ? 'font-urdu' : ''
          }`}>
            {t('statistics')}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-4">
          <div className="bg-yellow-50 p-6 rounded-xl border-2 border-yellow-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Trophy className="w-8 h-8 text-yellow-600" />
                <div>
                  <p className={`text-sm text-yellow-600 ${
                    language === 'ur' ? 'font-urdu' : ''
                  }`}>
                    {t('totalScore')}
                  </p>
                  <p className="text-2xl font-bold text-yellow-800">
                    {userProgress.totalScore}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Target className="w-8 h-8 text-blue-600" />
                <div>
                  <p className={`text-sm text-blue-600 ${
                    language === 'ur' ? 'font-urdu' : ''
                  }`}>
                    {t('totalGames')}
                  </p>
                  <p className="text-2xl font-bold text-blue-800">
                    {userProgress.gamesPlayed}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Zap className="w-8 h-8 text-green-600" />
                <div>
                  <p className={`text-sm text-green-600 ${
                    language === 'ur' ? 'font-urdu' : ''
                  }`}>
                    {t('bestStreak')}
                  </p>
                  <p className="text-2xl font-bold text-green-800">
                    {userProgress.bestStreak}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {Object.keys(userProgress.categoryScores).length > 0 && (
            <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200">
              <div className="flex items-center space-x-3 mb-4">
                <BarChart3 className="w-6 h-6 text-purple-600" />
                <h3 className={`text-lg font-bold text-purple-800 ${
                  language === 'ur' ? 'font-urdu' : ''
                }`}>
                  {language === 'ur' ? 'کیٹگری کے اسکور' : 'Category Scores'}
                </h3>
              </div>
              <div className="space-y-2">
                {Object.entries(userProgress.categoryScores).map(([category, score]) => (
                  <div key={category} className="flex justify-between items-center">
                    <span className={`text-purple-700 capitalize ${
                      language === 'ur' ? 'font-urdu' : ''
                    }`}>
                      {category}
                    </span>
                    <span className="font-bold text-purple-800">{score}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-bold transition-colors duration-200"
          >
            {language === 'ur' ? 'بند کریں' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatsModal;