const express=require("express");
const mongoose= require("mongoose");
const cors= require ("cors");
const bodyParser=require("body-parser");
const authRouter=require("./src/auth/router");
const BlogRouter = require("./src/blog/router");

const app=express();
app.use(cors());
app.use(bodyParser.json());

// DB Connection
mongoose.connect("mongodb://localhost:27017/chirag_blog");
mongoose.connection.on("connected",()=>{               //arrow function is also know as callback function
    console.log("DB Connected");
});

app.use("/auth",authRouter);
app.use("/blog",BlogRouter);

app.listen(4100,()=>{
    console.log("Server Started on the Respective Port");
});