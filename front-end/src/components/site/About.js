import React from "react";
import img1 from "../../images/shop.png";
import { FaTruck, FaUserAlt, FaPercent, FaExchangeAlt } from "react-icons/fa";

function About() {
  return (
    <>
      <section className="bg-success py-5">
        <div className="container">
          <div className="row align-items-center py-5">
            <div className="col-md-8 text-white">
              <h1>About Us</h1>
              <p>
                Agrikit is a powerful and easy-to-use agricultural e-commerce
                platform exclusively for farmers.It provides all kinds of
                machinery, seeds and fertilizers. Save your time and money. With
                just one click, your product will be delivered to you as fast as
                possible
              </p>
            </div>
            <div className="col-md-4">
              <img
                style={{ width: "-webkit-fill-available" }}
                src={img1}
                alt="About Hero"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="container py-5">
        <div className="row text-center pt-5 pb-3">
          <div className="col-lg-6 m-auto">
            <h1 className="h1">Our Services</h1>
            <p>
              we provide you with a 24 hour service and delivery of the product
              with guarantee. Don't miss our promotions
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-3 pb-5">
            <div className="h-100 py-5 services-icon-wap shadow">
              <div className="h1 text-success text-center">
                <i>
                  <FaTruck />
                </i>
              </div>
              <h2 className="h5 mt-4 text-center">Delivery Services</h2>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 pb-5">
            <div className="h-100 py-5 services-icon-wap shadow">
              <div className="h1 text-success text-center">
                <i>
                  <FaExchangeAlt />
                </i>
              </div>
              <h2 className="h5 mt-4 text-center">Shipping & Return</h2>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 pb-5">
            <div className="h-100 py-5 services-icon-wap shadow">
              <div className="h1 text-success text-center">
                <i>
                  <FaPercent />
                </i>
              </div>
              <h2 className="h5 mt-4 text-center">Promotion</h2>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 pb-5">
            <div className="h-100 py-5 services-icon-wap shadow">
              <div className="h1 text-success text-center">
                <i>
                  <FaUserAlt />
                </i>
              </div>
              <h2 className="h5 mt-4 text-center">24 Hours Service</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
