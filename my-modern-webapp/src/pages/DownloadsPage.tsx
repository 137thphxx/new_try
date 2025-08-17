import React from 'react';
import Downloads from '../components/Downloads'; // 复用 Downloads 组件

const DownloadsPage: React.FC = () => {
  return (
    <div style={{ padding: '100px 2rem', minHeight: '100vh' }}>
      <h1>资料下载中心</h1>
      <p>在这里查找所有相关的技术手册、认证和报告。</p>
      <Downloads />
    </div>
  );
};

export default DownloadsPage;