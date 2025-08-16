import React, { createContext, useState, useContext, type ReactNode } from 'react'; // 在 ReactNode 前添加 type

// 定义语言类型
type Language = 'zh' | 'en';

// 定义 Context 将要提供的值的类型
interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (zhText: string, enText: string) => string; // 一个简单的翻译函数
}

// 1. 创建 Context，并提供一个默认值
// '!' 是一个非空断言，告诉 TypeScript 我们确定在使用时 contextValue 不会是 null
const LanguageContext = createContext<LanguageContextType>(null!);

// 2. 创建一个自定义 Hook，方便组件使用 Context
export const useLanguage = () => {
  return useContext(LanguageContext);
};

// 3. 创建 Provider 组件，它将作为所有组件的父组件来提供 state
interface LanguageProviderProps {
  children: ReactNode; // children 的类型是 ReactNode
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('zh'); // 默认语言为中文

  // 一个简单的翻译函数 t (t for translate)
  // 根据当前语言，返回对应的文本
  const t = (zhText: string, enText: string) => {
    return language === 'zh' ? zhText : enText;
  };
  
  const value = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};