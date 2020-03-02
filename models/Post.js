const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    body: String,
    recommend: Boolean
  },
  { timestamps: true }
);
const Post = mongoose.model('Post', PostSchema)
module.exports = Post;
