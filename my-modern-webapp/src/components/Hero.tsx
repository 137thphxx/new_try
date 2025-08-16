import React from 'react';
import { useLanguage } from '../context/LanguageContext';

// 1. 从您的 assets 文件夹导入图片
import heroBackgroundImage from '../assets/hero-background.jpg';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  // 2. 创建一个样式对象
  const heroStyle = {
    backgroundImage: `url(${heroBackgroundImage})`
  };

  return (
    // 3. 将样式对象应用到 section 标签上
    <section id="home" className="hero" style={heroStyle}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>{t('高性能芳纶材料', 'High-Performance Aramid Materials')}</h1>
        <p className="subtitle">
          {t(
            '为极端环境提供卓越防护与性能解决方案',
            'Exceptional Protection & Performance Solutions for Extreme Environments'
          )}
        </p>
      </div>
    </section>
  );
};

export default Hero;