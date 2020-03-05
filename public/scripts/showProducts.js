console.log('products are showing... ')

const API_BASE = '/api/v1';
const product = document.querySelector('.singleProduct');
const productId = window.location.pathname.split('/')[2];
const postForm  = document.querySelector('.card-body');
$('')

function getProduct() {
  fetch( `${API_BASE}/products/${productId}`)
  .then((stream) => stream.json())
  .then(res => render(res)).catch((err) => console.log(err))
}
getProduct();

function render(productObj){
console.log(productObj)

const productTemplate = getProductTemplate(productObj);
product.innerHTML = '';
product.insertAdjacentHTML('beforeend', productTemplate);
}

function getProductTemplate(product){
  //product reviews template 
  const productPosts = product.post.map((post) =>{
    return`
      <div id='${post._id}'>
      <p id='body'>${post.body}</p>
            <small class="text-muted">Posted by Anonymous on ${post.createdAt} </small>
            <hr>
            
      </div>
    `;
  }).join("");
  postForm.insertAdjacentHTML('afterbegin', productPosts)



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
postForm.addEventListener('click', (event) =>{
  event.preventDefault();
  console.log('tests')
  const body = document.getElementById('body')//body from modal
  let formIsValid = false;
//this is where i will be selecting error messages in the future and validation errors

})//submit a review button 

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
