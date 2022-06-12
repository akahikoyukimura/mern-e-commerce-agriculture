const express = require("express");
const router = express.Router();


const product = require("../../../models/dashboard/ProductModle");
const cart=require("../../../models/site/CartModle");

/**
 * @swagger
 * components:
 *  schemas:
 *    Cart:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *        carts:
 *          type: array
 *          items:
 *            _id:
 *            type: string
 *        totalPrice:
 *          type: number
 *        totalQt:
 *          type: number
 *        customerName:
 *          type: string
 *        customerAddress:
 *          type: string
 */

// Routes
/**
 * @swagger
 * /api/cart/:
 *  post:
 *    tags: ["Orders"]
 *    description: Use to request all orders
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            items:
 *              $ref: '#/components/schemas/Cart'
 *    responses:
 *      200:
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Cart'
 *      500:
 *        description: Some server error
 */
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
 * /api/cart/:
 *  get:
 *    tags: ["Orders"]
 *    description: Use to request all orders
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

// Routes
/**
 * @swagger
 * /api/cart/cartProducts/{id}:
 *  get:
 *    tags: ["Orders"]
 *    description: Use to request all orders
 *    parameters:
 *      - in : path
 *        name: _id
 *        description: id of order
 *        schema:
 *          type: ObjectId
 *        required: true
 *    responses:
 *      '200':
 *        description: A successful response
 */
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
