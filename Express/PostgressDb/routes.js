const Router = require("express")
const Controller = require("./controller")

const router = Router();

router.get('/',Controller.getStudents)

router.get('/:id',Controller.getStudentsById)
 
router.post('/add',Controller.addStudent)

router.delete('/delete/:id',Controller.deleteStudent)

router.put('/update/:id',Controller.updateStudent)

module.exports = router;