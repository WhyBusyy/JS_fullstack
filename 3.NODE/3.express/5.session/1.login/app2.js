const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/static", express.static("public"));
app.use(
  session({
    secret: "KEEY",
    resave: false,
    saveUnitialized: true,
    cookie: {
      maxAge: 120000, // 2분
    },
  })
);

const users = [
  { id: 11, username: "1", password: "1" },
  { id: 1, username: "user1", password: "password1" },
  { id: 2, username: "user2", password: "password2" },
  { id: 3, username: "user3", password: "password3" },
  { id: 4, username: "user4", password: "password4" },
];

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

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
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
    res.json({ username: user.username, message: '프로필 정보' });
  } else {
    res.status(401).json({ message: "로그인이 필요합니다." });
  }
});

app.listen(port, () => {
  console.log("서버 오픈");
});
