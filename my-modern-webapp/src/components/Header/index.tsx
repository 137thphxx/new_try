import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  // 点击导航链接的处理函数
  const handleNavClick = (path: string) => {
    const isAnchorLink = path.startsWith('/#');

    // 如果是锚点链接 (/#...)
    if (isAnchorLink) {
      // 如果当前不在首页，先跳转到首页
      if (location.pathname !== '/') {
        navigate('/');
        // 使用 setTimeout 等待页面跳转完成后再滚动
        setTimeout(() => {
          const anchorId = path.substring(2); // 移除 '/#'
          const targetElement = document.getElementById(anchorId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // 如果已经在首页，直接滚动
        const anchorId = path.substring(2);
        const targetElement = document.getElementById(anchorId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // 如果是普通页面链接，直接跳转
      navigate(path);
    }
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}>士功芳纶材料有限公司</Link>
        <ul className={styles.nav_links}>
          <li>
            <Link to="/" onClick={(e) => { e.preventDefault(); handleNavClick('/'); }}>{t('首页', 'Home')}</Link>
          </li>
          <li>
            <Link to="/products" onClick={(e) => { e.preventDefault(); handleNavClick('/products'); }}>{t('产品', 'Products')}</Link>
          </li>
          <li>
            <Link to="/downloads" onClick={(e) => { e.preventDefault(); handleNavClick('/downloads'); }}>{t('资料下载', 'Downloads')}</Link>
          </li>
          <li>
            <Link to="/quote" onClick={(e) => { e.preventDefault(); handleNavClick('/quote'); }}>{t('询价', 'Quote')}</Link>
          </li>
          <li>
            <Link to="/#about" onClick={(e) => { e.preventDefault(); handleNavClick('/#about'); }}>{t('关于我们', 'About')}</Link>
          </li>
          <li>
            <Link to="/#contact" onClick={(e) => { e.preventDefault(); handleNavClick('/#contact'); }}>{t('联系我们', 'Contact')}</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;