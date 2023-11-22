// const { json } = require("body-parser");
const express = require("express");

const app = express();
const port = 3000;

// 미들웨어를 통한 body 데이터 처리
// 원래는 body-parser라는 모듈이 해주는 거였음...
// 지금은 빌트인 express 모듈 사용할 예정

app.use(express.json());

app.post("/submit", (req, res) => {
    let data = "";
    
    req.on("data", (body) => {
        data += body;
    });
    
    req.on("end", () => {
        try {
            console.log(data);
            const jsonData = JSON.parse(data);
            res.json({ receiveData: jsonData });
            console.log(jsonData.name);
        } catch (error) {
            res.status(400).json({ error: "잘못된 입력값..." });
        }
    });
    
    //   res.status(201);
    //   res.end();
    //   res.status(201).end();
});

app.post("/submit2", (req, res) => {
  const jsonData = req.body;
  console.log(jsonData);
  res.json({ receiveData: jsonData });
});

app.listen(port, () => {
    console.log(`서버가 ${port} 에서 실행 중입니다.`);
});