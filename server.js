const express=require('express');
const mongoose=require('mongoose');
const categoryRouter =require('./routes/api/dashboard/CategoriesRouter');
const bodyParser=require('body-parser');
const SECRET_KEY = require("./config/pay").SECRET_KEY;
const Stripe = require('stripe')(SECRET_KEY);
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");


const products=require('./routes/api/dashboard/ProductRouter');
const users=require('./routes/api/site/UserRouter');
const auth=require('./routes/api/site/AuthRouter');
const cart=require('./routes/api/site/CartRouter');

const app=express();

app.use(bodyParser.json());
const cors=require('cors');
app.use(cors())

const db=require('./config/keys').mongoUI;

mongoose
        .connect(db)
        .then(()=>console.log('MongoDB Connected ...'))
        .catch(err=>console.log(err));


app.use("/uploads",express.static("routes/api/dashboard/uploads"));
app.use("/api/category", categoryRouter);
app.use("/api/product", products);
app.use("/api/user", users);
app.use("/api/auth", auth);
app.use("/api/cart", cart);

const port=process.env.PORT||5000;

app.listen(port,()=>console.log(`server started on port ${port}`));

app.post('/payment', async (req, res) => {
        let status, error;
        const { token, amount } = req.body;
        try {
          await Stripe.charges.create({
            source: token.id,
            amount,
            currency: 'usd',
          });
          status = 'success';
        } catch (error) {
          console.log(error);
          status = 'Failure';
        }
        res.json({ error, status });
      });



      // Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    components: {},
    info: {
      version: "1.0.0",
      title: "E-commerce API",
      description: "e-commerce API Information",
      contact: {
        name: "AgriKit Developer"
      },
      servers: ["http://localhost:5000"]
    }
  },
  // ['.routes/*.js']
  apis: ["./routes/api/site/*.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

