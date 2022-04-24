import './App.css';
import Nav_bar from './components/Nav_bar';
import AddBook from './components/books/AddBook';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav_bar1 from './components/site/Nav_bar1';
import Home from './components/site/Home';
import Categories from './components/site/categories/Categories';
import Footer from './components/site/Footer';
import Shop from './components/site/Shop';
import ScrollToTop from './components/site/Handle/ScrollToTop';
import Product from './components/site/Product';
// https://www.tutorialrepublic.com/codelab.php?topic=bootstrap&file=multiple-item-product-carousel
//https://wpexpand.com/demo/html/eElectronics/cart.html
function App() {
  return (
    <div>
      <Nav_bar1/>
      
      {/* <Nav_bar/> */}
    {/* <AddBook/> */}
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/shop"element={<Shop />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
