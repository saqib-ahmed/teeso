import React from "react";
import { Settings, BarChart3 } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useGame } from "../contexts/GameContext";

interface HeaderProps {
  onSettingsClick: () => void;
  onStatsClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSettingsClick, onStatsClick }) => {
  const { t, language } = useLanguage();
  const { userProgress } = useGame();

  return (
    <header className='bg-white shadow-lg border-b-4 border-blue-300 sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 py-3 sm:py-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-2 sm:space-x-3'>
            <img src='/icon-1024x1024.png' alt='Teeso' className='w-10 h-10' />
            <div>
              <h1
                className={`text-xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ${
                  language === "ur" ? "font-urdu text-right" : ""
                }`}
              >
                {t("appName")}
              </h1>
            </div>
          </div>

          <div className='flex items-center space-x-2 sm:space-x-4'>
            {/* Mobile score display - simplified */}
            <div className='flex sm:hidden items-center'>
              <div className='bg-yellow-100 px-2 py-1 rounded-full'>
                <span className='text-yellow-800 font-semibold text-xs'>
                  {userProgress.totalScore}
                </span>
              </div>
            </div>

            {/* Desktop score display */}
            <div className='hidden sm:flex items-center space-x-4 lg:space-x-6 text-sm'>
              <div className='bg-yellow-100 px-3 py-2 rounded-full'>
                <span className='text-yellow-800 font-semibold'>
                  {t("totalScore")}: {userProgress.totalScore}
                </span>
              </div>
              <div className='bg-green-100 px-3 py-2 rounded-full'>
                <span className='text-green-800 font-semibold'>
                  {t("totalGames")}: {userProgress.gamesPlayed}
                </span>
              </div>
            </div>

            <button
              onClick={onStatsClick}
              className='p-2 sm:p-2 bg-green-100 hover:bg-green-200 rounded-full transition-colors duration-200 touch-manipulation'
              title={t("statistics")}
              aria-label={t("statistics")}
            >
              <BarChart3 className='w-5 h-5 sm:w-6 sm:h-6 text-green-600' />
            </button>

            <button
              onClick={onSettingsClick}
              className='p-2 sm:p-2 bg-blue-100 hover:bg-blue-200 rounded-full transition-colors duration-200 touch-manipulation'
              title={t("settings")}
              aria-label={t("settings")}
            >
              <Settings className='w-5 h-5 sm:w-6 sm:h-6 text-blue-600' />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
