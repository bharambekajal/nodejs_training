const { Query } = require('pg')
const pool = require('../Db')
const queries = require('../Queries')

const getStudents = (req,res)=>{
    console.log("getting students")
    pool.query(queries.getStudents,(err,result)=>{
        if(err) throw error
        res.setHeader("my_name","kajal")
        res.status(200).json(result.rows)
        
    })
}

const getStudentsById = (req,res)=>{
    console.log("getting student by id")
    const id = parseInt(req.params.id)
    
    pool.query(queries.getStudentsById,[id],(err,result)=>{
        if(err) throw error
        res.status(200).json(result.rows)
    })
}

const addStudent = (req,res)=>{
    const {firstname,lastname,origin} = req.body;

    pool.query(queries.checkOriginExists,[origin],(err,result)=>{
        if(result.rows.length){
            res.send("origin already exists")
        }
        pool.query(queries.postStudent,[firstname,lastname,origin],(err,result)=>{
            if(err) throw error
            res.status(201).send("student added")
        })
    })
}

const deleteStudent = (req,res)=>{
    const id = parseInt(req.params.id);

    pool.query(queries.getStudentsById,[id],(err,results)=>{
        if(!results.rows.length){
            res.send("student does not exist")
        }
        pool.query(queries.removeStudent,[id],(err,results)=>{
            if(err) throw error
            results.status(200).send("student deleted succesfully")
        })
    })
}

const updateStudent = (req,res)=>{
    const id = parseInt(req.params.id);
    const {firstname,lastname,origin} = req.body

    pool.query(queries.getStudentsById,[id],(err,result)=>{
        if(!result.rows.length){
            res.send("student does not exist")
        }

        pool.query(queries.updateStudent,[firstname,lastname,origin,id],(err,results)=>{
            if(err) throw error
            res.status(200).send("student updated succesfully")
        })
    })
}

module.exports = {getStudents,getStudentsById,addStudent,deleteStudent,updateStudent,}
