import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2 className="section-title">{t('关于我们', 'About Us')}</h2>
        <p className="about-text">
          {t(
            '我们是芳纶材料领域的专业制造商，致力于研发和生产高性能芳纶纤维及相关制品。凭借先进的生产工艺和严格的质量控制体系，为全球客户提供可靠的防护解决方案。',
            'We are a professional manufacturer in the aramid materials field, dedicated to developing and producing high-performance aramid fibers and related products. With advanced processes and strict quality control, we provide reliable protective solutions to global customers.'
          )}
        </p>
        <p className="about-text">
          {t(
            '公司拥有完整的产业链布局，从原料合成到终端产品加工，确保产品质量的一致性和稳定性。我们的产品广泛应用于军工、航空航天、消防、工业等多个重要领域。',
            'Our company has a complete industrial chain, from raw material synthesis to final product processing, ensuring consistent quality. Our products are widely used in military, aerospace, fire safety, and industrial sectors.'
          )}
        </p>
      </div>
    </section>
  );
};

export default About;