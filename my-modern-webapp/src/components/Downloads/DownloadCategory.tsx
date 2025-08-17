import React from 'react'; // 确保 React 也被导入
import DownloadItem from './DownloadItem';
import type { DownloadItemProps } from './DownloadItem'; // 使用 'import type'


import styles from './Downloads.module.css';
// 定义这个组件的 Props
interface DownloadCategoryProps {
  categoryTitle: string;
  items: DownloadItemProps[]; // items 是一个包含多个 DownloadItemProps 的数组
}

const DownloadCategory: React.FC<DownloadCategoryProps> = ({ categoryTitle, items }) => {
  return (
    <div className={styles["download-category"]}>
      <h3>{categoryTitle}</h3>
      {/* 使用 map 循环动态渲染 DownloadItem 组件 */}
      {items.map((item) => (
        <DownloadItem
          key={item.fileName} // 使用唯一值作为 key
          title={item.title}
          meta={item.meta}
          fileName={item.fileName}
        />
      ))}
    </div>
  );
};

export default DownloadCategory;