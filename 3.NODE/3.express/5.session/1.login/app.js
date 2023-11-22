const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

const users = [
  { id: 1, username: "user1", password: "password1" },
  { id: 2, username: "user2", password: "password2" },
];

app.get("/login", (req, res) => {
  // const { id, pw } = req.query;
  const { username, password } = req.body;
  console.log(username, password);

  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    console.log("로그인 성공");
    res.json({message: '로그인 성공!'});
  } else {
    console.log("로그인 실패");
    res.status(401).json({messsage: '로그인 실패!'});
  }
});

app.get('/', (req, res) => {
    res.send('로그인 이후 페이지..');
})

app.listen(port, () => {
  console.log("서버 오픈");
});
