import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n'; // Конфигурация перевода i18n

import "./css/Home.css";
import "./css/Menue.css";

// 1. ИМПОРТИРУЕМ БИБЛИОТЕКУ РОУТЕРА (Этой строки у тебя не хватало)
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* 2. ОБЯЗАТЕЛЬНО ОБОРАЧИВАЕМ КОМПОНЕНТ APP В ТЕГИ РОУТЕРА */}
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
