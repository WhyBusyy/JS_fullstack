document.addEventListener("DOMContentLoaded", () => {
  fetch("/product")
    .then((response) => response.json())
    .then((products) => displayProduct(products));
    loginStatus();
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
        .then((cart) => {
          window.location.href = "/cart.html";
        });
    });
}

function loginStatus() {
  fetch('/check-login')    // 백엔드 구현: 사용자 세션 있으면 username 반납
  .then(response => response.json())
  .then(data => {
      if (data.username) {
        document.getElementById("userLog").style.display = "block";
        document.getElementById("username").innerText = data.username;
      }
    });
}

function logout() {
  fetch("/logout")
    .then((response) => response.json())
    .then((data) => {
      alert(data.message);
      showLoginForm();
    });
}
