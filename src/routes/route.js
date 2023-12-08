const express = require('express');
const router = express.Router();
const signupController = require('./../controllers/signupController');
const loginController = require('./../controllers/loginController');

function testHandler(req,res){
   res.send('everything working fine');
}
router.get('/test',testHandler);
 
router.post('/signup',signupController);

router.post('/login',loginController);

module.exports = router;