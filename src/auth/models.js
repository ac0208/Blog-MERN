const mongoose=require("mongoose");
const uuid=require("uuid");
const CryptoJs=require("crypto-js");
const userSchema= new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        trim:true,
    },
    name:String,
    ency_password:String,
    salt:String,      //imp for ency_password
    email:String,
},
{timestamps:true});

userSchema.methods={
    securePassword:function(planPassword){
        return CryptoJs.SHA256(planPassword,this.salt).toString();  //toString is used to store in string otherwise it is stored in bytes
    },
    authenticate:function(password){
        return this.ency_password===this.securePassword(password);
    },
}

userSchema.virtual("password").set(function(password) {       // arrow function doesn't support this.
    this.salt=uuid.v4();
    this.ency_password=this.securePassword(password);
});


const User=mongoose.model("User",userSchema);
module.exports={User};