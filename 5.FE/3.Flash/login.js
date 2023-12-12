const express = require("express");
const session = require("express-session");
const flash = require("express-flash");
const nunjucks = require("nunjucks");

const app = express();
const port = 3000;

// 눈적스 초기화
nunjucks.configure("views", {
  express: app,
});

app.set("view engine", "html");

// 세션 설정
app.use(
  session({
    secret: "mysecret",
    resave: false,
    saveUninitialized: true,
  })
);

// flash 미들웨어 설정
app.use(flash());

// 바디파서 미들웨어 추가
app.use(express.urlencoded({ extended: true }));

const users = [
  { id: 1, username: '1', password: '1' },
  { id: 2, username: '2', password: '2' },
  { id: 3, username: '3', password: '3' },
  { id: 4, username: '4', password: '4' },
  { id: 5, username: '5', password: '5' },
];

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    req.flash("message", [
        { type: 'success' , text: '로그인에 성공하였습니다' },
        { type: 'info' , text: '신규 버전이 출시되었습니다.' },
        { type: 'warning' , text: '비밀번호를 7일 이내에 변경하세요.' },
    ]);
  } else {
    req.flash("error", "Login failed. Please check your username and password");
  } //메세지 담기

  const successMessage = req.flash("message");
  const errorMessage = req.flash("error");

//   res.redirect("/login");
  res.render('login', { successMessage, errorMessage })
});

app.get("/", (req, res) => {
  const successMessage = req.flash("success");
  const errorMessage = req.flash("error");

  res.json({ successMessage, errorMessage }); //메세지 가져오기
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.listen(port, () => {
  console.log("서버 레디: ", port);
});
