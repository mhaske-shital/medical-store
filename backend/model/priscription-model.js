
const mongoose = require("mongoose")

const bikeSchema = mongoose.Schema({
    userId: {
        type:mongoose.Types.ObjectId,
        required:true,
        ref:"signup"
    },
    heading: {
        type: String,
        required:true
    },
    desc: {
        type: String,
        required:true
    },
     
    pic: {
        type: String,
        required:true
    },
    userinfo:{
        type:Object,
        require:true
    }
    
}, { timestamps: true })

module.exports = mongoose.model("prescription",bikeSchema)