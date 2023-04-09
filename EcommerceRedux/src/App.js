import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Products from './component/Products';
import {Routes , Route } from 'react-router-dom'
import Product from './component/Product';
import Cart from './component/Cart';
import '../src/styles/global.css'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path="/" element = {<Home />} />
      <Route exact path="/products" element = {<Products />} />
      <Route exact path= "/product/:id" element = {<Product />} />
      <Route exact path= "/products/product/:id" element = {<Product />} />
      <Route exact path= "/cart" element = {<Cart />} />
    </Routes>
    </>
  );
}

export default App;
