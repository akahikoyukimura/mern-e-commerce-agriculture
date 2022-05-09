const express = require("express");
const router = express.Router();
const CryptoJS = require("crypto-js");
const User = require("../../../models/site/User");
const PASS_SEC = require("../../../config/pass").PASS_SEC;
const JWT_SEC = require("../../../config/jwt").JWT_SEC;
const jwt = require("jsonwebtoken");

//register
router.post("/register", async (req, res) => {
  const newUser = new User({
    uUsername: req.body.uUsername,
    uEmail: req.body.uEmail,
    uPassword: CryptoJS.AES.encrypt(req.body.uPassword, PASS_SEC).toString(),
  });

  try {
    const userSaved = await newUser.save();
    res.status(201).json(userSaved);
  } catch (error) {
    res.status(500).json(error);
  }
});

//login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      uUsername: req.body.uUsername,
    }).select("+uPassword");

    !user && res.status(401).json("Wrong User Name");

    const hashedPassword = CryptoJS.AES.decrypt(user.uPassword, PASS_SEC);

    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    const inputPassword = req.body.uPassword;

    originalPassword !== inputPassword &&
      res.status(401).json("Wrong Password");

      const accessToken = jwt.sign(
        {
            id: user._id,
            uRrole: user.uRrole,
        },
        JWT_SEC,
            {expiresIn:"30d"}
        );
    const { uPassword, ...others } = user._doc;
    res.status(200).json({...others, accessToken});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
