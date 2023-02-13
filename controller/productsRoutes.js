const router=require('express').Router();
const Product = require('../models/product');
var bodyParser = require('body-parser')
router.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/product',async (req,res)=>{
    const products=await Product.find({});
    const product="Product";
    // res.send('Display products')
    res.render('Index',{products,product});
});

router.post('/product', async(req,res)=>{
    const Val=req.body.Val.toLowerCase();

    console.log(Val)
    if(Val==""){
        const products=await Product.find({});
        res.render('Index',{products,product:"Products"});
    }else{
        const products=await Product.find({category:Val});
        res.render('Index',{products,product:Val.toUpperCase()});
    }
})

router.get('/product/:id', async(req,res)=>{
    const id=req.params.id;
    const products=await Product.find({_id:id});
    console.log(products)
    res.render('product',{products});
})

module.exports=router;