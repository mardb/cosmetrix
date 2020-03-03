const db = require('../models');


const index = (req, res) => {

db.Post.find({}, (err, allPosts) => {
  if(err) return res.status(400).json({status:400, error: 'Something went wrong. Please try again.'});

  res.json(allPosts)
});
};
const show = (req, res) => {

}
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