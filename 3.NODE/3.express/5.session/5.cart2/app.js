const express = require("express");
const session = require("express-session");
const path = require("path");

const app = express();
const port = 3002;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: "abcd1234",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  // 모든 요청이 있을 때마다 미들웨어를 거쳐간다.. next()
  const start = Date.now();
  //나중에 동작할 리스너 등록
  res.on("finish", () => {
    const end = Date.now();
    const duration = end - start;
    console.log(`요청 ${req.path}에서 소요시간 ${duration}ms입니다.`);
  });
  next();
});

const users = [
  { id: 11, username: "1", password: "1" },
  { id: 1, username: "user1", password: "password1" },
  { id: 2, username: "user2", password: "password2" },
  { id: 3, username: "user3", password: "password3" },
  { id: 4, username: "user4", password: "password4" },
];

const products = [
  { id: 1, name: "coke", price: 2000 },
  { id: 2, name: "soda", price: 3000 },
  { id: 3, name: "sprite", price: 2000 },
  { id: 4, name: "coffee", price: 4000 },
];

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
  console.log("Session Info: ", req.session);
});

app.get("/check-login", (req, res) => {
  const user = req.session.user;

  if (user) {
    res.json({ username: user.username });
  } else {
    res.status(401).json({ message: "인증되지 않은 사용자" });
  }
});

app.get("/profile", (req, res) => {
  const user = req.session.user;

  if (user) {
    res.json({ username: user.username, message: "프로필 정보" });
  } else {
    res.status(401).json({ message: "로그인이 필요합니다." });
  }
});

app.get("/myproduct", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "product.html"));
  console.log("Session Info: ", req.session);
});

app.get("/product", (req, res) => {
  res.json(products);
  console.log("Session Info: ", req.session);
});

app.get("/cart", (req, res) => {
  const cart = req.session.cart || [];
  const user = req.session.user;

  if (user) {
    res.json(cart);
  } else {
    res.status(401).json({ message: "로그인이 필요합니다." });
  }
  console.log("Session Info: ", req.session);
});

app.get("/mycart", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "cart.html"));
  console.log("Session Info: ", req.session);
});

app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log("세션 삭제 오류", err);
      res.status(500).json({ message: "로그아웃 실패" });
    } else {
      res.json({ message: "로그아웃 성공" });
    }
  });
});

app.post("/login", (req, res) => {
  // const { id, pw } = req.query;
  const { username, password } = req.body;
  console.log(username, password);

  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    console.log("로그인 성공");
    req.session.user = user;
    res.json({ message: "로그인 성공!" });
  } else {
    console.log("로그인 실패");
    res.status(401).json({ messsage: "로그인 실패!" });
  }
});

app.post("/add-to-cart/:productId", (req, res) => {
  const productId = parseInt(req.params.productId);
  const product = products.find((p) => p.id === productId);
  if (!product) {
    return res.status(404).json({ message: "상품을 찾을 수 없습니다" });
  }
  const cart = req.session.cart || [];

  // 이미 카트에 있는 상품 확인
  const existItem = cart.find((item) => item.id === productId);

  //있다면 수량만 추가
  if (existItem) {
    existItem.quantity += 1;
  } else {
    //없다면 카트에 담기
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    });
  }

  req.session.cart = cart;
  res.json({ message: "상품이 장바구니에 추가되었습니다.", cart });
});

app.post("/update-quantity/:productId", (req, res) => {
  const productId = parseInt(req.params.productId);
  const change = parseInt(req.query.change);
  const cart = req.session.cart;

  const item = cart.find((i) => i.id === productId);

  if (!item) {
    return res.status(404).json({ message: "상품을 찾을 수 없습니다" });
  }

  item.quantity = Math.max(1, item.quantity + change);

  res.json({ message: "상품 수량이 업데이트되었습니다.", cart });
  console.log("Session Info: ", req.session);
});

app.post("/remove-from-cart/:productId", (req, res) => {
  const productId = parseInt(req.params.productId);
  const cart = req.session.cart;
  const itemIndex = cart.findIndex((i) => i.id === productId);

  cart.splice(itemIndex, 1);
  res.json({ message: "상품을 장바구니에서 제거했습니다.", cart });
  console.log("Session Info: ", req.session);
});

app.listen(port, () => {
  console.log(`서버 오픈 ${port}`);
});

// function calculateTotalAmount(cart) {
//     let total = 0;

//     for (let i = 0; i < cart.length; i++) {
//         const item = cart[i];
//         total += item.price * item.quantity;
//     }

//     return total;
// }
