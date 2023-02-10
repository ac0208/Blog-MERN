const { Blog } = require("./models");

const createNewBlog=async(req,res)=>{
    var newBlog=await Blog.create(req.body);
    var allBLogs=await Blog.find().populate("user_id details")
    return res.json({status:"Blog Created",allBLogs});
}

const updateBlog=async(req,res)=>{
    var _id=req.query.id;
    var blog=req.body;
    await Blog.findByIdAndUpdate(_id,blog);
    return res.json({status:"Blog Updated"});
}

const deleteBlog=async(req,res)=>{
    var _id=req.query.id;
    var blog=req.body;
    await Blog.findByIdAndDelete(_id,blog);
    return res.json({status:"Blog Deleted"});
}

module.exports={createNewBlog, updateBlog, deleteBlog};