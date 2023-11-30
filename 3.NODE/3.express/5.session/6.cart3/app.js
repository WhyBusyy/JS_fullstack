const express = require("express");
const session = require("express-session");
const path = require("path");

const mainRoutes = require('./src/routes/mainRoutes');
const authRoutes = require('./src/routes/authRoutes');
const productRoutes = require('./src/routes/productRoutes');
const cartRoutes = require('./src/routes/cartRoutes');

const app = express();
const port = 3002;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: "abcd1234",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 60000, // 1분
    },
  })
);

app.use(express.static("public"));

// 라우트 연결
app.use('/', mainRoutes);
app.use('/api', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);

app.use((req, res, next) => {
  // 모든 요청이 있을 때마다 미들웨어를 거쳐간다.. next()
  const start = Date.now();
  //나중에 동작할 리스너 등록
  res.on("finish", () => {
    const end = Date.now();
    const duration = end - start;
    console.log(`요청 ${req.path}에서 소요시간 ${duration}ms입니다.`);
  });
  next();
});

app.listen(port, () => {
  console.log(`서버 오픈 ${port}`);
});
