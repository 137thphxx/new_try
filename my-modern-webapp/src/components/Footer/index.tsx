import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

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
    
    // 错误: styles.sitefooter -> 正确: styles.siteFooter
    <footer className={styles['site-footer']}>
      {/* 同样修正以下所有类名 */}
      <div className={styles['footer-content']}>
        <div className={styles['footer-left']}>
          {/* 版权信息将根据年份自动更新 */}
          士功 © {currentYear} ALL RIGHTS RESERVED
        </div>
        <div className={styles['footer-center']}>
          {/* Logo 位置 */}
          <LogoIcon />
        </div>
        <div className={styles.links}>
          <Link to="/privacy" className={styles.link}>
            {/* 3. 使用双语 */}
            {t('隐私政策', 'Privacy Policy')}
          </Link>
        
          <span style={{ margin: '0 10px', color: '#444' }}>|</span>
        
          <Link to="/terms" className={styles.link}>
            {/* 3. 使用双语 */}
            {t('使用条款', 'Terms of Use')}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;