import React from 'react';
import { useLanguage } from '../context/LanguageContext'; // 1. 导入 Hook

const Hero: React.FC = () => {
  const { t } = useLanguage(); // 2. 获取 t 函数
  const imageUrl = "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&h=400&fit=crop&crop=center";

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        {/* 3. 使用 t 函数进行翻译 */}
        <h1>{t('高性能芳纶材料', 'High-Performance Aramid Materials')}</h1>
        <p className="subtitle">
          {t(
            '为极端环境提供卓越防护与性能解决方案',
            'Exceptional Protection & Performance Solutions for Extreme Environments'
          )}
        </p>
        <img src={imageUrl} alt="Aramid Fiber" className="product-image" />
      </div>
    </section>
  );
};

export default Hero;