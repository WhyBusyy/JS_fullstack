const express = require("express");
const nunjucks = require("nunjucks");
const fs = require("fs");
const csv = require("csv-parser"); //선택사항

const app = express();
const port = 3000;

const results = [];

app.use(express.static("public"));
//눈적스 초기화
nunjucks.configure("views", {
  autoescape: true,
  express: app,
});
app.set("view engine", "html");

app.get("/", (req, res) => {
  try {
    fs.createReadStream(
        "/Users/yubyung-gyu/SESAC/me/sesac_ot/3.NODE/generator/1.user/User.csv"
      )
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", () => {
        const limitedResults = results.slice(0, 20);
        res.render("index", { data : limitedResults });
      });

  } catch (error) {
    console.error("에러 발생:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log("서버 오픈");
});
