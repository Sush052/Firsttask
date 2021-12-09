const url = "https://akva001-4fe2.restdb.io/rest/akva?max=28";

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
  //   console.log(data);
  data.forEach(showProduct);
}

// Product name display vayena

function showProduct(product) {
  console.log(product);
  const template = document.querySelector("#smallProductTemplate").content;

  const copy = template.cloneNode(true);
  copy.querySelector(".productName").textContent = product.productname;
  copy.querySelector("img").src = product.image;
  copy.querySelector(".price").textContent = `${product.price}`;
  copy.querySelector("a").href += product.id;
  // copy.querySelector(".description").textContent=product.description
  const parent = document.querySelector("main");
  parent.appendChild(copy);
}
