import React from 'react';
import img1 from "../../images/tractor.jpg";
import '../site/js/templatemo.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaChevronCircleDown, FaStar,FaRegStar,FaRegHeart,FaRegEye,FaCartPlus } from "react-icons/fa";
import {AiOutlineMinusCircle,AiOutlinePlusCircle} from "react-icons/ai";

function Product() {
  return (
    <>
    <div class="container-fluid bg-success py-5">
    <div class="col-md-6 m-auto text-center text-white">
        <h1 class="h1">Product</h1>
        <p>
            Proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet.
        </p>
    </div>
</div>
    
    <section class="bg-light">
    <div class="container pb-5">
        <div class="row">
            <div class="col-lg-5 mt-5">
                <div class="card mb-3">
                    <img class="card-img img-fluid" src={img1} alt="Card image cap" id="product-detail"/>
                </div>
            </div>
            <div class="col-lg-7 mt-5">
                <div class="card">
                    <div class="card-body">
                    <hr class="hr-sigle-product"></hr>
                        <h1 class="h1-center">Tractor</h1>
                        <hr class="hr-sigle-product"></hr>
                        <p class="h3 py-2 price-single-product">$250.00</p>
                        <p class="py-2">
                        <i><FaStar className='text-success'/></i>
                                        <i ><FaStar className='text-success'/></i>
                                        <i ><FaStar className='text-success'/></i>
                                        <i><FaRegStar/></i>
                                        <i><FaRegStar/> </i>
                            <span class="list-inline-item text-dark"> Rating 4.8</span>
                        </p>

                        <h6 class="descriptio-sisgle-product">Description</h6>
                        <hr/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse. Donec condimentum elementum convallis. Nunc sed orci a diam ultrices aliquet interdum quis nulla.</p>
                        <p>Categorie: <span class="span-categorie-single-product">Machine</span></p>

                        <form action="" method="GET">
                            <input type="hidden" name="product-title" value="Activewear"/>
                            <div class="row">
                                <div class="col-auto" style={{ padding: '0px' }}>
                                    <ul class="list-inline">
                                        <li class="list-inline-item text-right">
                                            <input type="hidden" name="product-quanity" id="product-quanity" value="1"/>
                                        </li>
                                        <li class="list-inline-item"><AiOutlineMinusCircle size={40} color="rgb(25 135 84)" cursor={'pointer'} /></li>
                                        <li class="list-inline-item"><span class="badge bg-secondary" id="var-value">1</span></li>
                                        <li class="list-inline-item"><AiOutlinePlusCircle size={40} color="rgb(25 135 84)" cursor={'pointer'}  /></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="row pb-3">
                                <div class="col d-grid" style={{justifyContent:'center'}}>
                                    <button type="submit" class=" btn-success btn-lg add-to-cart-sigle-product" name="submit" value="addtocard"><FaCartPlus size={20}/> <span class="text-add-to-cart">Add To Cart</span></button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
</section></>
  )
}

export default Product