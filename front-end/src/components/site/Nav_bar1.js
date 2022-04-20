import React from "react";
import { FaSearch, FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Nav_bar1() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="card-heading navbar-brand"></div>
        <Link
          to="/"
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
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/categories" smooth className="nav-link">
                  Categories
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/shop" className="nav-link">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar align-self-center d-flex">
            <a
              className="nav-icon d-none d-lg-inline"
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#templatemo_search"
            >
              <FaSearch />
            </a>
            <a
              className="nav-icon position-relative text-decoration-none"
              href="#"
            >
              <FaShoppingCart />
              <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
                7
              </span>
            </a>
            <a
              className="nav-icon position-relative text-decoration-none"
              href="#"
            >
              <FaUserAlt />
              <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
                +99
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav_bar1;
