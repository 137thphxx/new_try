import React from 'react';
import DownloadItem from '../components/Downloads'; // 引入组件
import styles from './DownloadsPage.module.css'; // 引入页面样式

// 1. 定义文件数据列表
// 以后有新文件，直接在这里添加对象即可
const filesData = [
  {
    id: 1,
    title: "产品技术参数手册 v2.0",
    meta: "PDF • 2.4MB • 2025 更新",
    fileName: "test.pdf" // 对应后端真实文件名
  },
  {
    id: 2,
    title: "ISO 9001 质量体系认证",
    meta: "PDF • 1.1MB • 国际标准",
    fileName: "test.pdf" // 演示用，暂时都指向同一个文件
  },
  {
    id: 3,
    title: "芳纶材料安全数据表 (MSDS)",
    meta: "PDF • 800KB • 安全规范",
    fileName: "test.pdf"
  },
  {
    id: 4,
    title: "2024 年度公司可持续发展报告",
    meta: "PDF • 5.6MB • 英文版",
    fileName: "test.pdf"
  }
];

const DownloadsPage: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* 页面头部 */}
      <header className={styles.header}>
        <h1 className={styles.title}>资料下载中心</h1>
        <p className={styles.subtitle}>
          提供最新的产品手册、技术规格书及认证文件下载。
          点击下方卡片即可获取完整文档。
        </p>
      </header>

      {/* 卡片网格区域 */}
      <div className={styles.grid}>
        {filesData.map((file) => (
          <DownloadItem 
            key={file.id}
            title={file.title}
            meta={file.meta}
            fileName={file.fileName}
          />
        ))}
      </div>
    </div>
  );
};

export default DownloadsPage;