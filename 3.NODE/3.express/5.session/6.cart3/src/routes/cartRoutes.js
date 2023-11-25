const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartControllers');
const authMiddleware = require('../middlewares/authMiddleware');

router.use('/', authMiddleware.checkLogin);

router.get('/', cartController.getCart);
router.post('/:productId', cartController.addToCart);
router.put('/:productId', cartController.updateProductQuantity);
router.delete('/:productId', cartController.removeFromCart);

module.exports = router;