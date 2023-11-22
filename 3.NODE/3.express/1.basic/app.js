const express = require("express");

const app = express();

const port = 3000;

// 1. 라우팅
// 루트 경로 설정
app.get("/", (req, res) => {
  console.log(req.requestedTime);
  res.send("Hello, World");
});

// 2. 미들웨어
function myLogger(req, res, next) {
  const date = new Date(Date.now());
  const formattedTime = date.toLocaleString();
  console.log(`${formattedTime}: LOG MESSAGE`);
  next(); // 미들웨어 여러개 있을 수 있으니 끝나고 다음 미들웨어 호출할 수 있도록
}

function requestTime(req, res, next) {
  req.requestedTime = Date.now();
  next();
}

app.use(myLogger);
app.use(requestTime);

app.listen(port, () => {
  console.log(`서버가 ${port}에서 실행 중입니다.`);
});
