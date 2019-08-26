const router = require('express').Router();
const CartController = require('../controllers/cart');
const authentication = require('../middlewares/authentication');
const { authAdmin, authUser } = require('../middlewares/authorization');

router.use('/', authentication);
router.post('/', CartController.create);
router.get('/user', CartController.findActiveCart);
router.get('/', CartController.findAll);

router.use('/:cartId', authUser)
router.get('/:cartId', CartController.findOne);
router.delete('/:cartId', CartController.deleteOne);
router.patch('/:cartId', CartController.updateStatus);
router.put('/:cartId/add', CartController.addToCart);
router.put('/:cartId/remove', CartController.removeFromCart);


module.exports = router