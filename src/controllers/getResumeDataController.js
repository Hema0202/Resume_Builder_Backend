const userModel = require('./../models/userModel');

async function getResumeDataController(req,res){
try{
  const data=req.query;
  console.log(data)
  const userData = await userModel.findOne({email:data.email})
  res.send({
    status:true,
    message:'success',
    data:userData
  })
}catch(err){
    res.send({
        status: false,
        message: err.message,
      });
}
} 

module.exports = getResumeDataController;