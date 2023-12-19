const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
const port = 4000;

app.use(morgan("dev"));

//모든 출처에 대해서 허용 - 보안적으로는 좋지않지만, 가장 쉽게 SOP 해결,,
// app.use(cors());

const corsOptions = {
  origin: "http://127.0.0.1:3000", // 허용할 클라이언트 주소
};
app.use(cors(corsOptions));

// 직접 미들웨어 세팅 시(참고만,,)
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:3000');
//     next();
// });

const data = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];

app.get("/api/data", (req, res) => {
    // res.json({ message: 'Hello From Express Server'});
    res.json(data);
});

// express서버에서 서빙하기
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "index.html"));
});

app.listen(port, () => {
  console.log(`서버 포트 : ${port}번`);
});
