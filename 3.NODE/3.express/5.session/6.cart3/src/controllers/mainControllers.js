const path = require("path");

function homeRoute(req, res) {
  res.sendFile(path.join(__dirname, "../../public", "index.html"));
}

function productRoute(req, res) {
  res.sendFile(path.join(__dirname, "../../public", "product.html"));
}

function cartRoute(req, res) {
  res.sendFile(path.join(__dirname, "../../public", "cart.html"));
}

module.exports = { homeRoute, productRoute, cartRoute };
