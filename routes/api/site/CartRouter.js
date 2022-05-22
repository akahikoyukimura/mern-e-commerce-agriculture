const express = require("express");
const router = express.Router();

const product = require("../../../models/dashboard/ProductModle");
const cart=require("../../../models/site/CartModle");

router.post("/", (req, res) => {
  const newCart = new cart({
    carts: req.body.carts,
    user:req.body.user,
    totalPrice: req.body.totalPrice,
    totalQt: req.body.totalQt,
  });

  newCart.save().then((cart) => res.json(cart));
});

router.get("/", (req, res) => {
    cart
      .find()
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
