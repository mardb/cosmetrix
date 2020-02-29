const mongoose = require("mongoose");
const DB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017";

mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB Connected Successfully."))
  .catch(err => console.log(err));

  module.exports ={
  //uncomment when files have been added 
    // Post: require('./Post');
    // Product: require('./Product');
  }