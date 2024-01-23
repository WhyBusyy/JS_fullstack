const express = require('express');
const cookieParser = require('cookie-parser')

const app = express();
const port = 3000

app.use(cookieParser());

app.get('/', (req,res) => {
    // 만료시간이 설정된 쿠키
    res.cookie('mycookie', 'test', {maxAge: 60000});
    res.cookie('username', 'user1', {maxAge: 65000});
    res.cookie('cart', ['apple', 'grape', 'pear'], {maxAge: 120000});
    res.send("쿠키 전달 완료, 1분 후 만료됩니다.")
})

app.get('/user', (req, res) => {
    const {myCookie, username, cart} = req.cookies;

    res.send(`${username}이 가져온 쿠키는 이것입니다: ${cart}`)
})

app.listen(port, () => {
    console.log(`서버 ${port}번`);
});