const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const port = 3000;

// 네이버 메일 서버 설정
const transporter = nodemailer.createTransport({
  host: "smtp.naver.com",
  port: 465,
  auth: {
    user: process.env.NAVER_ID,
    pass: process.env.NAVER_PASS,
  },
});

let certificationCode = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "maillogin.html"));
});

app.post("/api/sendMail", (req, res) => {
  const { mailAddress } = req.body;
  console.log(mailAddress);

  certificationCode.push(Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000);

  // 이메일 내용 정의
  const mailOptions = {
    from: process.env.NAVER_ID,
    to: mailAddress,
    subject: "메일 인증 번호",
    text: `메일 인증 번호는 [${certificationCode}]입니다.`,
  };
  // 이메일 발송
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("인증메일 전송 실패");
    } else {
      console.log("인증메일 전송 성공");
      res.status(200).send("인증메일 전송 성공");
    }
  });
});

app.post("/api/checkCode", (req, res) => {
  const { code } = req.body;
  console.log(certificationCode[0], code);

  if (certificationCode[0] == code) {
    console.log("인증 성공");
    certificationCode = [];
    res.sendStatus(200);
  } else {
    console.log("인증 실패");
    res.sendStatus(500);
  }
});

app.listen(port, () => {
  console.log(`서버가 ${port}에서 대기 중입니다.`);
});
