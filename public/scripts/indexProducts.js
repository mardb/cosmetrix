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

function getProductTemplate(product) {
  return `
  <div class="col-lg-4 col-md-6 mb-4">
  <div class="card h-100">
    <a href="#"><img class="card-img-top" src="https://www.sephora.com/productimages/sku/s2216638-main-zoom.jpg?imwidth=583/700x400" alt=""></a>
    <div class="card-body">
      <h4 class="card-title">
        <a href="#">${product.name}</a>
      </h4>
  <h5>$ ${product.price}</h5>
      <p class="card-text"> ${product.description}</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
    </div> 
  </div>
  </div>`;
}


