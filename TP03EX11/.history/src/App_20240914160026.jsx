import React from 'react';
import Menu from './components/Menu';
import ProductDetails from './components/ProductDetails';
import RelatedProducts from './components/RelatedProducts';
import UserComments from './components/UserComments';
import './index.css';

function App() {
  return (
    <div className="app">
      <Menu />
      <main className="container">
        <ProductDetails />
        <RelatedProducts />
        <UserComments />
      </main>
    </div>
  );
}

export default App;
