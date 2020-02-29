const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
brand: String, 
name: String, 
price: Number,
description: String,
category: String,
productType: String, 
rating: Number,
tag:[String],
productColor: [
  { 
    hexValue: String,
    colorName: String,
  }
],
img: String, 
post:[post.Schema] 

}
)

module.exports= mongoose.model('Product', ProductSchema)