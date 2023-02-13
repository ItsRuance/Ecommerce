const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String,required: true},
    price: { type: Number,min:0,required: true},
    discountPercentage:{type:Number},
    rating:{type:Number},
    stock:{type:Number},
    brand:{type:String},
    category:{type:String},
    thumbnail:{type:String},
    image:[]
  },
  {timestamps:true} // something happen with timestamps 
);

// const Product =mongoose.model('Product', ProductSchema);

module.exports=mongoose.model("Product" ,ProductSchema)