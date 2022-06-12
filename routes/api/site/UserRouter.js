const express=require('express');
const router=express.Router();

const User = require('../../../models/site/User');
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');
const PASS_SEC = require("../../../config/pass").PASS_SEC;
const CryptoJS = require("crypto-js");
//const JWT_SEC = require("../../../config/jwt").JWT_SEC;
//const jwt = require("jsonwebtoken");

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        _id:
 *          type: integer
 *        uUsername:
 *          type: string
 *        uEmail:
 *          type: string
 *        uPassword:
 *          type: string
 */

//update
/**
 * @swagger
 * /api/user/{id}:
 *   put:
 *     summary: updates user by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: user id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         decsription: The user was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: user was not found.
 *       500:
 *         description: Some errors happend.
 *
 */
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

/**
 * @swagger
 *  /api/user/{id}:
 *    delete:
 *      summary: removes user from array
 *      tags: [Users]
 *      parameters:
 *        - in: path
 *          name: id
 *          description: user id
 *          required: true
 *          schema:
 *            type: integer
 *      responses:
 *        200:
 *          description: The user was deleted
 *        404:
 *          description: The user was not found
 *
 */
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //get user
  /**
 * @swagger
 * /api/user/{id}:
 *   get:
 *     summary: gets user by id
 *     tags: [Users]
 *     parameters:
 *       - in : path
 *         name: id
 *         description: id of user
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: users by its id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: user can not be found
 */
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
  
/**
 * @swagger
 * /api/user/:
 *   get:
 *     summary: Returns all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: the list of the users
 */
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