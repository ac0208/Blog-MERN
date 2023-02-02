const mongoose=require("mongoose");

const commentSchema=new mongoose.Schema({
    title:String,
    description:String,
    user_id: {type: mongoose.Schema.Types.ObjectId, ref:"Blog"},
},{timestamps:true});
mongoose.set('strictQuery', true);
const Comment=mongoose.model("Comment",commentSchema);
module.exports={Comment};