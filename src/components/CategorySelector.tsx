import React from 'react';
import { categories } from '../data/gameData';
import { useLanguage } from '../contexts/LanguageContext';

interface CategorySelectorProps {
  onCategorySelect: (categoryId: string) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({ onCategorySelect }) => {
  const { t, language } = useLanguage();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h2 className={`text-4xl font-bold text-gray-800 mb-4 ${
          language === 'ur' ? 'font-urdu' : ''
        }`}>
          {t('welcomeTitle')}
        </h2>
        <p className={`text-xl text-gray-600 ${
          language === 'ur' ? 'font-urdu' : ''
        }`}>
          {t('welcomeSubtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategorySelect(category.id)}
            className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${category.color} p-8 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              
              <h3 className={`text-2xl font-bold mb-2 ${
                language === 'ur' ? 'font-urdu' : ''
              }`}>
                {category.name[language]}
              </h3>
              
              <p className="text-white/80">
                {category.items.length} {language === 'ur' ? 'سوالات' : 'Items'}
              </p>
              
              <div className="mt-4 w-full h-2 bg-white/20 rounded-full">
                <div className="h-full bg-white/40 rounded-full w-3/4"></div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-white/10 rounded-full"></div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;