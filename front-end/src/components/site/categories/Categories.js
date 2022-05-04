import React from 'react';
import img1 from '../../../images/machine.png';
import img2 from '../../../images/seed.jpg';
import img3 from '../../../images/fertilize (1).png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate,Link } from "react-router-dom";

function Categories() {
    let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/shop`; 
    navigate(path);
  }
  return (
    <section class="container py-5 " id='categories'>
        <div class="row text-center pt-3 ">
            <div class="col-lg-6 m-auto">
                <h1 class="h1">Categories of The Month</h1>
                <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-4 p-5 mt-3">
                <a href="#"><img src={img1} class="rounded-circle img-fluid border"/></a>
                <h5 class="text-center mt-3 mb-3">Machines</h5>
                <p class="text-center">
                    {/* <a class="btn btn-success" onClick={routeChange}>
                    Go Shop</a> */}
                    <Link to="/shop" class="text-center categorie-shop">
                    Go Shop</Link>
                    </p>
                    
            </div>
            <div class="col-12 col-md-4 p-5 mt-3">
                <a href="#"><img src={img2} class="rounded-circle img-fluid border"/></a>
                <h2 class="h5 text-center mt-3 mb-3">Seeds</h2>
                <p class="text-center"><Link to="/shop" class="text-center categorie-shop">
                    Go Shop</Link></p>
            </div>
            <div class="col-12 col-md-4 p-5 mt-3">
                <a href="#"><img src={img3} class="rounded-circle img-fluid border"/></a>
                <h2 class="h5 text-center mt-3 mb-3">Fertilizers</h2>
                <p class="text-center"><Link to="/shop" class="text-center categorie-shop">
                    Go Shop</Link></p>
            </div>
        </div>
    </section>
  )
}

export default Categories