const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log(id);
const url = "https://akva001-4fe2.restdb.io/rest/akva?_id=" + id;
const options = {
  headers: {
    "x-apikey": "61b08a1972a03f5dae8221e5",
  },
};

fetch(url, options)
  .then(function (res) {
    return res.json();
  })

  .then(function (data) {
    productlist(data);

  });

//Product name image description kei fetch vayena ki k vayo k ??

function productlist(products) {


  let product = products.filter(element => {

    return element._id == id;

  });

  console.log(product)

  let productPage = `<h3 class="productName">${product[0].name}</h3>
  <p class="price">${product[0].price}</p>
  
  <h3>Description</h5>
  <p class="description">${product[0].description}</p>`;

  let detailProduct = document.getElementsByClassName('detail-product');
  detailProduct[0].innerHTML = productPage;


  // console.log(product);
  // document.querySelector("a").href = "productpage.html?id=" + product.id;
  // document.querySelector(".productName").textContent = product.productname;

  // document.querySelector(".productimage").src = product.image;
  // document.querySelector(".price").textContent = `${product.price}`;

  // document.querySelector(".description").textContent = product.description;
}
var poke1 = document.getElementById("poke1");
var cmp = document.getElementById("counter");
poke1.addEventListener("click", myfonction1);
function myfonction1() {
  cmp.innerHTML = parseInt(cmp.innerHTML) - 1;
}

var poke2 = document.getElementById("poke2");
var cmp = document.getElementById("counter");
poke2.addEventListener("click", myfonction);
function myfonction() {
  cmp.innerHTML = parseInt(cmp.innerHTML) + 1;
}
