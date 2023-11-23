const express = require('express');
const session = require('express-session');
const path = require('path');

const app = express();
const port = 3002;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(session({
    secret: 'abcd1234',
    resave: false,
    saveUninitialized: true,
}));

app.use(express.static(path.join(__dirname, 'public')));

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

const products = [
    { id: 1, name: 'coke', price: 2000},
    { id: 2, name: 'soda', price: 3000},
    { id: 3, name: 'sprite', price: 2000},
    { id: 4, name: 'coffee', price: 4000},
]

app.get('/product', (req, res) => {
    res.json(products);
    console.log('Session Info: ', req.session);
});

app.get('/cart', (req, res) => {
    const cart = req.session.cart || [];
    res.json(cart);
})

app.get('/mycart', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "cart.html"));
    console.log('Session Info: ', req.session);
})

app.post('/add-to-cart/:productId', (req, res) => {
    const productId = parseInt(req.params.productId);
    const product = products.find((p) => p.id === productId);
    if(!product) {
        return res.status(404).json({message: '상품을 찾을 수 없습니다'});
    }
    const cart = req.session.cart ||  [];
    //선택상품 카트에 담기
    cart.push({
        id: product.id,
        name: product.name,
        price: product.price
    });

    req.session.cart = cart;
    res.json({message: '상품이 장바구니에 추가되었습니다.', cart});
});


app.listen(port,() => {
    console.log(`서버 오픈 ${port}`);
});