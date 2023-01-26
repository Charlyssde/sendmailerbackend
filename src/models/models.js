const db = require("../firebase");


exports.getAll = async (collection) => {
    return await db.collection(collection).get();
}
exports.getOne = async (collection, id) => {
    return await db.collection(collection).doc(id).get();
}
exports.save = async (collection, data) => {
    return await db.collection(collection).add(data);
}
exports.deleteOne = async (collection, id) => {
    return await db.collection(collection).doc(id).delete();
}
exports.update = async (collection, id, body) => {
    return await db.collection(collection).doc(id).update(body);
}

exports.findByQuery = async (collection, key, compare, value) => {
    return await db.collection(collection).where(key, compare, value).get();
}
