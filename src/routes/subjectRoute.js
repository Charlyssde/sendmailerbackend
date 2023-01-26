const {Router} = require('express')
const {findByQuery, getAllSubjects, getOneSubject, saveSubject, updateSubject, deleteSubject} = require("../controllers/subjectController");
const router = Router();

router.get('/subject', getAllSubjects);
router.get('/subject/:id', getOneSubject);
router.get('/subject/custom', findByQuery);
router.post('/subject', saveSubject);
router.put('/subject', updateSubject);
router.delete('/subject/:id', deleteSubject);

module.exports = router;