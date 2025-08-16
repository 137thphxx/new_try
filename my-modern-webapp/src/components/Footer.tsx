import React from 'react';
import { useLanguage } from '../context/LanguageContext';

// 假设您有一个 Logo 文件放在 public 文件夹下
// 或者您可以直接在这里使用一个 SVG 图标
const LogoIcon = () => (
  <svg 
    width="32" 
    height="32" 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M50 10C27.9 10 10 27.9 10 50C10 72.1 27.9 90 50 90C72.1 90 90 72.1 90 50C90 27.9 72.1 10 50 10ZM50 78C34.5 78 22 65.5 22 50C22 34.5 34.5 22 50 22C65.5 22 78 34.5 78 50C78 65.5 65.5 78 50 78Z" 
      fill="white"
    />
    <path 
      d="M50 30C39 30 30 39 30 50C30 61 39 70 50 70C61 70 70 61 70 50C70 39 61 30 50 30ZM50 58C45.6 58 42 54.4 42 50C42 45.6 45.6 42 50 42C54.4 42 58 45.6 58 50C58 54.4 54.4 58 50 58Z" 
      fill="white"
    />
  </svg>
);


const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-left">
          {/* 版权信息将根据年份自动更新 */}
          士功 © {currentYear} ALL RIGHTS RESERVED
        </div>
        <div className="footer-center">
          {/* Logo 位置 */}
          <LogoIcon />
        </div>
        <div className="footer-right">
          <a href="/privacy-policy">{t('隐私政策', 'PRIVACY POLICY')}</a>
          <a href="/terms-of-use">{t('使用条款', 'TERMS OF USE')}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;