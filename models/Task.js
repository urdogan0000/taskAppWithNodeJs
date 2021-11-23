const mongoose=require('mongoose')

const Schema=mongoose.Schema

const taskSchema=new Schema({
    desc:{
        type:String,
        required:true
    },
    complated:{
        type:Boolean,
        required:true,
        default:false
    }
})


const Task=mongoose.model('Task',taskSchema)
module.exports=Task