import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import LanguageToggle from './LanguageToggle'; // 1. 导入 LanguageToggle

const Layout: React.FC = () => {
  return (
    <>
      <LanguageToggle /> {/* 2. 在这里添加语言切换按钮 */}
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;