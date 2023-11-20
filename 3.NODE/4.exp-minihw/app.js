const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

const users = {};

// static 요청시 제공할 폴더 설정
app.use("/static", express.static("public/static"));
app.use("/images", express.static("public/static/images"));

app.use(bodyParser.json());
// app.use(express.json()); //신버전부터 사용가능

// 각종 라우트 셋업
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});
app.get("/about", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "about.html"));
});
app.get("/user", (req, res) => {
  res.json(users);
});

app.post("/user", (req, res) => {
  const id = Date.now();
  const { name } = req.body;
  users[id] = name;
  res.status(201).send("등록성공");
});

app.delete("/user/:id", (req, res) => {
  try {
    // id 어떻게 접근??
    const id = req.params.id;
    // 로직 처리
    delete users[id];
    // 응답 보내기
    res.status(204).send("삭제성공");
  } catch (error) {
    console.log("삭제 중 오류발생", error);
    res.status(500).send("서버 내부 오류");
  }
});

app.put("/user/:id", (req, res) => {
  // id 어떻게 접근??
  const id = req.params.id;
  // 로직 처리
  users[id] = req.body.name;
  // 응답 보내기
  res.status(200).send("수정성공");
});

app.listen(PORT, () => {
  console.log(`서버대기 : ${PORT}`);
});
