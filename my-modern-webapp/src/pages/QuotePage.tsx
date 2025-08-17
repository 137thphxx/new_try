import React from 'react';
import QuoteForm from '../components/QuoteForm'; // 导入询价表单组件

const QuotePage: React.FC = () => {
  return (
    // 添加一些内边距，避免内容紧贴着 Header
    <div style={{ padding: '80px 0', minHeight: '100vh' }}>
      <QuoteForm />
    </div>
  );
};

export default QuotePage;