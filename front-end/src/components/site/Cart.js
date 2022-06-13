import React, { useEffect, useState } from "react";
import img1 from "../../images/tractor.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../store/actions/CartActions";
import { FaOpencart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import {RiEmotionHappyFill} from "react-icons/ri";
import axios from 'axios';
import { removeFromCart } from "../../store/actions/CartActions";
import StripeCheckout from 'react-stripe-checkout';
import API from '../Api';

function Cart() {

  const [customer, setCustomer] = useState({
    customerName:"",
    customerAddress:""
  });

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  console.log(modal);

  //publish key for stripe payment---------------------------------------
  const publishableKey='pk_test_51L2zdzEGQz03sJGQWbhrBiJebiNygTaOimGDQga1rXXUi9fwlYU79hfrdkZtEJOSho3VfLSoUcw6kcXqgChSvGh500aqglHnTm';
  //get cart data from reducer------------------------------------------
  const getData = useSelector((state) => state.cart);
  console.log(getData);

  //get user data from local storage-------------------------------------
  const user=JSON.parse(localStorage.getItem('userInfo')).data;
  console.log(user);
  //console.log(JSON.parse(localStorage.getItem('cart')));

  //remove from cart button----------------------------------------------
  const dispatch=useDispatch();
  const handleSubmit = value => (e) => {
    e.preventDefault();
    console.log(value);
    dispatch(removeFromCart(value));
  };

  //customer data state-------------------------------------------------
  const CustomerData = {
    customerCart: getData,
    customerDetails: customer
};

//save customer data in local storage---------------------------------
useEffect( () => {
  localStorage.setItem('CustomerData', JSON.stringify(CustomerData));
}, [CustomerData]);

//checkout button---------------------------------------------------
  const checkout = async (e) => {
    e.preventDefault();
    //setModal(!modal);
    console.log(CustomerData);
    await API.post('api/cart/', CustomerData)
          .then( response=> {
                console.log(response);
          })
          .catch(error=> {
            console.log(error);
          });
  };

  //pay button -------------------------------------------------
  const priceForStripe = getData.totalPrice * 100;
  const payNow = async token => {
    try {
      const response = await API({
        url: 'payment',
        method: 'post',
        data: {
          amount: getData.totalPrice * 100,
          token,
        },
      });
      if (response.status === 200) {
        console.log("payment success");
        window.location = "/facturation";
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (getData.carts.length != 0) {
    return (
      <>
        <div className="container-fluid bg-success py-5 ">
          <div className="col-md-6 m-auto text-center text-white">
            <h1 className="h1">Shopping Cart</h1>
            <p>Check your products and total price. And proced to checkout</p>
          </div>
        </div>
        <div className="cart-body">
          <div className="cart-card">
            <div className="row">
              <div className="col-md-8 cart-cart">
                <div className="cart-title">
                  <div className="row">
                    <div className="col">
                      <h4>
                        <b>Shopping Cart</b>
                      </h4>
                    </div>
                    <div className="col align-self-center text-right text-muted">
                    {getData.totalQt} items
                    </div>
                  </div>
                </div>
                {getData.carts.map((produc)=>{
return(
<div key={produc.id} className="row border-top border-bottom">
  <form action="" method="GET" onSubmit = { handleSubmit(produc) }>
                  <div className="row main align-items-center">
                    <div className="col-2" style={{ display: "flex" }}>
                      <img className="img-fluid" src={"./uploads/"+produc.pImages} />
                      <div className="qt-cart-item">{produc.pQuantity}</div>
                    </div>
                    <div className="col">
                      <div className="row text-muted">Categorie: {produc.pCategory}</div>
                      <div className="row">{produc.pName}</div>
                    </div>
                    <div className="col">
                      <a href="#">-</a>
                      <a href="#" className="border">
                      {produc.pQuantity}
                      </a>
                      <a href="#">+</a>
                    </div>
                    <div className="col items-cart">
                      &euro; {produc.pPrice} <button className="close btn-close-cart"
                      type="submit"
                      ><a className="close" 
                      
                      >&#10005;</a></button>
                    </div>
                  </div>
                  </form>
                </div>)
})}

                <div className="back-to-shop">
                  <Link to="/shop">&larr;</Link>
                  <span className="text-muted">Back to shop</span>
                </div>
              </div>
              <div className="col-md-4 summary">
                <div>
                  <h5>
                    <b>Summary</b>
                  </h5>
                </div>
                <hr />
                <div className="row">
                  <div className="col">ITEMS {getData.totalQt}</div>
                </div>
                <div
                 className="row"
                  style={{
                    borderTop: "1px solid rgba(0,0,0,.1); padding: 2vh 0",
                  }}
                >
                  <div className="col">TOTAL PRICE</div>
                  <div className="col text-right">&euro; {getData.totalPrice}</div>
                </div>
                <hr></hr>
                <p className="col normal-text-cart">&#9787; Give your name and address to proceed to checkout</p>
                <input placeholder="Name" type="text" 
                onChange={(e) => setCustomer({ ...customer, customerName: e.target.value })}/>
                <input placeholder="Address" type="text" 
                onChange={(e) => setCustomer({ ...customer, customerAddress: e.target.value })}/>
                <button
                  type="submit"
                  name="submit"
                  value="checkout"
                 className="btn"
                 onClick={()=>setModal(!modal)}
                 disabled={!customer.customerName || !customer.customerAddress?true:false}
                >
                  CHECKOUT
                </button>
                {/* <StripeCheckout
        stripeKey={publishableKey}
        label="Pay Now"
        name="Pay With Credit Card"
        billingAddress
        shippingAddress
        amount={priceForStripe}
        description={`Your total is $${getData.totalPrice}`}
        token={payNow}
      /> */}
      
              </div>
            </div>
          </div>
        </div>
        {modal &&(<div onClick={toggleModal} className="cart-checkout-popup"
  >
    <div onClick={checkout}><StripeCheckout
  stripeKey={publishableKey}
  label="Pay Now"
  name="Pay With Credit Card"
  billingAddress
  shippingAddress
  amount={priceForStripe}
  description={`Your total is $${getData.totalPrice}`}
  token={payNow}
  className="btn-cart-popup"
  
/></div>
<button
                  type="submit"
                  name="submit"
                  value="cancel"
                 className="btn btn-cart-popup"
                >
                  CANCEL
                </button>
</div>)}

      </>

      
    );
    
  } else {
    return (
      <>
        <div className="container-fluid bg-success py-5 ">
          <div className="col-md-6 m-auto text-center text-white">
            <h1 className="h1">Shopping Cart</h1>
            <p>Check your products and total price. And proced to checkout</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card-empty">
              <div className="card-body">
                <div className="col-sm-12 empty-cart-cls text-center">
                  <FaOpencart
                    size={100}
                   className="img-fluid mb-4 mr-3"
                    color="59ab6e"
                  />
                  {/* <img src="https://i.imgur.com/dCdflKN.png" width="130" height="130" className="img-fluid mb-4 mr-3"/> */}
                  <h3>
                    <strong>Your Cart is Empty</strong>
                  </h3>
                  <h4>Plz go shop and add something <RiEmotionHappyFill color="59ab6e"/></h4>
                  <Link to="/shop">
                    <button className=" btn-success btn-lg add-to-cart-sigle-product">
                      <FaCartPlus size={20} />{" "}
                      <span className="text-add-to-cart">Go To Shop</span>
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
