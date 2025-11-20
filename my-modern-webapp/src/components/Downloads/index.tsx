import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './DownloadItem.module.css'; // 假设您已经为它创建了CSS Module
import { API_BASE_URL } from '../../config';

export interface DownloadItemProps {
  title: string;
  meta: string;
  fileName: string;
}

const DownloadItem: React.FC<DownloadItemProps> = ({ title, meta, fileName }) => {
  const { t } = useLanguage();
  const [isDownloading, setIsDownloading] = useState(false);

  // 点击下载的处理函数
  const handleDownload = async () => {
    if (isDownloading) return; // 防止重复点击

    setIsDownloading(true);

    try {
      // 1. 构建指向后端 API 的完整 URL
      const response = await fetch(`${API_BASE_URL}/download/${fileName}`);

      // 2. 检查请求是否成功
      if (!response.ok) {
        // 如果后端返回404或其它错误，在这里处理
        const errorData = await response.json();
        console.error('下载失败:', errorData.message);
        alert(t('文件下载失败，可能文件不存在。', 'Download failed. The file may not exist.'));
        setIsDownloading(false);
        return;
      }

      // 3. 将响应体转换为 Blob (二进制大对象)
      const blob = await response.blob();
      
      // 4. 创建一个隐藏的 <a> 标签来触发浏览器下载
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName); // 设置下载的文件名
      document.body.appendChild(link);
      link.click();
      
      // 5. 清理
      link.parentNode?.removeChild(link);
      window.URL.revokeObjectURL(url);

    } catch (error) {
      console.error('下载过程中发生网络错误:', error);
      alert(t('下载失败，请检查网络连接或联系管理员。', 'Download failed. Please check your network or contact support.'));
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className={styles.card}>
      {/* 左侧图标区域 */}
      <div className={styles['icon-wrapper']}>
        {/* 这里放一个 SVG 图标代表 PDF */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      </div>

      {/* 右侧内容区域 */}
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.meta}>{meta}</div>
        
        <button className={styles['download-btn']} onClick={handleDownload} disabled={isDownloading}>
        {/* 这里使用 t 函数切换按钮文字 */}
        {isDownloading 
          ? t('下载中...', 'Downloading...') 
          : t('下载 PDF', 'Download PDF')
        }
        </button>
      </div>
    </div>
  );
};

export default DownloadItem;