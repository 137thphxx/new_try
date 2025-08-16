import React from 'react';
import ProductCard from './ProductCard';
import type { ProductCardProps } from './ProductCard';
import { useLanguage } from '../context/LanguageContext'; // 1. 导入 Hook

// 中文数据
const productsDataZh: ProductCardProps[] = [
  {
    title: '对位芳纶纤维',
    description: '超高强度、耐高温的高性能纤维，广泛应用于防弹衣、防护服等安全防护领域。',
    specs: [
      { name: '拉伸强度', value: '≥23 cN/dtex' },
      { name: '模量', value: '≥900 cN/dtex' },
      { name: '耐温范围', value: '-196℃ ~ 204℃' },
      { name: '密度', value: '1.44 g/cm³' },
    ],
  },
  {
    title: '间位芳纶纤维',
    description: '优异的阻燃性能和化学稳定性，主要用于消防服、工业防护服等阻燃纺织品。',
    specs: [
      { name: 'LOI值', value: '≥28%' },
      { name: '分解温度', value: '≥370℃' },
      { name: '断裂伸长率', value: '25-40%' },
      { name: '密度', value: '1.38 g/cm³' },
    ],
  },
  {
    title: '芳纶蜂窝材料',
    description: '轻质高强的蜂窝结构材料，在航空航天、交通运输等领域具有优异的结构性能。',
    specs: [
      { name: '压缩强度', value: '≥2.0 MPa' },
      { name: '剪切强度', value: '≥1.2 MPa' },
      { name: '密度', value: '48-128 kg/m³' },
      { name: '厚度范围', value: '3-50 mm' },
    ],
  },
];

// 2. 创建英文数据
const productsDataEn: ProductCardProps[] = [
    {
        title: 'Para-Aramid Fiber',
        description: 'Ultra-high strength, heat-resistant fiber used in ballistic vests, protective apparel, and safety applications.',
        specs: [
            { name: 'Tensile Strength', value: '≥23 cN/dtex' },
            { name: 'Modulus', value: '≥900 cN/dtex' },
            { name: 'Temp Range', value: '-196℃ ~ 204℃' },
            { name: 'Density', value: '1.44 g/cm³' },
        ],
    },
    {
        title: 'Meta-Aramid Fiber',
        description: 'Excellent flame retardancy and chemical stability, mainly used for firefighting suits and industrial textiles.',
        specs: [
            { name: 'LOI Value', value: '≥28%' },
            { name: 'Decomp Temp', value: '≥370℃' },
            { name: 'Elongation', value: '25-40%' },
            { name: 'Density', value: '1.38 g/cm³' },
        ],
    },
    {
        title: 'Aramid Honeycomb',
        description: 'Lightweight, high-strength core material with excellent structural performance in aerospace and transportation.',
        specs: [
            { name: 'Compression', value: '≥2.0 MPa' },
            { name: 'Shear Strength', value: '≥1.2 MPa' },
            { name: 'Density', value: '48-128 kg/m³' },
            { name: 'Thickness', value: '3-50 mm' },
        ],
    },
];


const Products: React.FC = () => {
  const { language, t } = useLanguage(); // 3. 获取 language 和 t

  // 4. 根据当前语言选择对应的数据
  const productsData = language === 'zh' ? productsDataZh : productsDataEn;

  return (
    <section id="products" className="product-categories">
      <h2 className="section-title">{t('产品系列', 'Product Series')}</h2>
      <div className="categories-grid">
        {productsData.map((product) => (
          <ProductCard
            key={product.title}
            title={product.title}
            description={product.description}
            specs={product.specs}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;