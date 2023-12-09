const express = require('express');
const router = express.Router();
const signupController = require('./../controllers/signupController');
const loginController = require('./../controllers/loginController');
const auth = require('./../middlewares/auth');

function testHandler(req,res){
   res.send('everything working fine');
}
router.get('/test',auth,testHandler);
 
router.post('/signup',signupController);

router.post('/login',loginController);

module.exports = router;