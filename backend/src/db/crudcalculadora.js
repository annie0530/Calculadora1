const db = require('./firebase.js');

//obtener a todos los datos
function getDatos(callback) {
    return db.collection('users').get()
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
    return db.collection('users').doc(eid).get()
        .then((refDoc) => {
            callback(refDoc.data());
        })
        .catch(err => {
            //console.error("error to get user", err);
            callback("error to get usuarios", err)
        })

}
module.exports = {
    getDatos,
    getDato
}