const express=require('express');
const router=express.Router();

const User = require('../../../models/site/User');
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');
const PASS_SEC = require("../../../config/pass").PASS_SEC;
const CryptoJS = require("crypto-js");
//const JWT_SEC = require("../../../config/jwt").JWT_SEC;
//const jwt = require("jsonwebtoken");


//update
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    if (req.body.uPassword) {
      req.body.uPassword = CryptoJS.AES.encrypt(
        req.body.uPassword,
        PASS_SEC
      ).toString();
    }
  
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//delete
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //get user
  router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      const { uPassword, ...others } = user._doc;
      res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //get all users
  router.get("/", verifyTokenAndAdmin, async (req, res) => {
    const query = req.query.new;
    try {
      const users = query
        ? await User.find().sort({ _id: -1 }).limit(5)
        : await User.find();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports=router;