const nodemailer = require('nodemailer');
require('dotenv').config();

// 네이버 메일 서버 설정
const transporter = nodemailer.createTransport({
    host: 'smtp.naver.com',
    port: 465,
    auth: {
        user: process.env.NAVER_ID,
        pass: process.env.NAVER_PASS
    }
});

// 이메일 내용 정의
const mailOptions = {
    from: process.env.NAVER_ID,
    to: 'ybg6152@naver.com',
    subject: '테스트 이메일',
    text: '이메일 전송 테스트용'
}

// 이메일 발송
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error(error);
    } else {
        console.log('메일 전송 성공' + info.response);
    }
})