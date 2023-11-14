const http = require('http');

const server = http.createServer((req, res)=> {
    // header
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    // body
    res.write('<h1>나의 첫번째 WAS서버</h1>');
    res.write('<p>안녕하세요~!</p>');
});

server.listen(3000, () => {
    console.log('서버가 3000번 포트에 열려있습니다. 서버가 준비되었습니다.')
});