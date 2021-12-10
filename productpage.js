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

function productlist(products) {
  let product = products.filter((element) => {
    return element._id == id;
  });

  console.log(product);

  let productPage = `<section><h3 class="productName">${product[0].name}</h3>
  <img src="${product[0].image}" alt="" class="productimage" width="40%">
  <p class="price">${product[0].price}</p></section>
  <section>
  <h3>Description</h3>
  <h3>Material used</h3>
  <p class="description">${product[0].material}</p>
  <p class="description">${product[0].description}</p>
  
  
  <div class="addminus">
          <div id="poke1"><button class="plus">-</button></div>
          <div id="counter">1</div>
          <div id="poke2"><button class="plus">+</button></div>
          <div>
            <button class="cart"><b>Add to Cart</b></button>
          </div></section>`;

  let detailProduct = document.getElementsByClassName("detail-product");
  detailProduct[0].innerHTML = productPage;
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
