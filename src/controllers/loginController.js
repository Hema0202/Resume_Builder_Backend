const userModel = require('./../models/userModel');

async function loginController(req,res){
    let data = req.body
    let email = data.email
    let password = data.password
    if(!email) return res.send({
        status:false,
        message:"Please enter email"
    })
    if(!password) return res.send({
        status:false,
        message:"Please enter password"
    })

    const user = await userModel.findOne({
        email:email
    })
    
    if(!user){
        return res.send({
            status:false,
            message:`${email} is not registered!`
        })
    }

    if(user.password !=password){
        return res.send({
            status:false,
            message:'Your password is incorrect'
        })
    }

     res.send({
        status:true,
        data:user,
        message:"You are logged in!"
     })
}

module.exports = loginController;

