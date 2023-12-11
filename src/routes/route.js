const express = require('express');
const router = express.Router();
const signupController = require('./../controllers/signupController');
const loginController = require('./../controllers/loginController');
const auth = require('./../middlewares/auth');
const addResumeDataController = require('./../controllers/addResumeDataController');
const getResumeDataController =require('./../controllers/getResumeDataController');



function testHandler(req,res){
   res.send('everything working fine');
}
router.get('/test',auth,testHandler);
 
router.post('/signup',signupController);

router.post('/login',loginController);

router.post('/resume',auth,addResumeDataController);

router.get('/resume',auth,getResumeDataController);

module.exports = router;