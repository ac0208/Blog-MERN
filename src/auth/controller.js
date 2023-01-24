const {res, req}=require("express");
const jwt = require("jsonwebtoken");
const Key="kkshdfjksadhskajhfsajh";
const {User}= require("./models");

const register = async (req, res) => {
    const { username, password } = req.body;
  
    const isExist = await User.findOne({ username: username });
    if (isExist) {
      return res.json({ error: "This username already exist" });
    }
    if(password.length<6){
        return res.json({ error: "This password is too short" });        
    }
    var newUser=await User.create(req.body);  
    newUser.ency_password=undefined;
    newUser.salt=undefined;               //so that it is not visible on the front-end
    return res.json({ status: "User Created", newUser});
  };
  
const commonLogin=async(req,res,next)=>{
    const{username,password}=req.body;
    var user=await User.findOne({username:username});
    if(!user){
        return res.json({error:"Username didn't match"});                    //made common function so as to use it again is it a middleware uses req,res,next and next() is a function
    }
    if(!user.authenticate(password)){
        return res.json({error:"Wrong Password... Enter Again"});
    }
    var token=jwt.sign({_id:user._id},Key);    //object should be passed here
    req.body.token=token;
    req.body.user=user;
    next();    // So that next function can be applied
}

const login=async(req,res)=>{
   
    return res.json({status:"Successfully LoggedIn", data:req.body});
}

const Reset=async(req,res)=>{
    var user=await User.findOne({username:req.body.username});
    user.password=req.body.newPassword;
    await user.save();
    return res.json({status:"Done"});
}

module.exports={register,login,Reset,commonLogin,Key};