import React from 'react';
import Products from '../components/Products'; // 我们可以复用之前创建的 Products 组件

const ProductsPage: React.FC = () => {
  return (
    <div style={{ padding: '100px 2rem', minHeight: '100vh' }}>
      <h1>产品中心</h1>
      <p>这里是所有产品的详细列表。</p>
      <Products />
    </div>
  );
};

export default ProductsPage;