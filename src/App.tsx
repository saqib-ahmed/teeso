import React, { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { GameProvider } from './contexts/GameContext';
import Header from './components/Header';
import CategorySelector from './components/CategorySelector';
import GamePlay from './components/GamePlay';
import SettingsModal from './components/SettingsModal';
import StatsModal from './components/StatsModal';

type AppView = 'menu' | 'game';

function App() {
  const [currentView, setCurrentView] = useState<AppView>('menu');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [showSettings, setShowSettings] = useState(false);
  const [showStats, setShowStats] = useState(false);

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentView('game');
  };

  const handleBackToMenu = () => {
    setCurrentView('menu');
    setSelectedCategory('');
  };

  return (
    <LanguageProvider>
      <GameProvider>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <Header 
            onSettingsClick={() => setShowSettings(true)}
            onStatsClick={() => setShowStats(true)}
          />
          
          <main className="pb-8">
            {currentView === 'menu' && (
              <CategorySelector onCategorySelect={handleCategorySelect} />
            )}
            
            {currentView === 'game' && selectedCategory && (
              <GamePlay 
                categoryId={selectedCategory} 
                onBackToMenu={handleBackToMenu}
              />
            )}
          </main>

          <SettingsModal 
            isOpen={showSettings} 
            onClose={() => setShowSettings(false)} 
          />
          
          <StatsModal 
            isOpen={showStats} 
            onClose={() => setShowStats(false)} 
          />
        </div>
      </GameProvider>
    </LanguageProvider>
  );
}

export default App;