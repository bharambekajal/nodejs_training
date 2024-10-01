const mongoose = require("mongoose")
const Student = require("../model/student")


async function handleAllStudents(req,res){
     const allUSer = await Student.find();
     return res.json(allUSer)
}

async function getStudentById(req,res){
    const getstudent = await Student.findById(req.params.id);
    if(!getstudent) return res.status(404).json({error : "student not found"})
    return res.json(getUser)
}

async function addStudent(req,res){
    const body = req.body;
    const studentResult = await Student.create({
        firstname : body.firstname,
        lastname : body.lastname,
        email : body.email
    })
    console.log(studentResult)
    return res.status(201).json({msg:"created student in db"})
}

async function updateStudent(req,res){
    await Student.findByIdAndUpdate(req.params.id,{lastname:"changed Value"})

    return res.json({status:"student updated"})
}

async function deleteStudent(req,res) {
    await Student.findByIdAndDelete(req.params.id)

    return res.json({status:"student deleted"})
}

module.exports = {
    handleAllStudents,getStudentById, addStudent,updateStudent,deleteStudent
}