const mongoose=require("mongoose");

const blogSchema=new mongoose.Schema({
    title:String,
    description:String,
    user_id: {type: mongoose.Schema.Types.ObjectId, ref:"User", require:true},
    details:String,
},{timestamps:true});
mongoose.set('strictQuery',true);
const Blog=mongoose.model("Blog",blogSchema);
module.exports={Blog};