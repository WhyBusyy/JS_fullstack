const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>헤더</h1>');
    res.end('<p>서버1</p>');
}).listen(8000, () => {console.log('8000번 포트 생성완료');});

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>헤더</h1>');
    res.end('<p>서버1</p>');
}).listen(8001, () => {console.log('8001번 포트 생성완료');});

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>헤더</h1>');
    res.end('<p>서버1</p>');
}).listen(8002, () => {console.log('8002번 포트 생성완료');});