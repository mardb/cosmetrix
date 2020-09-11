console.log("Update Review is working")
const productId = window.location.pathname.split('/')[2];
const reviewId = window.location.pathname.split('/')[4];
const reviewInput = document.getElementById('reviewInput');
const submitButton = document.getElementById('submitReview');
const cancelButton = document.getElementById('cancelEdit');


let review;

fetch(`/api/v1/products/${productId}`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    render(data);
  })
  .catch((err) => console.log(err));


  function render(product) {
    const reviewToUpdate = product.post.find((post) => {
      return post._id === reviewId;
    });

    reviewInput.value = reviewToUpdate.body;
  }

  submitButton.addEventListener('click', handleEditReview)

  function handleEditReview(){
    console.log('This is the handle edit function')
    console.log(reviewInput.value)
    const editedReview = {body: reviewInput.value};
    console.log(editedReview)

  fetch(`/api/v1/products/${productId}/posts/${reviewId}`,{
    method: 'PUT',
    headers: { 
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editedReview)

  })
    .then((res) => res.json())
    .then((data) =>{
      console.log('res');
      window.location = `/products/${productId}`
      
    }).catch((err) => {console.log(err)})
  }


