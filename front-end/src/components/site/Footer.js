import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
//import 'bootstrap/dist/css/bootstrap.min.css'

function Footer() {
  return (
    <footer class="bg-dark" id="tempaltemo_footer">
      <div class="container">
        <div class="row">
          <div class="col-md-4 pt-5">
            <h2 class="h2 text-success border-bottom pb-3 border-light logo">
              AgriKit Shop
            </h2>
            <ul class="list-unstyled text-light footer-link-list">
              <li>
                <i>
                  <FaMapMarkerAlt />{" "}
                </i>
                Av. Allal Al Fassi, Rabat
              </li>
              <li>
                <i>
                  <FaPhone />{" "}
                </i>
                <a class="text-decoration-none" href="tel:06-32-13-14-65">
                  06 32 13 14 65
                </a>
              </li>
              <li>
                <i>
                  <FaEnvelope />{" "}
                </i>
                <a
                  class="text-decoration-none"
                  href="mailto:elmourtazakkawtar39@gmail.com"
                >
                  elmourtazakkawtar39@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div class="col-md-4 pt-5">
            <h2 class="h2 text-light border-bottom pb-3 border-light">
              Products
            </h2>
            <ul class="list-unstyled text-light footer-link-list">
              <li>
                <a class="text-decoration-none" href="#">
                  Machines
                </a>
              </li>
              <li>
                <a class="text-decoration-none" href="#">
                  Seeds
                </a>
              </li>
              <li>
                <a class="text-decoration-none" href="#">
                  Fertilizers
                </a>
              </li>
            </ul>
          </div>

          <div class="col-md-4 pt-5">
            <h2 class="h2 text-light border-bottom pb-3 border-light">
              Further Info
            </h2>
            <ul class="list-unstyled text-light footer-link-list">
              <li>
                <a class="text-decoration-none" href="#">
                  Home
                </a>
              </li>
              <li>
                <a class="text-decoration-none" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a class="text-decoration-none" href="#">
                  Shop
                </a>
              </li>
              <li>
                <a class="text-decoration-none" href="#">
                  FAQs
                </a>
              </li>
              <li>
                <a class="text-decoration-none" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="row text-light mb-4">
          <div class="col-12 mb-3">
            <div class="w-100 my-3 border-top border-light"></div>
          </div>
          <div class="col-auto me-auto">
            <ul class="list-inline text-left footer-icons">
              <li class="list-inline-item border border-light rounded-circle text-center">
                <a
                  class="text-light text-decoration-none"
                  target="_blank"
                  href="http://facebook.com/"
                >
                  <i>
                    <FaFacebookF />
                  </i>
                </a>
              </li>
              <li class="list-inline-item border border-light rounded-circle text-center">
                <a
                  class="text-light text-decoration-none"
                  target="_blank"
                  href="https://www.instagram.com/"
                >
                  <i>
                    <FaInstagram />
                  </i>
                </a>
              </li>
              <li class="list-inline-item border border-light rounded-circle text-center">
                <a
                  class="text-light text-decoration-none"
                  target="_blank"
                  href="https://twitter.com/"
                >
                  <i>
                    <FaTwitter />
                  </i>
                </a>
              </li>
              <li class="list-inline-item border border-light rounded-circle text-center">
                <a
                  class="text-light text-decoration-none"
                  target="_blank"
                  href="https://www.linkedin.com/"
                >
                  <i>
                    <FaLinkedin />
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="w-100 bg-black py-3">
        <div class="container">
          <div class="row pt-2">
            <div class="col-12">
              <p class="text-left text-light">
                Copyright &copy; 2022 AgriKit Company | Designed by{" "}
                <a rel="sponsored" href="https://AgriKit.com" target="_blank">
                  AgriKit
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
