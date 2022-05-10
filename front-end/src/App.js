import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav_bar1 from './components/site/Nav_bar1';
import Home1 from './components/site/Home';
import Categories1 from './components/site/categories/Categories';
import Footer from './components/site/Footer';
import Shop from './components/site/Shop';
import Product from './components/site/Product';

import Home from "./dashboardpages/pages/home/Home";
import Login from "./dashboardpages/pages/login/Login";
import List from "./dashboardpages/pages/list/List";
import Single from "./dashboardpages/pages/single/Single";
import New from "./dashboardpages/pages/new/New";
import AddProduct from "./components/dashboard/products/addProduct/AddProduct";
import AddCategories from "./components/dashboard/categories/AddCategories";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import { userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Categories from "./dashboardpages/pages/categories/Categories";
import Products from "./dashboardpages/pages/products/Products";
import Orders from "./dashboardpages/pages/orders/Orderds";
import Contact from './components/site/Contact';
import About from './components/site/About';
import Cart from './components/site/Cart';
import LoginPage from './components/site/LoginPage';

function App() {
  return (
    <div>
      
      {/* <Nav_bar1/> */}
      
      {/* <Nav_bar/> */}
    {/* <AddBook/> */}
    <Routes>
        <Route path="/" element={<><Nav_bar1/><Home1 /><Footer/></>} />
        <Route path="/categories" element={<><Nav_bar1/><Categories1 /><Footer/></>} />
        <Route path="/shop"element={<><Nav_bar1/><Shop /><Footer/></>} />
        <Route path="/product" element={<><Nav_bar1/><Product /><Footer/></>} />
        <Route path="/contact" element={<><Nav_bar1/><Contact /><Footer/></>} />
        <Route path="/about" element={<><Nav_bar1/><About /><Footer/></>} />
        <Route path="/cart" element={<><Nav_bar1/><Cart /><Footer/></>} />
        <Route path='/loginPage' element={<LoginPage/>} />
        
</Routes>
        {/*dasboard*/}
        <Routes>
        <Route path="/dashboard">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>

        

            <Route path="products">
              <Route index element={<Products />} />
              <Route
                path="new"
                element={<AddProduct  />}
              />
            </Route>

            
            <Route path="categories">
              <Route index element={<Categories />} />
              <Route
                path="new"
                element={<AddCategories  />}
              />
            </Route>


            <Route path="orders">
              <Route index element={<Orders />} />
            </Route>

    



            

          </Route>
      </Routes>
      
      {/* <Footer/> */}
    </div>
  );
}

export default App;
