import React, { useEffect, useState } from "react";
import img1 from "../../images/tractor.jpg";
//import '../site/js/templatemo.js';
import { Link } from "react-router-dom";
import {
  FaChevronCircleDown,
  FaStar,
  FaRegStar,
  FaRegHeart,
  FaRegEye,
  FaCartPlus,
} from "react-icons/fa";
import $ from "jquery";

function Shop() {
  useEffect(() => {
    var all_panels = $(".templatemo-accordion > li > ul");
    $(".templatemo-accordion > li > a").click(function () {
      console.log("Hello world!");
      var target = $(this).next();
      if (!target.hasClass("active")) {
        all_panels.removeClass("active").slideUp();
        target.addClass("active").slideDown();
      }
      return false;
    });
  }, []);

  const [product, setProduct] = useState([
    {
      id: 1,
      img: img1,
      name: "Tractor",
      price: 250.50,
    },
    {
      id: 2,
      img: img1,
      name: "Tractor1",
      price: 250.00,
    },
    { id: 3, img: img1, name: "Tractor2", price: 250.00 },
  ]);

  return (
    <>
      <div class="container-fluid bg-success py-5">
        <div class="col-md-6 m-auto text-center text-white">
          <h1 class="h1">Shop</h1>
          <p>
            Our shop provides you everything you are looking for with a
            reasonable price and quality product. Take your time to consult
            them.
          </p>
        </div>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-3">
            <h1 className="h2 pb-4">Filter</h1>
            <ul className="list-unstyled templatemo-accordion">
              <li className="pb-3">
                <a
                  className="collapsed d-flex justify-content-between h3 text-decoration-none"
                  href="#"
                >
                  Sous-Categories
                  <i>
                    <FaChevronCircleDown />
                  </i>
                </a>
                <ul className="collapse show list-unstyled pl-3">
                  <li>
                    <a className="text-decoration-none" href="#">
                      Tractor
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      Motoculteur
                    </a>
                  </li>
                </ul>
              </li>
              <li className="pb-3">
                <a
                  className="collapsed d-flex justify-content-between h3 text-decoration-none"
                  href="#"
                >
                  Price
                  <i>
                    <FaChevronCircleDown />
                  </i>
                </a>
                <ul id="collapseTwo" className="collapse list-unstyled pl-3">
                  <li>
                    <a className="text-decoration-none" href="#">
                      $max
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      $min
                    </a>
                  </li>
                </ul>
              </li>
              <li className="pb-3">
                <a
                  className="collapsed d-flex justify-content-between h3 text-decoration-none"
                  href="#"
                >
                  Rating
                  <i>
                    <FaChevronCircleDown />
                  </i>
                </a>
                <ul id="collapseThree" className="collapse list-unstyled pl-3">
                  <li>
                    <a className="text-decoration-none" href="#">
                      5 stars
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      4 stars
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      3 stars
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="col-lg-9">
            <div className="row">
              <div className="col-md-6">
                <ul className="list-inline shop-top-menu pb-3 pt-1">
                  <li className="list-inline-item">
                    <a
                      className="h3 text-dark text-decoration-none mr-3"
                      href="#"
                    >
                      All
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="h3 text-dark text-decoration-none mr-3"
                      href="#"
                    >
                      Machines
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="h3 text-dark text-decoration-none" href="#">
                      Seeds
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="h3 text-dark text-decoration-none" href="#">
                      Fertilizers
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 pb-4">
                <div className="d-flex">
                  <select className="form-control">
                    <option>Featured</option>
                    <option>A to Z</option>
                    <option>Item</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              {product.map((produc) => {
                return (
                  <div key={produc.id} className="col-md-4">
                    <div
                      className="card mb-4 product-wap "
                      style={{ borderRadius: "25px", border: "none" }}
                    >
                      <div className="card " style={{ border: "none" }}>
                        <img
                          className="card-img  img-fluid "
                          style={{
                            borderRadius: "25px 25px 60% 0%",
                            transition: ".3s",
                          }}
                          src={produc.img}
                        />
                        <div className="card-img-overlay  product-overlay d-flex align-items-center justify-content-center">
                          <ul className="list-unstyled">
                            <li>
                              <a
                                className="btn btn-success text-white"
                                href="shop-single.html"
                              >
                                <i>
                                  <FaRegHeart />
                                </i>
                              </a>
                            </li>
                            <li>
                              <Link
                                className="btn btn-success text-white mt-2"
                                to="/product" state={{ produc }}
                              >
                                <i>
                                  <FaRegEye />
                                </i>
                              </Link>
                            </li>
                            <li>
                              <a
                                className="btn btn-success text-white mt-2"
                                href="shop-single.html"
                              >
                                <i>
                                  <FaCartPlus />
                                </i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body">
                        <a
                          href="shop-single.html"
                          className="h3 text-decoration-none"
                        >
                          {produc.name}
                        </a>

                        <ul className="list-unstyled d-flex justify-content-center mb-1">
                          <li>
                            <i>
                              <FaStar className="text-success " />
                            </i>
                            <i>
                              <FaStar className="text-success" />
                            </i>
                            <i>
                              <FaStar className="text-success" />
                            </i>
                            <i>
                              <FaRegStar />
                            </i>
                            <i>
                              <FaRegStar />
                            </i>
                          </li>
                        </ul>
                        <p className="text-center mb-0">${produc.price}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div div="row">
              <ul class="pagination justify-content-center">
                <li class="page-item active" aria-current="page">
                  <span class="page-link">1</span>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
