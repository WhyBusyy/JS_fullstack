document.addEventListener("DOMContentLoaded", () => {
  fetch("/cart")
    .then((response) => {
    if (response.status === 200) {
      loginStatus();
      return response.json();
    } else if (response.status === 401) {
      console.log('로그인된 사용자 없음')
      alert("로그인이 필요합니다.")
      window.location.href = "/";
    }
  })
    .then((cart) => displayCart(cart));
});

function displayCart(cart) {
  const cartTableBody = document.querySelector("#cartTable tbody");
  cartTableBody.innerHTML = "";
  cart.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${item.id}</td>
    <td>${item.name}</td>
    <td>${item.price}</td>
    <td>
    ${item.quantity}&nbsp&nbsp
    <button onclick="oneMore(${item.id})" class="pmBtn">+</button>
    <button onclick="removeOne(${item.id})" class="pmBtn">-</button>
    </td>
    <td><button onclick="removeAll(${item.id})">Remove</button></td>
    `;
    cartTableBody.appendChild(row);
  });

  const totalAmountRow = document.createElement("tr");
  totalAmountRow.innerHTML = `
        <td colspan="4" id="longTd">Total:</td>
        <td id="total">${calculateTotalAmount(cart)} 원</td>
      `;
  cartTableBody.appendChild(totalAmountRow);
}

function calculateTotalAmount(cart) {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

function oneMore(productId) {
  fetch(`/update-quantity/${productId}?change=1`, { method: "POST" })
    .then((response) => response.json())
    .then((data) => {
      displayCart(data.cart); // 데이터를 콘솔에 출력하여 확인
    })
    .catch((error) => {
      console.error(error);
    });
}

function removeOne(productId) {
  fetch(`/update-quantity/${productId}?change=-1`, { method: "POST" })
    .then((response) => response.json())
    .then((data) => {
      displayCart(data.cart); // 데이터를 콘솔에 출력하여 확인
    })
    .catch((error) => {
      console.error(error);
    });
}

function removeAll(productId) {
  fetch(`/remove-from-cart/${productId}`, { method: "POST" })
    .then((response) => response.json())
    .then((data) => {
      alert(data.message);
      displayCart(data.cart); // 데이터를 콘솔에 출력하여 확인
    })
    .catch((error) => {
      console.error(error);
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
  fetch('/logout')
  .then(response => response.json())
  .then(data => {
      alert(data.message);
      showLoginForm();
  })
}