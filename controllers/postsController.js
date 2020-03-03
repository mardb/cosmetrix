const db = require('../models');


const index = (req, res) => {

db.Post.find({}, (err, allPosts) => {
  if(err) return res.status(400).json({status:400, error: 'Something went wrong. Please try again.'});

  res.json(allPosts)
});
};
const create = (req, res) => {
db.Post.create(req.body,(err, newPost) =>{
  //create a post to associate with Product
  if(err) return res.status(400).json({status: 400, error: 'Something went wrong while attempting to create a post. Please try again.'})
  //user Post ID to find which post to embed to 
  db.Product.findById(req.params.id, (err, foundProduct) => {
    if(err) return res.status(400).json({status: 400, error: 'Something went wrong. Please Try again.'});
    //When we find product we use push() method to push the new Post into the Products Post
    foundProduct.post.push(newPost);

    //save document anytime there any changes!
    foundProduct.save((err, savedProduct) => {
      if(err) return res.status(400).json({status: 400, error: 'Something went wrong. Please try again'})

      res.json(newPost)
    })
  })
})
}

const show = (req, res) => {

}

const update = (req, res) => {

}
const destroy = (req, res) => {
// find t product the post is embedded in
db.city.findById(re.params.productId, (err, foundProduct) => {
  if(err) return res.status(400).json({status: 400, error: "Something went wrong, please try again."});


  const postToDelete = foundProduct.posts.id(req.params.postId);

  
  if(!postToDelete) {
    return res.status(400).json({status: 400, error: 'Couldnt find post.'});
  }
  postToDelete.remove();

  //after deleteing, post has been altered
  //use save() to save altered item. 
  foundProduct.save((err, savedProduct) => {
    if(err) return res.status(400).json({status: 400, error: 'Something went wrong, Please try again'});

    //this will delete original post
    db.Post.findByIdAndDelete(req.params.postId, (err, deletedPost) => {
      if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});
      res.json(deletedPost);
    });
  });
});
}

module.exports = {
  index,
  show,
  create,
  update,
  destroy
}