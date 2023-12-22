const WebSocket = require('ws');

const port = 8080;

// 웹서버 소켓 생성
const wss = new WebSocket.Server({ port: port });

// 웹소켓으로 연결 대기 (소켓 오픈)
wss.on('listening', () => {
    console.log(`웹소켓이 대기 중 on port: ${port}`)
})

// 소켓 연결 요청에 대한 처리
wss.on('connection', (ws, req) => {
    const clientIp = req.socket.remoteAddress;
    console.log('클라이언트가 접속하였습니다', clientIp)

    // 연결된 이후 내부 메세지를 처리하는 부분
    ws.on('message', (message) => {
        // 받은 메세지는 네트워크 바이트 스트림 형태..(소켓 버퍼 타입))
        console.log(message.toString());

        wss.clients.forEach((client) => {
            if(client.readyState === WebSocket.OPEN){
                client.send(message.toString())
            }
        })
    });
    
    // 연결된 이후, 연결 종료를 처리하는 부분
    ws.on('close', () => {
        console.log('클라이언트 접속 종료')
    });
});

console.log(`웹소켓 서버가 시작되었습니다.`);
