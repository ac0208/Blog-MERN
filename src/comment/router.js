const express=require("express");
const { isAuthenticated } = require("../Helper/utils");
const { createNewComment, readAllComments, updateComment, deleteComment } = require("./controller");
const CommentRouter=express.Router();

CommentRouter.post("/comment",isAuthenticated,createNewComment);
CommentRouter.get("/allcomment",isAuthenticated,readAllComments);
CommentRouter.put("/updatecomment",isAuthenticated,updateComment);
CommentRouter.delete("/deletecomment",isAuthenticated,deleteComment);

module.exports=CommentRouter;