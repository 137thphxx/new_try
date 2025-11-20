import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import DownloadsPage from './pages/DownloadsPage';
import QuotePage from './pages/QuotePage';
import PrivacyPage from './pages/PrivacyPage'; // 新增
import TermsPage from './pages/TermsPage';     // 新增

function App() {
  return (
    <Routes>
      {/* 所有页面都使用 Layout 组件（带 Header 和 Footer） */}
      <Route path="/" element={<Layout />}>
        {/* 默认首页 */}
        <Route index element={<HomePage />} />
        {/* 产品页面 */}
        <Route path="products" element={<ProductsPage />} />
        {/* 资料下载页面 */}
        <Route path="downloads" element={<DownloadsPage />} />
        {/* 在这里可以添加更多页面，比如 path="about" 等 */}
        <Route path="quote" element={<QuotePage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Route>
    </Routes>
  );
}

export default App;