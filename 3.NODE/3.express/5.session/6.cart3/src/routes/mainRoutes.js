const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainControllers');

router.get('/', mainController.homeRoute);
router.get('/products', mainController.productRoute);
router.get('/cart', mainController.cartRoute);

module.exports = router;