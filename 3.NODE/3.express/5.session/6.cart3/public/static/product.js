document.addEventListener("DOMContentLoaded", () => {
  fetch("/api/products")
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
  fetch(`/api/cart/${productId}`, { method: "POST" })
    .then(async (response) => {
      if (response.status === 200) {
          return response.json();
      } else if (response.status === 401) {
          const data = await response.json();
          alert(data.message);
          if (data.redirectUrl) {
              window.location.href = data.redirectUrl;
          }
        }
    })
    .then((data) => {
      alert(data.message);
      window.location.href = '/cart';
    });
}

function loginStatus() {
  fetch("/api/profile") // 백엔드 구현: 사용자 세션 있으면 username 반납
    .then((response) => response.json())
    .then((data) => {
      if (data.username) {
        document.getElementById("userLog").style.display = "block";
        document.getElementById("username").innerText = data.username;
      }
    });
}

function logout() {
  fetch("/api/logout")
    .then((response) => response.json())
    .then((data) => {
      alert(data.message);
    });
}
