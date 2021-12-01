const db = require('./firebase.js');

//obtener a todos los datos
function getDatos(callback) {
    return db.collection('calculadora').get()
        .then((refDoc) => {
            var arrayExperts = [];
            refDoc.forEach(doc => {
                // console.log(doc.id,'=>',doc.data());
                arrayExperts.push(doc.data());
            })
            callback(arrayExperts);
        })
        .catch(err => {
            //console.error("error to get user", err);
            callback("error to get user", err);
        })
}

function getDato(eid, callback) {
    return db.collection('calculadora').doc(eid).get()
        .then((refDoc) => {
            if (refDoc.exists) {
                callback(refDoc.data());
            } else {
                callback('no such data')
            }
        })
        .catch(err => {
            //console.error("error to get user", err);
            callback("error to get usuarios", err)
        })

}

function addcalculadora(usuario, callback) {
    return db.collection('calculadora').add(usuario)
        .then(() => {
            callback("succes to create the calculator");

        })
        .catch((err) => {
            callback("error to create calculadora", err)
        })
}

module.exports = {
    getDatos,
    getDato,
    addcalculadora
}