import React from 'react';
import DownloadCategory from './DownloadCategory';
import { useLanguage } from '../../context/LanguageContext';

import styles from './Downloads.module.css';

// 中文数据
const downloadDataZh = [
  {
    categoryTitle: '📋 产品技术手册',
    items: [
      { title: '对位芳纶纤维技术手册', meta: 'PDF • 2.5MB • 2024年最新版', fileName: 'para-aramid-manual-zh.pdf' },
      { title: '间位芳纶纤维技术手册', meta: 'PDF • 1.8MB • 2024年最新版', fileName: 'meta-aramid-manual-zh.pdf' },
    ]
  },
  {
    categoryTitle: '🏆 质量认证证书',
    items: [
      { title: 'ISO 9001:2015 质量管理体系认证', meta: 'PDF • 1.2MB • 有效期至2027年', fileName: 'iso9001-certificate.pdf' },
    ]
  },
];

// 英文数据
const downloadDataEn = [
    {
        categoryTitle: '📋 Technical Manuals',
        items: [
            { title: 'Para-Aramid Fiber Technical Manual', meta: 'PDF • 2.5MB • 2024 Edition', fileName: 'para-aramid-manual-en.pdf' },
            { title: 'Meta-Aramid Fiber Technical Manual', meta: 'PDF • 1.8MB • 2024 Edition', fileName: 'meta-aramid-manual-en.pdf' },
        ]
    },
    {
        categoryTitle: '🏆 Quality Certificates',
        items: [
            { title: 'ISO 9001:2015 Certificate', meta: 'PDF • 1.2MB • Valid until 2027', fileName: 'iso9001-certificate.pdf' },
        ]
    },
];

const Downloads: React.FC = () => {
  const { language, t } = useLanguage();
  const downloadData = language === 'zh' ? downloadDataZh : downloadDataEn;

  return (
    <section id="downloads" className={styles["downloads"]}>
      <div className={styles["downloads-content"]}>
        <h2 className={styles["section-title"]}>{t('资料下载中心', 'Download Center')}</h2>
        <div className={styles["downloads-grid"]}>
          {downloadData.map(category => (
            <DownloadCategory
              key={category.categoryTitle}
              categoryTitle={category.categoryTitle}
              items={category.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Downloads;