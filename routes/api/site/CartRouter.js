const express = require("express");
const router = express.Router();


const product = require("../../../models/dashboard/ProductModle");
const cart=require("../../../models/site/CartModle");

router.post("/", (req, res) => {
  const newCart = new cart({
    carts: req.body.customerCart.carts,
    user:req.body.customerCart.user,
    totalPrice: req.body.customerCart.totalPrice,
    totalQt: req.body.customerCart.totalQt,
    customerName:req.body.customerDetails.customerName,
    customerAddress:req.body.customerDetails.customerAddress,
  });

  newCart.save().then((cart) => res.json(cart));
});

// Routes
/**
 * @swagger
 * /customers:
 *  get:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get("/", (req, res) => {
    cart
      .find({})
      .populate({path:"user",model:"user"})
      .populate({path:"carts",model:"product"})
      .sort({ date: -1 })
      .then((cart) => res.json(cart));
  });

  router.get("/cartProducts/:id", async (req, res) => {
    const cart = await cart.findById(req.params.id);

    try {
      if (cart) {
        res.status(200).json({
          success: true,
          cart,
        });
      }
    } catch (error) {
      res.status(404).json(error);
    }
    
  });


module.exports = router;
