const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
const Post = require('./Post')

const ProductSchema = new mongoose.Schema({
brand: String, 
name: String, 
price: Number,
image_link: String, 
product_link: String,
website_link: String,

description: String,
rating: Number,
category: String,
product_type: String, 
tag_list:[String],
product_colors: [
  { 
    hexValue: String,
    colorName: String,
  }
],
post:[Post.schema] 

}
)
const Product = mongoose.model('Product', ProductSchema);
module.exports= Product;