const {getAll, getOne, save, deleteOne, update, findByQuery} = require("../models/models");
const Collections = require("../constants/enums");

exports.getAllSubjects = async(req, res) => {
    try {
        const querySnapshot = await getAll(Collections.subject)
        const user = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
        res.status(200).json(user);
    } catch (e) {
        console.log(e);
        res.status(500).send("Algo Salio Mal!")
    }
}

exports.getOneSubject = async (req, res) => {
    try{
        const doc = await getOne(Collections.subject,req.params.id)
        res.status(200).json({id: doc.id, ...doc.data()})
    }catch (e){
        console.log("Error->", e);
        res.status(500).json({message : e})
    }
}

exports.saveSubject =  async(req, res) => {
    try {
        await save(Collections.subject,req.body);
        res.status(200).json({message : 'Ok'})
    } catch (e) {
        res.status(500).json({message: 'Ha ocurrido un error'})
    }
}

exports.deleteSubject = async(req, res) => {
    try{
        await deleteOne(Collections.subject, req.params.id)
        res.status(200).json({message: 'Materia eliminada correctamente',});
    }catch (e){
        console.log("Error->", e);
        res.status(500).json({message : e})
    }
}

exports.updateSubject = async(req, res) => {
    await update(Collections.subject, req.param.id, req.body)
    res.status(200).json({message: 'Materia editada correctamente'});
}

exports.findByQuery =  async (req, res) => {
    const {id, field} = req.params;
    const data = await findByQuery(Collections.subject, field, '==', id);
    const result = data.docs.map((d) => {
        return {id : d.id, ...d.data()}
    })
    res.status(200).json(result)
}