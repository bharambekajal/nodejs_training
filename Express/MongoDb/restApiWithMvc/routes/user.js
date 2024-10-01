const express = require("express")
const { handleAllStudents, getStudentById, addStudent, updateStudent, deleteStudent } = require("../controller/user");

const router = express.Router();

router.get('/',handleAllStudents)

router.get('/:id',getStudentById)

router.post('/add',addStudent)

router.put('/update/:id',updateStudent)

router.delete('/delete/:id',deleteStudent)

module.exports = router;