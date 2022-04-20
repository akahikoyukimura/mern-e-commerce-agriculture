import './App.css';
import Nav_bar from './components/Nav_bar';
import AddBook from './components/books/AddBook';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav_bar1 from './components/site/Nav_bar1';
import Home from './components/site/Home';
import Categories from './components/site/categories/Categories';
import Footer from './components/site/Footer';

function App() {
  return (
    <div>
      <Nav_bar1/>
      
      {/* <Nav_bar/> */}
    {/* <AddBook/> */}
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
