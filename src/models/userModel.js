const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },
    
    password:{
        type:String,
        required:true
    },

    phone: {
        type:String
    },

    linkedinLink: {
        type:String
    },

    githubLink: {
        type:String
    },

    skills: [String],

    interest: [String],

    hobby: [String],

    education: [{
        college: String,
      degree: String,
      percentage: String,
      startYear:  String,
      endYear: String
    }],

    project: [{
        projectTitle: String,
        projectLink: String,
        projectDescription: String
    }],

    experience: [{
        companyName: String,
      designation: String,
      description: String,
      starting: String,
      ending: String
    }]
    
},
{timestamps:true}
)
module.exports = mongoose.model("User",userSchema);