import React, { useState } from 'react';
import Menu from './components/Menu';
import ProductDetails from './components/ProductDetails';
import RelatedProducts from './components/RelatedProducts';
import UserComments from './components/UserComments';
import './index.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`app ${theme}`}>
      <Menu />
      <button onClick={toggleTheme} className="theme-toggle">
        Mudar para {theme === 'light' ? 'Escuro' : 'Claro'}
      </button>
      <main className="container">
        <ProductDetails />
        <RelatedProducts />
        <UserComments />
      </main>
    </div>
  );
}

export default App;
