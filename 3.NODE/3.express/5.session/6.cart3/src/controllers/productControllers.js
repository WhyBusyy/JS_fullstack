const products = require('../data/products');

function getProductList(req, res) {
    res.json(products);
  };

module.exports = { getProductList };