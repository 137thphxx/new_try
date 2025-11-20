import React from 'react';
import DownloadItem from '../components/Downloads';
import styles from './DownloadsPage.module.css';
import { useLanguage } from '../context/LanguageContext'; // 1. 引入语言包

// 2. 改造数据结构，同时包含中英文
const filesData = [
  {
    id: 1,
    fileName: "test.pdf",
    title_zh: "产品技术参数手册 v2.0",
    title_en: "Product Tech Manual v2.0",
    meta_zh: "PDF • 2.4MB • 2025 更新",
    meta_en: "PDF • 2.4MB • 2025 Updated",
  },
  {
    id: 2,
    fileName: "test.pdf",
    title_zh: "ISO 9001 质量体系认证",
    title_en: "ISO 9001 Quality Certificate",
    meta_zh: "PDF • 1.1MB • 国际标准",
    meta_en: "PDF • 1.1MB • International Std",
  },
  {
    id: 3,
    fileName: "test.pdf",
    title_zh: "芳纶材料安全数据表 (MSDS)",
    title_en: "Material Safety Data Sheet (MSDS)",
    meta_zh: "PDF • 800KB • 安全规范",
    meta_en: "PDF • 800KB • Safety Regs",
  },
  {
    id: 4,
    fileName: "test.pdf",
    title_zh: "2024 年度公司可持续发展报告",
    title_en: "2024 Sustainability Report",
    meta_zh: "PDF • 5.6MB • 英文版",
    meta_en: "PDF • 5.6MB • English Ver",
  }
];

const DownloadsPage: React.FC = () => {
  const { t, language } = useLanguage(); // 获取当前语言状态

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          {t('资料下载中心', 'Download Center')}
        </h1>
        <p className={styles.subtitle}>
          {t(
            '提供最新的产品手册、技术规格书及认证文件下载。点击下方卡片即可获取完整文档。',
            'Access our latest product manuals, technical specifications, and certificates. Click the cards below to download.'
          )}
        </p>
      </header>

      <div className={styles.grid}>
        {filesData.map((file) => (
          <DownloadItem 
            key={file.id}
            // 3. 根据当前语言动态选择显示中文还是英文属性
            title={language === 'zh' ? file.title_zh : file.title_en}
            meta={language === 'zh' ? file.meta_zh : file.meta_en}
            fileName={file.fileName}
          />
        ))}
      </div>
    </div>
  );
};

export default DownloadsPage;