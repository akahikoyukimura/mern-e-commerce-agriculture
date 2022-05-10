import React, { useState } from "react";
import img1 from "../../images/tractor.jpg";
import "../site/js/templatemo.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaChevronCircleDown,
  FaStar,
  FaRegStar,
  FaRegHeart,
  FaRegEye,
  FaCartPlus,
} from "react-icons/fa";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { Link,useLocation } from "react-router-dom";
import {useDispatch} from "react-redux";
import { addToCart } from "../../store/actions/CartActions";

function Product(props) {
  const [product, setProduct] = useState({
    img: img1,
    name: "Tractor",
    price: "122",
    quantity: "1",
  });

  const location = useLocation();
  //console.log(location.state.produc);

  const [qt, setQt] = useState(1);
  
    const [cart,setCart]=useState({
      id:location.state.produc.id,
      image:location.state.produc.img,
      price:location.state.produc.price,
      name:location.state.produc.name,
      quantity:1,
    });

    console.log(cart);

    const handleQt=(e)=>{
      e.preventDefault();
      setCart(prevState => ({
        ...prevState,
        quantity: cart.quantity+1
      }))
    }
    const dispatch=useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // setCart({
        //     id:location.state.produc.id,
        // image:location.state.produc.img,
        // price:location.state.produc.price,
        // name:location.state.produc.name,
        // })

        console.log("this s product:",cart);
        dispatch(addToCart(cart));
        
    }

  

  

  return (
    <>
      <div className="container-fluid bg-success py-5">
        <div className="col-md-6 m-auto text-center text-white">
          <h1 className="h1">Product</h1>
          <p>Pruduct details.</p>
        </div>
      </div>

      <section className="bg-light">
        <div className="container pb-5">
          <div className="row">
            <div className="col-lg-5 mt-5">
              <div className="card mb-3">
                <img
                  className="card-img img-fluid"
                  src={location.state.produc.img}
                  alt="Card image cap"
                  id="product-detail"
                />
              </div>
            </div>
            <div className="col-lg-7 mt-5">
              <div className="card">
                <div className="card-body">
                  <hr className="hr-sigle-product"></hr>
                  <h1 className="h1-center">{location.state.produc.name}</h1>
                  <hr className="hr-sigle-product"></hr>
                  <p className="h3 py-2 price-single-product">${location.state.produc.price}</p>
                  <p className="py-2">
                    <i>
                      <FaStar classNameName="text-success" />
                    </i>
                    <i>
                      <FaStar classNameName="text-success" />
                    </i>
                    <i>
                      <FaStar classNameName="text-success" />
                    </i>
                    <i>
                      <FaRegStar />
                    </i>
                    <i>
                      <FaRegStar />{" "}
                    </i>
                    <span className="list-inline-item text-dark"> Rating 4.8</span>
                  </p>

                  <h6 className="descriptio-sisgle-product">Description</h6>
                  <hr />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod temp incididunt ut labore et dolore magna aliqua.
                    Quis ipsum suspendisse. Donec condimentum elementum
                    convallis. Nunc sed orci a diam ultrices aliquet interdum
                    quis nulla.
                  </p>
                  <p>
                    Categorie:{" "}
                    <span className="span-categorie-single-product">Machine</span>
                  </p>

                  <form action="" method="GET" onSubmit = { handleSubmit }>
                    <input
                      type="hidden"
                      name="product-title"
                      value="Activewear"
                    />
                    <div className="row">
                      <div className="col-auto" style={{ padding: "0px" }}>
                        <ul className="list-inline">
                          <li className="list-inline-item text-right">
                            <input
                              type="hidden"
                              name="product-quanity"
                              id="product-quanity"
                              value="1"
                            />
                          </li>
                          <li className="list-inline-item">
                            <AiOutlineMinusCircle
                              size={40}
                              color="rgb(25 135 84)"
                              cursor={"pointer"}
                              onClick={() => {
                                if (qt != 1) {
                                  setQt(qt - 1);
                                }
                              }}
                            />
                          </li>
                          <li className="list-inline-item">
                            <span className="badge bg-secondary" id="var-value">
                              {cart.quantity}
                            </span>
                          </li>
                          <li className="list-inline-item">
                            <AiOutlinePlusCircle
                              size={40}
                              color="rgb(25 135 84)"
                              cursor={"pointer"}
                              onClick={handleQt}
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="row pb-3">
                      <div
                        className="col d-grid"
                        style={{ justifyContent: "center" }}
                      >
                         
                        <button
                          type="submit"
                          className=" btn-success btn-lg add-to-cart-sigle-product"
                          name="submit"
                          value="addtocard"
                        >
                          <FaCartPlus size={20} />{" "}
                          <span className="text-add-to-cart">Add To Cart</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Product;
