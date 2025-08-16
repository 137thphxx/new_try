import React from 'react';
import { useLanguage } from '../context/LanguageContext'; // 导入 Hook

export interface DownloadItemProps {
  title: string;
  meta: string;
  fileName: string;
}

const DownloadItem: React.FC<DownloadItemProps> = ({ title, meta, fileName }) => {
  const { t } = useLanguage(); // 获取 t 函数

  const handleDownload = () => {
    console.log(`准备下载: ${fileName}`);
  };

  return (
    <div className="download-item" data-file={fileName} onClick={handleDownload}>
      <div className="download-info">
        <div className="download-title">{title}</div>
        <div className="download-meta">{meta}</div>
      </div>
      <button className="download-btn">
        <span>📥</span> {t('下载', 'Download')} {/* 修改按钮文本 */}
      </button>
    </div>
  );
};

export default DownloadItem;