const express = require('express');
const router = express.Router();
const authController = require('../controllers/authControllers');

router.post('/login', authController.login);
router.post('/auto_login', authController.autoLogin);
router.get('/logout', authController.logout);
router.get('/profile', authController.getProfile);

module.exports = router;