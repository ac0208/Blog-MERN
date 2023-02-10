const express=require("express");
const { isAuthenticated } = require("../Helper/utils");
const { createNewBlog, updateBlog, deleteBlog } = require("./controller");
const BlogRouter=express.Router();

BlogRouter.post("/blogs",isAuthenticated, createNewBlog);
BlogRouter.put("/updateblog",isAuthenticated,updateBlog);
BlogRouter.delete("/deleteblog",isAuthenticated,deleteBlog);

module.exports=BlogRouter;