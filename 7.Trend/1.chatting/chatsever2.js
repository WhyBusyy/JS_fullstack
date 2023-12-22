const WebSocket = require("ws");
const express = require("express");
const path = require("path");

const port = 8080;
const expressPort = 3000;

// 웹서버 소켓 생성
const wss = new WebSocket.Server({ port: port });

// express 서버 생성
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client2.html"));
});

// 웹소켓으로 연결 대기 (소켓 오픈)
wss.on("listening", () => {
  console.log(`웹소켓이 대기 중 on port: ${port}`);
});

// 소켓 연결 요청에 대한 처리
wss.on("connection", (ws, req) => {
  const clientIp = req.socket.remoteAddress;
  console.log("클라이언트가 접속하였습니다", clientIp);

  // 연결된 이후 내부 메세지를 처리하는 부분
  ws.on("message", (message) => {
    // 받은 메세지는 네트워크 바이트 스트림 형태..(소켓 버퍼 타입))
    console.log(message.toString());
    let parsedMessage = JSON.parse(message);

    // 받은 문자열을 파싱해서 객체 형태로 만듦
    try {
      parsedMessage = JSON.parse(message);
      console.log(parsedMessage);
      console.log(parsedMessage.content);
    } catch {
      "Invalid JSON Format: ", error;
    }
    // 모든 클라이언트에게 그대로 전송
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        const messageType = client === ws ? "sent" : "received";
        const messageObj = {
          type: messageType,
          content: parsedMessage.content,
        };
        client.send(JSON.stringify(messageObj));
      }
    });
  });

  // 연결된 이후, 연결 종료를 처리하는 부분
  ws.on("close", () => {
    console.log("클라이언트 접속 종료");
  });
});

app.listen(expressPort, () => {
  console.log(`익스프레스 서버가 준비 중, ${expressPort}`);
});

console.log(`채팅 서버가 시작되었습니다.`);
