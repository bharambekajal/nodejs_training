const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    firstname :{
        type: String,
        required:true,
    },
    lastname:{
        type :String,
        required:true
    },
    email:{
        type:String,
        unique :true
    }
},{timestamps:true})

//building model out of that schema
const Student = mongoose.model("student",studentSchema) 

module.exports ={
    Student,
}