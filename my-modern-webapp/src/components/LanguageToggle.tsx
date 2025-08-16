import React from 'react';
import { useLanguage } from '../context/LanguageContext'; // 导入我们的自定义 Hook

const LanguageToggle: React.FC = () => {
  // 从 Context 中获取当前语言和设置语言的方法
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-toggle">
      <button
        className={`lang-btn ${language === 'zh' ? 'active' : ''}`}
        onClick={() => setLanguage('zh')}
      >
        中文
      </button>
      <button
        className={`lang-btn ${language === 'en' ? 'active' : ''}`}
        onClick={() => setLanguage('en')}
      >
        English
      </button>
    </div>
  );
};

export default LanguageToggle;