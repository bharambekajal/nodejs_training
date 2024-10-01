const getStudents = "SELECT * FROM students"

const getStudentsById = "SELECT * FROM students WHERE id = $1"

const checkOriginExists = "SELECT s FROM students s WHERE s.origin = $1"

const postStudent = "INSERT INTO students (firstname, lastname, origin) VALUES ($1, $2, $3)";

const removeStudent = "DELETE FROM students WHERE id = $1";

const updateStudent = "UPDATE students SET firstname=$1 ,lastname=$2,origin=$3 WHERE id = $4"

module.exports={
    getStudents,getStudentsById,checkOriginExists,postStudent,removeStudent,updateStudent,
}