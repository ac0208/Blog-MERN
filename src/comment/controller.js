const {Comment}=require("./models");

const createNewComment=async(req,res)=>{
    var newComment=await Comment.create(req.body);
    var allComment=await Comment.find().populate("user_id details");
    return res.json({status:"Comment Created",allComment});
}

const readAllComments=async(req,res)=>{
    var _id=req.query.id;
    if(_id){
        var display=await Comment.findById(_id);
    }else{
        var display=await Comment.find();
    }
    return res.json({display});
}

const updateComment=async(req,res)=>{
    var _id=req.query.id;
    var comment=req.body;
    await Comment.findByIdAndUpdate(_id,comment);
    return res.json({status:"Comment Updated"});
}

const deleteComment=async(req,res)=>{
    var _id=req.query.id;
    var comment=req.body;
    await Comment.findByIdAndDelete(_id,comment);
    return res.json({status:"Comment Deleted"});
}
module.exports={createNewComment,readAllComments,updateComment,deleteComment};