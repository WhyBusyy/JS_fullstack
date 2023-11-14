const http = require('http');

const server = http.createServer();

server.on('request', function() {
    console.log('요청 옴');
});

server.on('connection', function() {
    console.log('연결');
});

server.on('close', function() {
    console.log('연결 종료');
});

console.log('시작');
server.listen(3000);
console.log('종료');