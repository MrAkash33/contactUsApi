const mongoose = require('mongoose')

const customerFeedback = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
    }
},{})


const customerModal = mongoose.model("conatact",customerFeedback)

module.exports ={
    customerModal
}