const router = require('express').Router();
const ProductController = require('../controllers/product');
const upload = require('../middlewares/multer');
const authentication = require('../middlewares/authentication');
const { authAdmin } = require('../middlewares/authorization');
const { sendUploadToGCS } = require('../middlewares/google-cloud-storage');

router.get('/', ProductController.findAll);
router.get('/:productId', ProductController.findOne);

router.use(authentication);
router.use(authAdmin);
router.post('/', upload.single('file'), sendUploadToGCS, ProductController.create);
router.patch('/:productId', upload.single('file'), sendUploadToGCS, ProductController.updateOne);
router.delete('/:productId', ProductController.deleteOne)

module.exports = router;