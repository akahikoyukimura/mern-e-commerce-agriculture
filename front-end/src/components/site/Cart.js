import React, { useEffect } from "react";
import img1 from "../../images/shop.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../store/actions/CartActions";
import { FaOpencart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import {RiEmotionHappyFill} from "react-icons/ri";

function Cart() {
  const getData = useSelector((state) => state.cart);
  console.log(getData);

  // const dispatch=useDispatch();
  // useEffect(() => {
  //     dispatch(getCart());
  //     console.log(dispatch(getCart()));
  //   });
  if (getData.carts.length != 0) {
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
                    {getData.totalQt} items
                    </div>
                  </div>
                </div>
                {getData.carts.map((produc)=>{
return(
<div key={produc.id} class="row border-top border-bottom">
                  <div class="row main align-items-center">
                    <div class="col-2" style={{ display: "flex" }}>
                      <img class="img-fluid" src={produc.image} />
                      <div class="qt-cart-item">{produc.quantity}</div>
                    </div>
                    <div class="col">
                      <div class="row text-muted">Categorie: {produc.name}</div>
                      <div class="row">{produc.name}</div>
                    </div>
                    <div class="col">
                      <a href="#">-</a>
                      <a href="#" class="border">
                      {produc.quantity}
                      </a>
                      <a href="#">+</a>
                    </div>
                    <div class="col items-cart">
                      &euro; {produc.price} <span class="close">&#10005;</span>
                    </div>
                  </div>
                </div>)
})}

                <div class="back-to-shop">
                  <Link to="/shop">&larr;</Link>
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
                  <div class="col">ITEMS {getData.totalQt}</div>
                </div>
                <div
                  class="row"
                  style={{
                    borderTop: "1px solid rgba(0,0,0,.1); padding: 2vh 0",
                  }}
                >
                  <div class="col">TOTAL PRICE</div>
                  <div class="col text-right">&euro; {getData.totalPrice}</div>
                </div>
                <button
                  type="submit"
                  name="submit"
                  value="checkout"
                  class="btn"
                >
                  CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div class="container-fluid bg-success py-5 ">
          <div class="col-md-6 m-auto text-center text-white">
            <h1 class="h1">Shopping Cart</h1>
            <p>Check your products and total price. And proced to checkout</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="card-empty">
              <div class="card-body">
                <div class="col-sm-12 empty-cart-cls text-center">
                  <FaOpencart
                    size={100}
                    class="img-fluid mb-4 mr-3"
                    color="59ab6e"
                  />
                  {/* <img src="https://i.imgur.com/dCdflKN.png" width="130" height="130" class="img-fluid mb-4 mr-3"/> */}
                  <h3>
                    <strong>Your Cart is Empty</strong>
                  </h3>
                  <h4>Plz go shop and add something <RiEmotionHappyFill color="59ab6e"/></h4>
                  <Link to="/shop">
                    <button class=" btn-success btn-lg add-to-cart-sigle-product">
                      <FaCartPlus size={20} />{" "}
                      <span class="text-add-to-cart">Go To Shop</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Cart;
