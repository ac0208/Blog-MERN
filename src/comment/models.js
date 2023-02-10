const mongoose=require("mongoose");

const commentSchema=new mongoose.Schema({
    comment:String,
    user_id: {type: mongoose.Schema.Types.ObjectId, ref:"User", require:true},
    details:String,
},{timestamps:true});
mongoose.set('strictQuery', true);
const Comment=mongoose.model("Comment",commentSchema);
module.exports={Comment};