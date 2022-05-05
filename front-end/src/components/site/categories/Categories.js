import React,{useState} from "react";
import img1 from "../../../images/machine.png";
import img2 from "../../../images/seed.jpg";
import img3 from "../../../images/fertilize (1).png";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, Link } from "react-router-dom";

function Categories() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/shop`;
    navigate(path);
  };

  const [product, setProduct] = useState([{
    id:1,
    img: img1,
    name: "Machines",
  },
  {
    id:2,
    img: img2,
    name: "Seeds",},
  {id:3,
    img: img3,
    name: "Fertilizers",}
  ]);
console.log(product);
  return (
    <section class="container py-5 " id="categories">
      <div class="row text-center pt-3 ">
        <div class="col-lg-6 m-auto">
          <h1 class="h1">Categories of The Month</h1>
          <p>
            You can find what you are looking for here. Agricultural machinery,
            seeds and fertilizers. Choose one and go shopping.
          </p>
        </div>
      </div>
      <div class="row">

      {product.map((produc)=>{
return(
<div key={produc.id} class="col-12 col-md-4 p-5 mt-3">
 <a href="#">
   <img src={produc.img} class="rounded-circle img-fluid border" />
 </a>
 <h5 class="text-center mt-3 mb-3">{produc.name}</h5>
 <p class="text-center">
   {/* <a class="btn btn-success" onClick={routeChange}>
           Go Shop</a> */}
   <Link to="/shop" class="text-center categorie-shop">
     Go Shop
   </Link>
 </p>
</div>)
})}
      </div>
    </section>
  );
}

export default Categories;
