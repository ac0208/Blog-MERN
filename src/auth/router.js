const express=require("express");
const { register, login, Reset,commonLogin } = require("./controller");
const authRouter=express.Router();

authRouter.post("/register",register);
authRouter.post("/login",commonLogin,login);
authRouter.post("/reset",commonLogin,Reset);

module.exports=authRouter;