const {getAll, getOne, save, deleteOne, update, findByQuery} = require("../models/models");
const Collections = require("../constants/enums");

exports.getAllStudents = async(req, res) => {
    try {
        const querySnapshot = await getAll(Collections.student)
        const user = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
        res.status(200).json(user);
    } catch (e) {
        console.log(e);
        res.status(500).send("Algo Salio Mal!")
    }
}

exports.getOneStudent = async (req, res) => {
    try{
        const doc = await getOne(Collections.student,req.params.id)
        res.status(200).json({id: doc.id, ...doc.data()})
    }catch (e){
        console.log("Error->", e);
        res.status(500).json({message : e})
    }
}

exports.saveStudent =  async(req, res) => {
    try {
        await save(Collections.student,req.body);
        res.status(200).json({message : 'Ok'})
    } catch (e) {
        res.status(500).json({message: 'Ha ocurrido un error'})
    }
}

exports.deleteStudent = async(req, res) => {
    try{
        await deleteOne(Collections.student, req.params.id)
        res.status(200).json({message: 'Estudiante eliminado correctamente',});
    }catch (e){
        console.log("Error->", e);
        res.status(500).json({message : e})
    }
}

exports.updateStudent = async(req, res) => {
    await update(Collections.student, req.param.id, req.body)
    res.status(200).json({message: 'Estudiante editado correctamente'});
}

exports.findByQuery =  async (req, res) => {
    const {value, field} = req.body;
    const data = await findByQuery(Collections.student, field, '==', value);
    const result = data.docs.map((d) => {
        return {id : d.id, ...d.data()}
    })
    res.status(200).json(result)
}