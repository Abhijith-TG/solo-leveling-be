import mongoose from 'mongoose'


 const taskModel = new mongoose.Schema({
    desc:String,
    completed: { type:Boolean, default:false},
     xp: Number
},{
    timestamps:true
})

export const task = mongoose.model('tasks',taskModel)
