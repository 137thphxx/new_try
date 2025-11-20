import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const TermsPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div style={{ padding: '120px 2rem', minHeight: '60vh', backgroundColor: '#000', color: '#fff' }}>
      <h1>
        {t('使用条款', 'Terms of Use')}
      </h1>

      <div style={{ marginTop: '2rem', color: '#ccc', lineHeight: '1.6' }}>
        <p>
          {t(
            '本页面正在建设中...', 
            'This page is currently under construction...'
          )}
        </p>
        <p>
          {t(
            '本网站提供的所有产品信息、图片及技术参数仅供参考。',
            'All product information, images, and technical specifications provided on this website are for reference only.'
          )}
        </p>
        <p>
          {t(
            '未经书面许可，禁止复制或转载本网站的任何内容。',
            'Reproduction or distribution of any content on this website without written permission is prohibited.'
          )}
        </p>
      </div>
    </div>
  );
};

export default TermsPage;