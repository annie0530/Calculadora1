const admin = require('firebase-admin');

const serviceAccount = require('./g3b43-calculadora-liquidacion-de3210b27237.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

//anadir a un usuario
var service = {
    Name:"microcontroladores",
    Description: "HAGO TAL COSA",
    Experencia: 10,
    Photo:["www.123.com"]
}
db.collection("usuario").add({
    Name:" Mariana",
    Location:"pereira, risaralda, colombia",
    Services:[service],
    Cel:"123456789",
    DNI:"0987654321",
    Bio: "soy una muchacha pereirana...",
    Contactlink:"www.linkedin.com",
    Occupation:"practicante",
    Photo:"www.asdsdd.com"
})
.then((doc)=>{
    console.log(`documento registrado con el ID ${doc.id}`);
})
.catch((error)=>{
    console.log("error al registrar el documento");
})