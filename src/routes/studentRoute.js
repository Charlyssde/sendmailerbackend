const {Router} = require('express')
const {getAllStudents, getOneStudent, findByQuery, saveStudent, updateStudent, deleteStudent} = require("../controllers/studentController");
const router = Router();

router.get('/student', getAllStudents);
router.get('/student/:id', getOneStudent);
router.get('/student/custom', findByQuery);
router.post('/student', saveStudent);
router.put('/student', updateStudent);
router.delete('/student/:id', deleteStudent);

module.exports = router;