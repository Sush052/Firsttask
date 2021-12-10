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
  let productHtml = "";

  data.forEach((element) => {
    productHtml += `<div class="product">
    <h3 class="productName">${element.name}</h3>
    <a href="productpage.html?id=${element._id}" class="bullets">
      <img src="${element.image}" alt=" " class="image-fetched" width="50%"
    /></a>

    <p class="price" id="price">${element.price}</p>
    
  </div>`;
  });

  let productTemplate = document.getElementsByClassName("smallProductTemplate");
  console.log(productTemplate);

  productTemplate[0].innerHTML = productHtml;
}



function validate(){
  var name = document.getElementById("name").value;
  var subject = document.getElementById("subject").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  
  var text;
  if(name.length < 5){
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }
  if(subject.length < 10){
    text = "Please Enter Correct Subject";
    error_message.innerHTML = text;
    return false;
  }
  if(isNaN(phone) || phone.length != 10){
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if(message.length <= 140){
    text = "Please Enter More Than 140 Characters";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Submitted Successfully!");
  return true;
}