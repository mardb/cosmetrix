const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    body: String,
    recommend: Boolean
  },
  { timestamps: true }
);

module.exports = mongoose.model('Post', PostSchema)

