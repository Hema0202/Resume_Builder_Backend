const userModel = require('./../models/userModel')

async function signupController(req, res){
  let data = req.body;
  console.log(data);
  // let {name, email, password }=data
  let name=data.name;
  let email=data.email;
  let password = data.password;

  const user = await userModel.create({
    name:name,
    email:email,
    password:password
  })
  res.send({
    status:true,
    data:user,
    message:"You are registered successfully"
  });
}

module.exports=signupController;