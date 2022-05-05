import React from "react";
import img1 from "./../../images/agi-machine.png";
import img2 from "./../../images/Ecofert-product-350-1.png";
import img3 from "./../../images/grains.png";
//import './js/templatemo.js';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import ScriptTag from "react-script-tag";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Categories from "./categories/Categories";

function Home() {
  return (
    <>
      <div
        id="template-mo-zay-hero-carousel"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-bs-target="#template-mo-zay-hero-carousel"
            data-bs-slide-to="0"
            class="active"
          ></li>
          <li
            data-bs-target="#template-mo-zay-hero-carousel"
            data-bs-slide-to="1"
          ></li>
          <li
            data-bs-target="#template-mo-zay-hero-carousel"
            data-bs-slide-to="2"
          ></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container">
              <div class="row p-5">
                <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                  <img class="img-fluid" src={img1} alt="" />
                </div>
                <div class="col-lg-6 mb-0 d-flex align-items-center">
                  <div class="text-align-left align-self-center">
                    <h1 class="h1 text-success">
                      <b>AgriKit</b> eCommerce
                    </h1>
                    <h3 class="h2">Tiny and Perfect eCommerce Platform</h3>
                    <p>
                      Agrikit is a powerful and easy-to-use agricultural
                      e-commerce platform exclusively for farmers.It provides
                      all kinds of{" "}
                      <a rel="sponsored" class="text-success" href="#">
                        machinery
                      </a>
                      ,{" "}
                      <a rel="sponsored" class="text-success" href="#">
                        {" "}
                        seeds{" "}
                      </a>
                      and{" "}
                      <a rel="sponsored" class="text-success" href="#">
                        fertilizers.
                      </a>{" "}
                      Save your time and money. With just one click, your
                      product will be{" "}
                      <a rel="sponsored" class="text-success" href="#">
                        delivered to you as fast as possible
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container">
              <div class="row p-5">
                <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                  <img class="img-fluid" src={img2} alt="" />
                </div>
                <div class="col-lg-6 mb-0 d-flex align-items-center">
                  <div class="text-align-left">
                    <h1 class="h1">Fertilizers</h1>
                    <h3 class="h2">We provide all sort of fertilizers</h3>
                    <p>
                      Agrikit is a powerful and easy-to-use agricultural
                      e-commerce platform exclusively for farmers.It provides
                      all kinds of machinery, seeds and <strong>fertilizers. </strong>Save your
                      time and money. With just one click, your product will be
                      delivered to you as fast as possible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container">
              <div class="row p-5">
                <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                  <img class="img-fluid" src={img3} alt="" />
                </div>
                <div class="col-lg-6 mb-0 d-flex align-items-center">
                  <div class="text-align-left">
                    <h1 class="h1">Seeds</h1>
                    <h3 class="h2">We provide all sort of seeds</h3>
                    <p>
                    Agrikit is a powerful and easy-to-use agricultural
                      e-commerce platform exclusively for farmers.It provides
                      all kinds of machinery,<strong> seeds</strong> and fertilizers. Save your
                      time and money. With just one click, your product will be
                      delivered to you as fast as possible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev text-decoration-none w-auto ps-3"
          href="#template-mo-zay-hero-carousel"
          role="button"
          data-bs-slide="prev"
        >
          {/* <i class="fas fa-chevron-left"></i> */}
          <i>
            <FaChevronLeft />
          </i>
        </a>
        <a
          class="carousel-control-next text-decoration-none w-auto pe-3"
          href="#template-mo-zay-hero-carousel"
          role="button"
          data-bs-slide="next"
        >
          {/* <i class="fas fa-chevron-right"></i> */}
          <i>
            <FaChevronRight />
          </i>
        </a>
      </div>
      <Categories />
    </>
  );
}

export default Home;
