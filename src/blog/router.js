const express=require("express");
const { isAuthenticated } = require("../Helper/utils");
const { createNewBlog } = require("./controller");
const BlogRouter=express.Router();

BlogRouter.post("/blogs",isAuthenticated, createNewBlog);

module.exports=BlogRouter;