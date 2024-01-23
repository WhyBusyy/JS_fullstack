const express = require('express');
const session = require('express-session')

const app = express();
const port = 3000

app.use(
    session({
        secret: 'my-key', // 세션 데이터 암호화 키
        resave: false, // 변경된 것 없어도 저장유무
        saveUninitialized: true, //데이터가 없어도 저장유무
    })
);

app.get('/', (req,res) => {
    req.session.username = 'user1';
    req.session.cart = ['사과', '딸기', '바나나'];

    res.send(`세션 ID: ${req.sessionID}, 세션데이터:${JSON.stringify(req.session)}`)
})

app.get('/user', (req,res) => {
    console.log("Session info:", req.sessionStore.sessions);
    res.send(`세션 ID: ${req.sessionID}, 세션데이터:${JSON.stringify(req.session)}`)
})

app.listen(port, () => {
    console.log(`서버 ${port}번`);
});