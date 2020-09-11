const productElement = document.querySelectorAll(".row");

fetch("/api/v1/products")
  .then((buffer) => buffer.json())
  .then((data) => {
    console.log(data)
    render(data);
  })
.catch((err) => console.log({error: err}));
//   .catch((err)=> console.log(err));

function render(productsArray) {
  const productTemplates = productsArray
    .map(product => {
      return getProductTemplate(product);
    })
    .join("");

    productElement[1].insertAdjacentHTML("beforeend", productTemplates);
}

//render by type 
// similar to below 



// let productLinks = document.querySelectorAll('product_type');
// let productLinksArr = 
// addEventListener('click', filterProductsByType)
// function filterProductsByType(event) {
//   //grab all products in array
//   let filterArray = document.getElementsByClassName('productContainer');
//     //then filter array
//   filterArray.filter(productContainer => {
//     if (productContainer.getAttribute(productType) !== event.target.textContent){
//       productContainer.display = "hidden"
//     }
//   })
// }
//




function getProductTemplate(product) {
  return `
  <div productType=${product.product_type} class="productContainer col-lg-4 col-md-6 mb-4">
  <div class="card h-100">
    <a href="#"><img class="card-img-top" src=${product.image_link} alt=""></a>
    <div class="card-body">
      <h4 class="card-title">
        <a style="font-size: 16px;" href="/products/${product._id}">${product.name}</a>
      </h4>
  <h5>$ ${product.price}</h5>
      <p class="card-text"> ${product.description.substring(0,120)}...</p>
      <a href="/products/${product._id}" class="btn btn-primary float-right">More...</a>
    </div>
    <div class="card-footer">
      <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
    </div> 
  </div>
  </div>`;
}


