const express = require("express");

const app = express();
const port = 3000;

// 정적 파일을 제공할 디렉토리는 미들웨어를 통해서 설정해준다.
// 웹 서버가 바라보는 / 는 ./public이 되었음
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("hello, get3");
});

app.get("/about", async (req, res) => {
    res.send(wowowowow);
});

// :id (가변 변수_ 앞에 콜론 붙이기)
app.get("/user/:id/profile", (req, res) => {
  const uid = req.params.id; // 라우트 파라미터 (req.params. 를 통해서 접근 가능)
  res.send(`
        <HTML>
        <BODY>
        <H1>${uid}님의 프로파일</H1>
        <P>내 프로필이지롱ㅋ</P>
        <IMG src="/images/다운로드.jpeg"/>
        </BODY>
        </HTML>
    `);
});

// 미들웨어를 통한 존재하지 않는 페이지 정의
app.use((req, res) => {
  res.status(404).send("<h1>페이지를 찾을 수 없습니다.</h1>");
});

// GET 파라미터
// /search?keyword=새싹
app.get("/search", (req, res) => {
  const keyword = req.query.keyword;  // req.query를 통해 GET 파라미터 전달
  res.send(`입력한 키워드는: ${keyword}`);
});

// shopping?category=drink&item=beer
app.get("/shopping", (req, res) => {
  const category = req.query.category;
  const item = req.query.item;
  res.send(`입력한 키워드는: ${category}에 ${item} 입니다`);
});

// POST는 Body를 파싱...

app.listen(port, () => {
  console.log(`서버가 ${port} 에서 실행 중입니다.`);
});