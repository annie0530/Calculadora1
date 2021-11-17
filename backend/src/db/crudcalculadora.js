const db = require('./firebase.js');

//obtener a todos los datos
function getDatos(){
    return db.collection('users').get()
      .then((refDoc)=>{
          refDoc.forEach(doc=>{
              console.log(doc.id,'=>',doc.data());
          })
      })
      .catch(err =>{
          console.error("error to get user", err);
      })
}

module.exports = {
    getDatos
}