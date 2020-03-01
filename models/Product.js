const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
const Post = require('./Post')

const ProductSchema = new mongoose.Schema({
brand: String, 
name: String, 
price: Number,
description: String,
category: String,
productType: String, 
rating: Number,
tags:[String],
productColor: [
  { 
    hexValue: String,
    colorName: String,
  }
],
image_link: String, 
product_link: String,
website_link: String,
post:[Post.schema] 

}
)
const Product = mongoose.model('Product', ProductSchema);
module.exports= Product;