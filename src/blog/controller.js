const { Blog } = require("./models");

const createNewBlog=async(req,res)=>{
    var newBlog=await Blog.create(req.body);
    var allBLogs=await Blog.find().populate("user_id details")
    return res.json({status:"Blog Created",allBLogs});
}

module.exports={createNewBlog};