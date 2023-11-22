const express = require('express');
const session = require('express-session');

const app = express();
const port = 3000;

//세션설정
app.use(session({
    secret: 'KEEY', //세션 데이터를 암호화하기 위한 키 ,, (내가 설정한 것)
    resave: false, // 세션 데이터가 변경되지 않아도 다시 저장할지 여부
    saveUnitialized: true // 초기화되지 않은 세션을 저장소에 저장할지 여부
}));

//미들웨어를 상ㅇ해서, 이 사람의 방문횟수 체크
app.use((req, res, next) => {
    //세션에 visitCount 변수 초기화
    req.session.visitCount = req.session.visitCount || 0;
    //방문횟수 증가
    req.session.visitCount++;

    console.log('SessionID', req.sessionID);
    console.log('SessionInfo: ', req.session);
    next();
})

app.get('/', (req, res) => {
    res.send(`당신의 방문 횟수는 ${req.session.visitCount}회 입니다....추적당하는 기분이 어떠신지요...?`);
})

app.listen(port, () => {
    console.log('서버 레디');
})