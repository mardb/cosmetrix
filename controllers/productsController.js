const db = require('../models');


const index = (req, res) => {
  db.Product.find({}, (err, allProduct) => {
    if(err) return res.status(400).json({status:400, error: 'Something went wrong. Please try again.'});
  
    res.json(allProduct)
  });
};
const show = (req, res) => {
  db.Product.findById(req.params.id,(err,foundProduct) =>{
    if(err) return res.status(400).json({status: 400, error: 'Something wwent wrong while trying to retrieve a city. Please try again.'});

    res.json(foundProduct);
  });
}
const create = (req, res) => {
console.log(req.body); //needs parser or it will be undefined 
db.Product.create(req.body, (err, newProduct) => {
  if(err) return res.json(err);

res.json(newProduct)
});
};
const update = (req, res) => {
db.Product.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedProduct) =>{
  if(err) return res.status(400).json({status:400, error: 'Something went wrong, please try again'});

  res.json(updatedProduct)
});
};
const destroy = (req, res) => {
db.Product.findByIdAndDelete(req.params.id, (err, deletedProduct) =>{
  res.json(deletedProduct)
})
}

module.exports = {
  index,
  show,
  create,
  update,
  destroy
}