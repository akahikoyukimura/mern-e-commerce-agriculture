const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const product = require("../dashboard/ProductModle");

const cartSchema = new mongoose.Schema(
  {
    carts: [{
       
            type:ObjectId,
            ref: 'ProductModle'
          
    }],
    user:{
        type:ObjectId,
        ref:'User'
    },
    totalPrice: {
      type: Number,
    },
      totalQt: {
      type: Number,
    },
  },
  { timestamps: true }
);
module.exports=cart = mongoose.model("cart", cartSchema);
