document.addEventListener("DOMContentLoaded", () => {
  fetch("/product")
    .then((response) => response.json())
    .then((products) => displayProduct(products));
  fetch("/cart")
    .then((response) => response.json())
    .then((cart) => displayCart(cart));
});

function displayProduct(products) {
  const productTableBody = document.querySelector("#productTable tbody");
  products.forEach((product) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td><button onclick="addToCart(${product.id})">담기</button></td>
        `;
    productTableBody.appendChild(row);
  });
}

function addToCart(productId) {
  fetch(`/add-to-cart/${productId}`, { method: "POST" })
    .then((response) => response.json())
    .then((data) => {
      // alert(JSON.stringify(data.cart));
      alert(data.message);
      fetch("/cart")
        .then((response) => response.json())
        .then((cart) => displayCart(cart));
    });
}

function displayCart(cart) {
  const cartTableBody = document.querySelector("#cartTable tbody");
  cartTableBody.innerHTML = "";

  function countItems(itemId) {
    return cart.filter((item) => item.id === itemId).length;
  }
  
  cart.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${item.id}</td>
    <td>${item.name}</td>
    <td>${item.price}</td>
    <td>
    ${countItems(item.id)}
    <button onclick="oneMore(${item.id})">+</button>
    <button onclick="removeOne(${item.id})">-</button>
    </td>
    <td><button onclick="removeAll(${item.id})">Remove</button></td>
    `;
    cartTableBody.appendChild(row);
  });
}

// function oneMore(itemId) {}

// function removeOne(itemId) {}

// function removeAll(itemId) {}
