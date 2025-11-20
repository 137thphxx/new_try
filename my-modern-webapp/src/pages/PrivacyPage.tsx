import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const PrivacyPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div style={{ padding: '120px 2rem', minHeight: '60vh', backgroundColor: '#000', color: '#fff' }}>
      <h1>
        {t('隐私政策', 'Privacy Policy')}
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
            '我们高度重视您的隐私安全。在本网站正式运营前，我们将完善详细的数据保护条例。',
            'We take your privacy seriously. Detailed data protection regulations will be updated here before the official operation of this website.'
          )}
        </p>
        <p>
          {t(
            '如果您有任何疑问，请通过“联系我们”页面与我们取得联系。',
            'If you have any questions, please contact us via the "Contact" page.'
          )}
        </p>
      </div>
    </div>
  );
};

export default PrivacyPage;