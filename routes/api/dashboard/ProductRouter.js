const express=require('express');
const router=express.Router();

const product=require('../../../models/dashboard/ProductModle');

router.get('/',(req,res)=>{

    product.find()
        .sort({date:-1})
        .then(products=>res.json(products))
});

router.post('/',(req,res)=>{

    const newProduct=new product({
        pName:req.body.pName,
        pDescription:req.body.pDescription,
        pPrice:req.body.pPrice,
        SousCategory:req.body.SousCategory,
        pCategory:req.body.pCategory,
        pStatus:req.body.pStatus,
        pImages:req.body.pImages
    });

    newProduct.save()
            .then(product=>res.json(product))
});

router.delete('/:id',(req,res)=>{

    product.findById(req.params.id)
        .then(product=>product.remove().then(()=>res.json({success:true})))
        .catch(err=>res.status(404).json({success:false}))
});

module.exports=router;