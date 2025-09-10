import React from 'react';
import { X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const { language, setLanguage, t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-8 transform transition-all">
        <div className="flex items-center justify-between mb-6">
          <h2 className={`text-2xl font-bold text-gray-800 ${
            language === 'ur' ? 'font-urdu' : ''
          }`}>
            {t('settings')}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <label className={`block text-lg font-medium text-gray-700 mb-3 ${
              language === 'ur' ? 'font-urdu' : ''
            }`}>
              <Globe className="w-5 h-5 inline mr-2" />
              {t('language')}
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setLanguage('en')}
                className={`p-4 rounded-xl border-2 font-bold transition-all duration-200 ${
                  language === 'en'
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-gray-300 text-gray-700'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('ur')}
                className={`p-4 rounded-xl border-2 font-bold transition-all duration-200 font-urdu ${
                  language === 'ur'
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-gray-300 text-gray-700'
                }`}
              >
                اردو
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-bold transition-colors duration-200"
          >
            {language === 'ur' ? 'محفوظ کریں' : 'Save Settings'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;