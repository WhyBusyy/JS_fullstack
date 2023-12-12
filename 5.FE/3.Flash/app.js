const express = require('express');
const session = require('express-session');
const flash = require('express-flash');
const nunjucks = require('nunjucks');

const app = express();
const port = 3000;

// 눈적스 초기화
nunjucks.configure('views', {
    express: app
})

app.set('view engine', 'html');

// 세션 설정
app.use(session({
    secret: 'mysecret',
    resave: false,
    saveUninitialized: true
}))

// flash 미들웨어 설정
app.use(flash());

app.get('/', (req, res) => {
    req.flash('info', 'Welcome to my homepage'); //메세지 담기
    res.redirect('/message');
})

app.get('/message', (req, res) => {
    res.render('message', { message: req.flash() }); //메세지 가져오기
})

app.listen(port, () => {
    console.log('서버 레디: ', port);
})