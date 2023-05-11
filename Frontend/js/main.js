let products = [];
let hidden = true;
let idElement = 0;
showButton(hidden);
getData();

function showData(products) {
  let cartona = "";

  for (let i = 0; i < products.length; i++) {
    cartona += `<tr>
    <td>${products[i].product_name}</td>
    <td>${products[i].product_price}</td>
    <td>${products[i].product_description}</td>
    <td>
      <button onclick='deleteProduct(${products[i].product_id})' class="btn btn-danger">Delete</button>
      <button  onclick='setInputValues(${products[i].product_id},"${products[i].product_name}",${products[i].product_price},"${products[i].product_description} ")' class="btn btn-success">Update</button>
    </td>
  </tr>`;
  }
  document.getElementById("tbody").innerHTML = cartona;
}

function getData() {
  fetch("http://127.0.0.1:3000/products")
    .then((res) => res.json())
    .then((ResponseData) => {
      products = ResponseData;

      showData(products);
    });
}
function ApiCRUD(endPoint, productObj) {
  fetch("http://127.0.0.1:3000/products", {
    method: endPoint,
    body: JSON.stringify(productObj),
    headers: { "Content-type": "application/json;charset=UTF-8" },
  })
    .then((res) => res.json())
    .then((ResponseData) => {
      products = ResponseData;
      getData();
    });
}

function getInputValues() {
  let productName = document.getElementById("productName").value;
  let productPrice = document.getElementById("productPrice").value;
  let productDesc = document.getElementById("productDesc").value;

  let productObj = {
    name: productName,
    desc: productDesc,
    price: productPrice,
  };
  ApiCRUD("POST", productObj);
}
function deleteProduct(id) {
  ApiCRUD("DELETE", { id });
}
function updateProduct(id) {
  let productName = document.getElementById("productName").value;
  let productPrice = document.getElementById("productPrice").value;
  let productDesc = document.getElementById("productDesc").value;

  let productObj = {
    id: idElement,
    name: productName,
    desc: productDesc,
    price: productPrice,
  };
  ApiCRUD("PUT", productObj);
  setValuesEmpty();
}

function setInputValues(id_, product_name, product_price, product_description) {
  idElement = id_;
  document.getElementById("productName").value = product_name;
  document.getElementById("productPrice").value = product_price;
  document.getElementById("productDesc").value = product_description;
  hidden = false;
  showButton(hidden);
}

function showButton(flag) {
  if (flag) {
    document.getElementById("update").style.visibility = "hidden";
    document.getElementById("add").style.visibility = "visible";
  } else {
    document.getElementById("add").style.visibility = "hidden";
    document.getElementById("update").style.visibility = "visible";
  }
}
function setValuesEmpty() {
  document.getElementById("productName").value = "";
  document.getElementById("productPrice").value = "";
  document.getElementById("productDesc").value = "";
  hidden = true;
  showButton(hidden);
}
