const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, World! GET received");
});

app.post("/", (req, res) => {
  res.send("Hello, World! POST received");
});

app.put("/", (req, res) => {
  res.send("Hello, World! PUT received");
});

app.delete("/", (req, res) => {
  res.send("Hello, World! DELETE received");
});

// 서버 생성
app.listen(port, () => {
  console.log(`서버가 ${port} 에 생성 되었습니다.`);
});