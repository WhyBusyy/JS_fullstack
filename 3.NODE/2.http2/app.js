const http = require("http");
const fs = require("fs").promises;
const url = require("url");
const path = require("path");

const SUCCESS = 200;
const SERVER_ERROR = 500;
const NOT_FOUND = 404;

//서버 개체 생성
const server = http.createServer(async (req, res) => {
  console.log(req.method, req.url);

  try {
    if (req.method === "GET") {
        const parsedURL = url.parse(req.url, true); // URL 파싱
        const filePath = path.join("./", parsedURL.pathname); // 파싱한 URL에서 파일경로 읽어오기
      if (req.url === "/") {
        const data = await fs.readFile("./index.html");
        res.writeHead(SUCCESS, { "Content-Type": "text/html; charset=utf-8" });
        res.end(data);
      } else if (req.url === "/about") {
        const data = await fs.readFile("./about.html");
        res.writeHead(SUCCESS, { "Content-Type": "text/html; charset=utf-8" });
        res.end(data);
      }
      //숙제1. 이미지 파일 읽기
      else if (req.url === "/images/") {
        const data = await fs.readFile(filePath); // 읽어온 파일 경로를 변수로 설정
        res.writeHead(SUCCESS, { "Content-Type": "image/jpeg" });
        res.end(data);
      } 
      //숙제2. 확장자에 따라 파일 읽기
      else if (req.method === "GET") {
        const data = await fs.readFile(filePath); // 읽어온 파일 경로
        const readExtention = path.extname(filePath); // 파일 경로에서 확장자만 변수로 설정
        // 읽어온 확장자 변수에 따라 Content-Type에 값을 할당
        let contentType = "text/plain";
        if (readExtention === ".html") {
          contentType = "text/html";
        } else if (readExtention === ".css") {
          contentType = "text/css";
        } else if (readExtention === ".js") {
          contentType = "application/javascript";
        }
        res.writeHead(SUCCESS, { "Content-Type": contentType });
        res.end(data);
      } else {
        res.writeHead(NOT_FOUND, {
          "Content-Type": "text/plain; charset=utf-8",
        });
        res.end("NOT FOUND. 없어~~~");
      }
    } else if (req.method === "POST") {
      //요청을 생성할때
      res.writeHead(201);
      res.end("등록성공");
    } else if (res.method === "PUT") {
      //요청을 수정할때
      res.end("수정성공");
    } else if (res.method === "DELETE") {
      //요청을 수정할때
      res.end("삭제성공");
    }
  } catch (err) {
    console.error("오류발생", err.message);
    res.writeHead(SERVER_ERROR, {
      "Content-Type": "text/plain; charset=utf-8",
    });
    res.end("서버에 오류가 발생했습니다. 관리자에게 문의하세요.");
  }
});

// 서버의 포트 정의
const port = 3000;
server.listen(port, () => {
  console.log(`${port}번 포트 열려있음`);
});
