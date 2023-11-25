const products = require('../data/products');

function getCart(req, res) {
    const cart = req.session.cart || [];
      res.json(cart);
  };

function addToCart(req, res) {
    const productId = parseInt(req.params.productId);
    const product = products.find((p) => p.id === productId);
    if (!product) {
      return res.status(404).json({ message: "상품을 찾을 수 없습니다" });
    }
    const cart = req.session.cart || [];
    const existItem = cart.find((item) => item.id === productId);
    if (existItem) {
      existItem.quantity += 1;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
      });
    }
  
    req.session.cart = cart;
    res.json({ message: "상품이 장바구니에 추가되었습니다.", cart });
  };
  
function updateProductQuantity(req, res) {
    const productId = parseInt(req.params.productId);
    const change = parseInt(req.query.change);
    const cart = req.session.cart;
  
    const item = cart.find((i) => i.id === productId);
  
    if (!item) {
      return res.status(404).json({ message: "상품을 찾을 수 없습니다" });
    }
  
    item.quantity = Math.max(1, item.quantity + change);
  
    res.json({ message: "상품 수량이 업데이트되었습니다.", cart });
  };
  
  function removeFromCart(req, res) {
    const productId = parseInt(req.params.productId);
    const cart = req.session.cart;
    const itemIndex = cart.findIndex((i) => i.id === productId);
  
    cart.splice(itemIndex, 1);
    res.json({ message: "상품을 장바구니에서 제거했습니다.", cart });
  };

  module.exports = { getCart, addToCart, updateProductQuantity, removeFromCart };