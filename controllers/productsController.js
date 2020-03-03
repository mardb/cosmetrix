const db = require('../models');


const index = (req, res) => {
  db.Product.find({}, (err, allProduct) => {
    if(err) return res.status(400).json({status:400, error: 'Something went wrong. Please try again.'});
  
    res.json(allProduct)
  });
};
const show = (req, res) => {
db.Product.findById(req.params.id, (err, foundProduct)=> {
  if(err) return res.status(400).json({status: 400, error: "Something went wrong. Pleas try again!"})

  res.json(foundProduct);
});
};

const create = (req, res) => {

}
const update = (req, res) => {

}
const destroy = (req, res) => {

}

module.exports = {
  index,
  show,
  create,
  update,
  destroy
}