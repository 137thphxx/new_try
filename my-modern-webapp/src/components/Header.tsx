import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Header: React.FC = () => {
  const { t } = useLanguage();

  const navLinks = [
    { href: '#home', text: t('首页', 'Home') },
    { href: '#products', text: t('产品', 'Products') },
    { href: '#applications',text: t('应用', 'Applications') },
    { href: '#downloads', text: t('资料下载', 'Downloads') },
    { href: '#quote', text: t('询价', 'Quote') },
    { href: '#about', text: t('关于我们', 'About') },
    { href: '#contact', text: t('联系我们', 'Contact') },
  ];

  // 1. 创建一个点击事件处理函数
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // 2. 阻止 a 标签的默认跳转行为
    e.preventDefault();

    // 3. 找到页面上对应 ID 的元素
    const targetElement = document.querySelector(href);

    if (targetElement) {
      // 4. 使用 scrollIntoView 实现平滑滚动
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start', // 将元素的顶部与视口的顶部对齐
      });
    }
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">AraMat Solutions</div>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              {/* 5. 为 a 标签添加 onClick 事件 */}
              <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;