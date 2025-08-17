import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

import styles from './Contact.module.css';


const contactDataZh = [
  { icon: '📧', title: '邮箱', content: <a href="mailto:info@aramat.com">info@aramat.com</a> },
  { icon: '📱', title: '电话', content: <a href="tel:+86-21-1234-5678">+86 21-1234-5678</a> },
  { icon: '📍', title: '地址', content: <>上海市化工园区<br />新材料产业基地88号</> },
  { icon: '🌐', title: '官网', content: <a href="https://aramat.com" target="_blank" rel="noopener noreferrer">www.aramat.com</a> }
];

const contactDataEn = [
    { icon: '📧', title: 'Email', content: <a href="mailto:info@aramat.com">info@aramat.com</a> },
    { icon: '📱', title: 'Phone', content: <a href="tel:+86-21-1234-5678">+86 21-1234-5678</a> },
    { icon: '📍', title: 'Address', content: <>No.88, New Materials Base<br />Chemical Industry Park, Shanghai</> },
    { icon: '🌐', title: 'Website', content: <a href="https://aramat.com" target="_blank" rel="noopener noreferrer">www.aramat.com</a> }
];

const Contact: React.FC = () => {
  const { language, t } = useLanguage();
  const contactData = language === 'zh' ? contactDataZh : contactDataEn;

  return (
    <section id="contact" className={styles.contact}>
      {/* Corrected syntax and applied styles object */}
      <div className={styles['contact-content']}>
        {/* The "section-title" class was likely global. For a true module, you should add its styles to Contact.module.css */}
        <h2 className="section-title">{t('联系我们', 'Contact Us')}</h2>
        {/* Corrected to use styles object */}
        <div className={styles['contact-grid']}>
          {contactData.map(item => (
            // Corrected to use styles object
            <div className={styles['contact-item']} key={item.title}>
              {/* Corrected to use styles object */}
              <div className={styles['contact-icon']}>{item.icon}</div>
              {/* Corrected to use styles object */}
              <div className={styles['contact-info']}>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;