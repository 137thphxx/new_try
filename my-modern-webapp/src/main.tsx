import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { LanguageProvider } from './context/LanguageContext.tsx'; // 1. 导入 Provider

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* 2. 用 LanguageProvider 包裹 App 组件 */}
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>,
);