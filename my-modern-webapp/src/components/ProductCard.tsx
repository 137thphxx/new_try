import React from 'react';

// 定义每一个规格项的类型
interface Spec {
  name: string;
  value: string;
}

// 定义产品卡片组件的 Props 类型
export interface ProductCardProps {
  title: string;
  description: string;
  specs: Spec[]; // specs 是一个包含多个 Spec 对象的数组
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, specs }) => {
  return (
    <div className="category-card">
      <h3 className="category-title">{title}</h3>
      <p className="category-desc">{description}</p>
      <ul className="category-specs">
        {/* 使用 map 循环动态渲染规格列表 */}
        {specs.map((spec) => (
          <li key={spec.name}>
            <span className="spec-name">{spec.name}</span>
            <span className="spec-value">{spec.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCard;