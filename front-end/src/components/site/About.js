import React from "react";
import img1 from "../../images/shop.png";
import { FaTruck, FaUserAlt, FaPercent, FaExchangeAlt } from "react-icons/fa";

function About() {
  return (
    <>
      <section class="bg-success py-5">
        <div class="container">
          <div class="row align-items-center py-5">
            <div class="col-md-8 text-white">
              <h1>About Us</h1>
              <p>
                Agrikit is a powerful and easy-to-use agricultural e-commerce
                platform exclusively for farmers.It provides all kinds of
                machinery, seeds and fertilizers. Save your time and money. With
                just one click, your product will be delivered to you as fast as
                possible
              </p>
            </div>
            <div class="col-md-4">
              <img
                style={{ width: "-webkit-fill-available" }}
                src={img1}
                alt="About Hero"
              />
            </div>
          </div>
        </div>
      </section>
      <section class="container py-5">
        <div class="row text-center pt-5 pb-3">
          <div class="col-lg-6 m-auto">
            <h1 class="h1">Our Services</h1>
            <p>
              we provide you with a 24 hour service and delivery of the product
              with guarantee. Don't miss our promotions
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-3 pb-5">
            <div class="h-100 py-5 services-icon-wap shadow">
              <div class="h1 text-success text-center">
                <i>
                  <FaTruck />
                </i>
              </div>
              <h2 class="h5 mt-4 text-center">Delivery Services</h2>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 pb-5">
            <div class="h-100 py-5 services-icon-wap shadow">
              <div class="h1 text-success text-center">
                <i>
                  <FaExchangeAlt />
                </i>
              </div>
              <h2 class="h5 mt-4 text-center">Shipping & Return</h2>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 pb-5">
            <div class="h-100 py-5 services-icon-wap shadow">
              <div class="h1 text-success text-center">
                <i>
                  <FaPercent />
                </i>
              </div>
              <h2 class="h5 mt-4 text-center">Promotion</h2>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 pb-5">
            <div class="h-100 py-5 services-icon-wap shadow">
              <div class="h1 text-success text-center">
                <i>
                  <FaUserAlt />
                </i>
              </div>
              <h2 class="h5 mt-4 text-center">24 Hours Service</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
