import React from 'react';

import styles from './Products.module.css';
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
    <div className={styles["category-card"]}>
      <h3 className={styles["category-title"]}>{title}</h3>
      <p className={styles["category-desc"]}>{description}</p>
      <ul className={styles["category-specs"]}>
        {/* 使用 map 循环动态渲染规格列表 */}
        {specs.map((spec) => (
          <li key={spec.name}>
            <span className={styles["spec-name"]}>{spec.name}</span>
            <span className={styles["spec-value"]}>{spec.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCard;