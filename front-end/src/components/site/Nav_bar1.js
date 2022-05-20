import React from "react";
import { FaSearch, FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


function Nav_bar1() {
  const getData = useSelector((state) => state.cart);
  console.log(getData);
  return (
    <nav 
    style={{ height:'auto',
      borderBottom: '0' }}
    className="navbar navbar-expand-lg navbar-light shadow">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="card-heading navbar-brand"></div>
        <Link
        
          to="/" smooth={true}
          className="navbar-brand text-success logo h1 align-self-center"
        >
          AgriKit
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#templatemo_main_nav"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
          id="templatemo_main_nav"
        >
          
          <div className="flex-fill">
            <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
              <li className="nav-item">
                <Link to="/" smooth={true} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/categories" smooth={true} className="nav-link">
                  Categories
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/shop" smooth={true} className="nav-link">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" smooth={true} className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" smooth={true} className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar align-self-center d-flex" style={{  height: '60px' }}>
            <a
              className="nav-icon d-none d-lg-inline"
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#"
            >
              <FaSearch />
            </a>

            <Link
              className="nav-icon position-relative text-decoration-none"
              to="/cart" smooth={true}
            >
              <FaShoppingCart />
              <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
                {
                  getData.totalQt
                }
              </span>
            </Link>

            <Link to="/loginPage" smooth={true} className="text-center categorie-shop">
     Login
   </Link>

           
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav_bar1;
