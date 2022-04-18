const express=require('express');
const router=express.Router();

const Book=require('../../models/Book');

router.get('/',(req,res)=>{

    Book.find()
        .sort({date:-1})
        .then(books=>res.json(books))
});

router.post('/',(req,res)=>{

    const newBook=new Book({
        title:req.body.title,
        image:req.body.image,
        category:req.body.category,
        price:req.body.price,
        author:req.body.author,
        description:req.body.description
    });

    newBook.save()
            .then(book=>res.json(book))
});

router.delete('/:id',(req,res)=>{

    Book.findById(req.params.id)
        .then(book=>book.remove().then(()=>res.json({success:true})))
        .catch(err=>res.status(404).json({success:false}))
});

module.exports=router;