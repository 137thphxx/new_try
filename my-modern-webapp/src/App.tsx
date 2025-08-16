import LanguageToggle from './components/LanguageToggle';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Applications from './components/Applications';
import Downloads from './components/Downloads';
import QuoteForm from './components/QuoteForm';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <LanguageToggle />
      <Header />
      <main>
        <Hero />
        <Products />
        <Applications />
        <Downloads />
        <QuoteForm />
        <About />
        <Contact />
      </main>
      {/* 如果有 Footer 组件，可以放在这里 */}
    </>
  );
}

export default App;