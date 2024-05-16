const { default: mongoose } = require("mongoose");

const userSchema=mongoose.Schema({
    id:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    createdON:{
        type:Date,
        default: Date.now,
    }
}); 

module.exports=mongoose.model('users',userSchema); 