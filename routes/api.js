const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

//products routes
router.get('/products', ctrl.products.index);
router.get('/products/:id', ctrl.products.show);
router.post('/products', ctrl.products.create);
router.put('/products/:id', ctrl.products.update);
router.delete('/products/:id', ctrl.products.destroy);


//posts routes
router.get('/posts', ctrl.posts.index);
router.get('/posts/:id', ctrl.posts.show);
router.post('/products/:id/posts', ctrl.posts.create);
router.put('/products/:id/posts/:id/update', ctrl.posts.update);//updates posts 
router.put('/posts/:id', ctrl.posts.update);
router.delete('/posts/:id', ctrl.posts.destroy);


//bonus routes if time permits - comment for now
// router.get('/users', ctrl.users.index);
// router.get('/users/:id', ctrl.users.show);
// router.post('/users', ctrl.users.create);
// router.put('/users/:id', ctrl.posts.update);
// router.delete('/users/:id', ctrl.users.destroy);

module.exports = router;