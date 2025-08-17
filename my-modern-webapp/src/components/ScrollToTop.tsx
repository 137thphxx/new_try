import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // 从 react-router-dom 获取 location 对象，其中包含了当前的路径信息 (pathname)
  const { pathname } = useLocation();

  // 使用 useEffect Hook，它会在依赖项数组中的值发生变化时执行
  useEffect(() => {
    // 当 pathname 发生变化时（即页面跳转时），执行此操作
    window.scrollTo(0, 0);
  }, [pathname]); // 将 pathname 作为依赖项

  // 这个组件本身不渲染任何可见的 UI，所以返回 null
  return null;
};

export default ScrollToTop;