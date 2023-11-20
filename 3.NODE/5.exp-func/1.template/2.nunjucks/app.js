const express = require('express');
const app = express();

const nunjucks = require('nunjucks');

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.set('view engine', 'html');

app.get('/', (req, res) => {
    res.render('index', {title: 'nunjucks앱', message: '헤딩1 본문'});
});

app.get('/greeting', (req,res) => {
    const username = '유병규'
    res.render('greeting', {username: username});
    res.render('greeting', {message: `안녕하세요, ${username}님`});
});

app.get('/welcome', (req,res) => {
    const isAdmin = true;
    res.render('welcome', {isAdmin : isAdmin})
});

app.get('/fruits', (req,res) => {
    const fruits = ['banana', 'apple', 'grapes'];
    res.render('fruits', {fruits : fruits});
});

app.get('/page', (req,res) => {
    const data = {
        title : '마이페이지',
        content : '여기에 본문에 들어갈 내용을 작성하시오..'
    };
    res.render('main', data);
});

app.listen(port, () => {
    console.log(`서버 ${port} 레디`);
});