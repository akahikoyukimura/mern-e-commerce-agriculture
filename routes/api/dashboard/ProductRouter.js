const express = require("express");
const router = express.Router();

const product = require("../../../models/dashboard/ProductModle");

const multer = require("multer");
const path = require('path');


// Image Upload setting
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '/uploads/'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get("/", (req, res) => {
  product
    .find()
    .sort({ date: -1 })
    .then((products) => res.json(products));
});

router.post("/",upload.single("pImages"), (req, res) => {
  const newProduct = new product({
    pName: req.body.pName,
    pDescription: req.body.pDescription,
    pPrice: req.body.pPrice,
    SousCategory: req.body.SousCategory,
    pCategory: req.body.pCategory,
    pStatus: req.body.pStatus,
    pImages: req.file.filename,
  });

  newProduct.save().then((product) => res.json(product));
});

//----------------------------get one product-------------------------
router.get("/find/:id", async (req, res) => {
  const prod = await product.findById(req.params.id);

  try {
    if (prod) {
      res.status(200).json({
        success: true,
        prod,
      });
    }
  } catch (error) {
    res.status(404).json(error);
  }
});

//----------------------------find by categorie-------------------------
router.get("/categorie/:cate", async (req, res) => {
  product.find({ pCategory: req.params.cate }, (err, data) => {
    if (err || data.length === 0) {
      res.status(404).json("no product in this categorie");
    } else {
      res.status(200).json({
        success: true,
        data,
      });
    }
  });
});

//----------------------------find by sub categorie-------------------------
router.get("/sub_categorie/:sub_cate", async (req, res) => {
  product.find({ SousCategory: req.params.sub_cate }, (err, data) => {
    if (err || data.length === 0) {
      res.status(404).json("no product in this sub categorie");
    } else {
      res.status(200).json({
        success: true,
        data,
      });
    }
  });
});

//----------------delete product----------------------------------------
router.delete("/:id", (req, res) => {
  product
    .findById(req.params.id)
    .then((product) => product.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

//----------------------update--------------------------------------------
router.put("/:id", async (req, res) => {
  try {
    const updatedProduct = await product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
