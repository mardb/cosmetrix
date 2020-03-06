const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile('views/index.html', {
    root: __dirname + '/../'
  });
});


router.get('/products/:id', (req, res) => {
  res.sendFile('views/products/show.html', {
    root: __dirname + '/../'
  });
});

router.get('/products/:id/posts/:id/update', (req, res) =>{
  res.sendFile('views/posts/update.html', {
    root: __dirname + '/../'
  });
});
module.exports = router;