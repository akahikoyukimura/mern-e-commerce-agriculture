import React from "react";
import img1 from "../../images/shop.png";
import "bootstrap/dist/css/bootstrap.min.css";

function Cart() {
  return (
    <>
      <div class="container-fluid bg-success py-5 ">
        <div class="col-md-6 m-auto text-center text-white">
          <h1 class="h1">Shopping Cart</h1>
          <p>Check your products and total price. And proced to checkout</p>
        </div>
      </div>
      <div class="cart-body">
        <div class="cart-card">
          <div class="row">
            <div class="col-md-8 cart-cart">
              <div class="cart-title">
                <div class="row">
                  <div class="col">
                    <h4>
                      <b>Shopping Cart</b>
                    </h4>
                  </div>
                  <div class="col align-self-center text-right text-muted">
                    3 items
                  </div>
                </div>
              </div>
              <div class="row border-top border-bottom">
                <div class="row main align-items-center">
                  <div class="col-2">
                    <img class="img-fluid" src={img1} />
                  </div>
                  <div class="col">
                    <div class="row text-muted">Shirt</div>
                    <div class="row">Cotton T-shirt</div>
                  </div>
                  <div class="col">
                    <a href="#">-</a>
                    <a href="#" class="border">
                      1
                    </a>
                    <a href="#">+</a>
                  </div>
                  <div class="col items-cart">
                    &euro; 44.00 <span class="close">&#10005;</span>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="row main align-items-center">
                  <div class="col-2">
                    <img class="img-fluid" src={img1} />
                  </div>
                  <div class="col">
                    <div class="row text-muted">Shirt</div>
                    <div class="row">Cotton T-shirt</div>
                  </div>
                  <div class="col">
                    <a href="#">-</a>
                    <a href="#" class="border">
                      1
                    </a>
                    <a href="#">+</a>
                  </div>
                  <div class="col items-cart">
                    &euro; 44.00 <span class="close">&#10005;</span>
                  </div>
                </div>
              </div>
              <div class="row border-top border-bottom">
                <div class="row main align-items-center">
                  <div class="col-2">
                    <img class="img-fluid" src={img1} />
                  </div>
                  <div class="col">
                    <div class="row text-muted">Shirt</div>
                    <div class="row">Cotton T-shirt</div>
                  </div>
                  <div class="col">
                    <a href="#">-</a>
                    <a href="#" class="border">
                      1
                    </a>
                    <a href="#">+</a>
                  </div>
                  <div class="col items-cart">
                    &euro; 44.00 <span class="close">&#10005;</span>
                  </div>
                </div>
              </div>
              <div class="back-to-shop">
                <a href="#">&larr;</a>
                <span class="text-muted">Back to shop</span>
              </div>
            </div>
            <div class="col-md-4 summary">
              <div>
                <h5>
                  <b>Summary</b>
                </h5>
              </div>
              <hr />
              <div class="row">
                <div class="col" >
                  ITEMS 3
                </div>
              </div>
              <div
                class="row"
                style={{
                  borderTop: "1px solid rgba(0,0,0,.1); padding: 2vh 0",
                }}
              >
                <div class="col">TOTAL PRICE</div>
                <div class="col text-right">&euro; 137.00</div>
              </div>
              <button type="submit" name="submit" value="checkout" class="btn">
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
