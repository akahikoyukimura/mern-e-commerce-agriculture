const express=require('express');
const mongoose=require('mongoose');
const categoryRouter =require('./routes/api/dashboard/CategoriesRouter');
const bodyParser=require('body-parser');

const books=require('./routes/api/books');
const users=require('./routes/api/users');

const app=express();

app.use(bodyParser.json());
const cors=require('cors');
app.use(cors())

const db=require('./config/keys').mongoUI;

mongoose
        .connect(db)
        .then(()=>console.log('MongoDB Connected ...'))
        .catch(err=>console.log(err));


app.use('/api/books' , books);
app.use('/api/users' , users);
app.use("/api/category", categoryRouter);

const port=process.env.PORT||5000;

app.listen(port,()=>console.log(`server started on port ${port}`));