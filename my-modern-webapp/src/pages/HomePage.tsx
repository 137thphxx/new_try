import React from 'react';
import Hero from '../components/Hero';
// "产品" 和 "资料下载" 已经成为独立页面，所以从主页移除
// import Products from '../components/Products';
// import Downloads from '../components/Downloads';
import Applications from '../components/Applications';
import About from '../components/About';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Applications />
      <About />
      <Contact />
    </>
  );
};

export default HomePage;