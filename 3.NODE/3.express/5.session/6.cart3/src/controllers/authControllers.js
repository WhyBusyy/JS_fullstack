const users = require('../data/users');

function getProfile(req, res) {
    const user = req.session.user;
  
    if (user) {
      res.json({ username: user.username });
    } else {
      res.status(401).json({ message: "로그인이 필요합니다." });
    }
  };

  function login(req, res) {
    const { username, password } = req.body;
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      req.session.user = user;
      req.session.cart = [];
      res.json({ message: "로그인 성공!" });
    } else {
      res.status(401).json({ messsage: "로그인 실패!" });
    }
  };

  function logout(req, res) {
    req.session.destroy((err) => {
      if (err) {
        console.log("세션 삭제 오류", err);
        res.status(500).json({ message: "로그아웃 실패" });
      } else {
        res.json({ message: "로그아웃 성공" });
      }
    });
  };

  module.exports = { login, logout, getProfile };