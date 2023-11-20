const express = require('express');
const app = express();
const port = 3000;

//ejs를 뷰 엔진으로 설정한다
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    // 뷰엔진을 통해서 렌더링
    // 렌더링 = 컨텐츠를 삽입, 변경하는 과정
    res.render('index', {title: 'Express앱', message: 'EJS를 처음 사용해보는 중'});
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
})