const http = require("http");
const fs = require("fs").promises;
const url = require("url");
const path = require("path");
// const querystring = require("querystring");
// const parse = querystring.parse;
// const parse = require("querystring").parse;
const { parse } = require("querystring"); // 객체 디스트럭쳐링..

const SUCCESS = 200;
const SERVER_ERROR = 500;
const NOT_FOUND = 404;

const users = {};

//서버 개체 생성
const server = http.createServer(async (req, res) => {
  console.log(req.method, req.url);

  try {
    if (req.method === "GET") {
      const parsedURL = url.parse(req.url); // URL 파싱
      const filePath = path.join("./", parsedURL.pathname); // 파싱한 URL에서 파일경로 읽어오기
      if (req.url === "/") {
        const data = await fs.readFile("./index.html");
        res.writeHead(SUCCESS, { "Content-Type": "text/html; charset=utf-8" });
        res.end(data);
      } else if (req.url === "/about") {
        const data = await fs.readFile("./about.html");
        res.writeHead(SUCCESS, { "Content-Type": "text/html; charset=utf-8" });
        res.end(data);
      } else if (req.url === "/user") {
        res.writeHead(SUCCESS, { "Content-Type": "text/plain; charset=utf-8" });
        res.end(JSON.stringify(users));
      }
      //숙제1. 이미지 파일 읽기
      else if (req.url === "/images/") {
        const data = await fs.readFile(filePath); // 읽어온 파일 경로를 변수로 설정
        console.log(filePath);
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
      //req를 파싱해서 처리
      let body = "";
      req.on("data", (data) => {
        body += data;
      });
      req.on("end", () => {
        console.log("요청내용은?", body);

        const formData = JSON.parse(body);
        console.log("파싱한후?", formData);

        // const username = formData.name;
        // console.log("사용자이름은?", username);

        // users[username] = username;
        // 새로운 사용자를 추가하고 키로 현재 시간을 사용
        const userID = Date.now();
        users[userID] = {
          username: formData.name,
          userID: userID,
        };
        console.log("최종객체:", users);
      });
      //결과 res를 주는 코드
      res.writeHead(201, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("등록완료");
    } else if (req.method === "PUT") {
      if (req.url.startsWith("/user/")) {
        const key = req.url.split("/")[2];
        let body = "";
        req.on("data", (data) => {
          body += data;
        });
        req.on("end", () => {
          // 도착한 데이터 기반 프로세싱
          console.log("PUT body:", body);
          // 수정 코드 작성
          const formData = parse(body);
          users[key] = formData.name;
        });
      }
      //요청을 수정할때
      res.end("수정성공");
    } else if (req.method === "DELETE") {
      if (req.url.startsWith("/user/")) {
        //요청을 삭제할때
        //요청에 대한 파싱
        //삭제 명령어: curl -X DELETE 127.0.0.1:3000/user/aaa
        //1.url에 /user/ 시작하는걸 찾아서
        //2.그 뒤에 있는 글자를 읽어서 key로 처리하는 것
        //3. 그 키를 users라는 객체안에서 삭제..
        try {
          const key = req.url.split("/")[2];
          delete users[key];
          //요청에 대한 결과
          res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
          res.end("삭제성공");
        } catch (error) {
          console.error("삭제 중 오류발생", error);
          res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
          res.end("서버 오류 발생..관리자에게 문의하세요..");
        }
      } else {
        res.writeHead(NOT_FOUND, {
          "Content-Type": "text/plain; charset=utf-8",
        });
        res.end("NOT FOUND. 없어~~~");
      }
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
