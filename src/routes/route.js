const express = require('express');
const router = express.Router();
const signupController = require('./../controllers/signupController');

function testHandler(req,res){
   res.send('everything working fine');
}
router.get('/test',testHandler);
 
router.post('/signup',signupController);

module.exports = router;