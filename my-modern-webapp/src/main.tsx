import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 1. 导入 BrowserRouter
import App from './App.tsx';
import './index.css';
import { LanguageProvider } from './context/LanguageContext.tsx'; // 1. 导入 Provider
import ScrollToTop from './components/ScrollToTop.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* 2. 用 LanguageProvider 包裹 App 组件 */}
    <BrowserRouter>
      <LanguageProvider>
        <ScrollToTop />
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>,
);