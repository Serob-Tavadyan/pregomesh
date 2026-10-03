// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Теперь путь супер простой, так как data лежит рядом в src
import translationRU from './data/ru.json';
import translationAM from './data/am.json';
import translationEN from './data/en.json';

const resources = {
    ru: { translation: translationRU },
    am: { translation: translationAM },
    en: { translation: translationEN }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'ru', // Язык по умолчанию
        fallbackLng: 'ru',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
