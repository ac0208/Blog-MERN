const jwt=require("jsonwebtoken");
const { Key } = require("../auth/controller");
const { User } = require("../auth/models");
const isAuthenticated=async(req,res,next)=>{
    token=req.headers.authorization;
    if(!token){
        return res.json({error:"Token Required"});
    }
    try{
        var verify=jwt.verify(token,Key);
    if(verify && verify._id){
        var user=await User.findById(verify._id);
        if(!user){
            return res.json({error:"Unauthorized User"});
        }
        req.body.user_id=user._id;       //for user id
        next();
    }
    else return res.json({error:"Token Required"});
    } catch{
        return res.json({error:"In-valid Token"});
    }
}

module.exports={isAuthenticated};
// headers,body,query,params <- Parameters