const admin = require('firebase-admin');

const serviceAccount = require('./g3b43-calculadora-liquidacion-de3210b27237.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
module.exports = db;