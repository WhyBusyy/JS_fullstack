function checkLogin(req, res, next) {
    const user = req.session.user;
  
    if (user) {
      next();
    } else {
      res.status(401).json({ message: '로그인이 필요합니다.', redirectUrl: '/' });
    }
  }
  
  module.exports = { checkLogin };
  