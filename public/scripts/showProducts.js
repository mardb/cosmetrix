console.log("products are showing... ");

const API_BASE = "/api/v1";
const product = document.querySelector(".singleProduct");
const productId = window.location.pathname.split("/")[2];
const postForm = document.getElementById("newPost");
const reviewContainer = document.getElementById('reviews') 

//update button switch to delete 
reviewContainer.addEventListener('click', (event)=>{
  if(event.target.classList.contains('updateReview')){
    console.log('Update Review');
    console.log(event.target.parentNode.id)
    //
  }
})

function getProduct() {
  fetch(`${API_BASE}/products/${productId}`)
    .then(stream => stream.json())
    .then(res => render(res))
    .catch(err => console.log(err));
}
getProduct();

function render(productObj) {
  console.log(productObj);

  const productTemplate = getProductTemplate(productObj);
  product.innerHTML = "";
  product.insertAdjacentHTML("beforeend", productTemplate);
}

function getProductTemplate(product) {
  //product reviews template
  reviewContainer.innerHTML = "";

  const productPosts = product.post
    .map(post => {
      return `
      <div id='${post._id}'>
       <a href='/products/${productId}/posts/${post._id}/update' class='btn btn-primary updateReview'>Update</a> <button class='delete-post'>Delete</button> 
      <p id='body'>${post.body}</p>
            <small class="text-muted">Posted by Anonymous on ${post.createdAt} </small>
            <hr>   
      </div>
    `;
    })
    .join("");
    reviewContainer.insertAdjacentHTML("afterbegin", productPosts);

  //product template

  return `
    <img class="card-img-top card-img-size" id="${product._id}" src=${product.image_link} alt="">
    <div class="card-body">
      <h3 class="card-title">${product.name}</h3>
      <h4>${product.price}</h4>
      <p class="card-text">${product.description}</p>
      <span class="text-warning">&#9733; &#9733; &#9733; &#9733; &#9734;</span>
      ${product.rating}.0 stars
    </div>
  `;
}

//add a new review to product
postForm.addEventListener("submit", event => {
  event.preventDefault();
  const body = document.getElementById("reviewBody"); //body from modal
  // let formIsValid = false;

  //select error messages
  // const bodyFeedback = document.querySelector(".body-feedback");
  //Reset validation classes and errors
  // body.classList.remove("is-invalid");
  // body.Feedback && bodyFeedback.remove();

  // if (!body.value) {
  //   formIsValid = false;
  //   body.classList.add("is-invalid");
  //   body.parentNode.insertAdjacentHTML(
  //     "beforeend",
  //     '<div class="invalid-feedback body-feedback">Content is required</div>'
  //   );
  // } else {
  //   formIsValid = true;
  //   body.classList.add("is-valid");
  // }
  // if (formIsValid) {
    console.log("Let's do this!");
    console.log(body)
    const newPost = {body: body.value };
    console.log(newPost);

    //this is where i will be selecting error messages in the future and validation errors
    // let val = $('textarea').val();
    // // console.log(event.target.value);
    // console.log(val);
    // let data = {body: 1425454};
    // console.log(data);

    fetch(`/api/v1/products/${productId}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPost)
    })
      .then((stream) => stream.json())
      .then((res) => {
        console.log(res);
        if (res.body) {
          getProduct();
          // $('#newPostModal').modal('hide');
        }
      })
      .catch(err => console.log(err));
  // }
}); //submit a review button

// fetch(`/api/v1/products/${productId}/posts`,{
//   method: 'POST',
//   headers: {
//     'Content-Type': 'applications/json',
//   },
//   body: JSON.stringify(newPost),
// }).then((stream) => stream.json())
// .then((res) => {
//   console.log(res)
//   getProduct();
//   $('#newPostModal').modal('hide');
// }).catch((err) => console.log(err))
//delete review post
// product.addEventListener('click', (event) => {
//   if(event.target.classList.contains('delete-post')){
//     deletePost(event)
//   }
// });

// function deletePost(event) {
//   fetch(`/api/v1/products/${productId}/posts/${event.target.parentNode.id}`, {
//     method: 'Delete',
//   }).then((stream) => stream.json()).then((res) => {
//     console.log(res)
//   }).catch((err) => console.log(err));
// }


reviewContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-post')) {
    deletePost(event);
    console.log("im working");
  }
});

function deletePost(event) {
  // console.log(event.target.parentNode.id)
  fetch(`/api/v1/products/${productId}/posts/${event.target.parentNode.id}`, {
    method: 'DELETE',
  })
  .then((stream) => stream.json())
  .then((res) => {
    console.log(res);
    getProduct();
  })
  .catch((err) => console.log(err));
}