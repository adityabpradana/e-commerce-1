const router = require('express').Router();
const UserController = require('../controllers/user');

router.post('/login', UserController.signIn);
router.post('/register', UserController.signUp);
router.post('/login/google', UserController.googleSignIn);

module.exports = router