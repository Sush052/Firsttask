const url = "https://akva001-4fe2.restdb.io/rest/akva?max=28";
const urlParams = new URLSearchParams(window.location.search);

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
    //console.log(data);
    handleProductList(data);
  });
function handleProductList(data) {
  let productHtml = '';

  data.forEach(element => {
    productHtml += `<div class="product">
    <h3 class="productName">${element.name}</h3>
    <a href="productpage.html?id=${element._id}" class="bullets">
      <img src="${element.image}" alt=" " class="image-fetched" width="50%"
    /></a>

    <p class="price" id="price">${element.price}</p>
    
  </div>`;
  });

  let productTemplate = 
  document.getElementsByClassName('smallProductTemplate');
  console.log(productTemplate);

  productTemplate[0].innerHTML = productHtml;


}

// Product name display vayena

function showProduct(product) {
  // console.log(product);
  // console.log("check :" + product.productname)
  // const template = document.querySelector("#smallProductTemplate").content;

  // const copy = template.cloneNode(true);
  // copy.querySelector(".productName").textContent = product.productname;
  // copy.querySelector("img").src = product.image;
  // copy.querySelector(".price").textContent = `${product.price}`;
  // copy.querySelector("a").href += product.id;
  // // copy.querySelector(".description").textContent=product.description
  // const parent = document.querySelector("main");
  // parent.appendChild(copy);
}
