const express=require('express');
const app=express();
const mongoose=require('mongoose');
const seedDB=require('./seed')
const ProductRoutes=require('./controller/productsRoutes')


app.use(ProductRoutes);
app.set('view engine', 'ejs')

mongoose.connect('mongodb://127.0.0.1:27017/eCommerce').then(()=>{
    console.log("Database connected")
}).catch((error)=>{
    console.log(error);
})

//call seed function
// seedDB();

app.get('/',(req, res)=>{
    res.send("<h1>Hello</h1>")
})

app.listen(4000,()=>{
    console.log("Listening...")
})