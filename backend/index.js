const express = require('express');
const { appCheck } = require('firebase-admin');
const app = express();
const port = 3000;
app.use(express.static('public'));

const db = require('./src/db/crudcalculadora.js');

app.get('/', function(req, res) {
    res.send('servidor express express')
});
app.get('/nueva-ruta', (req, res) => {
    res.send('this is a new pathway')
});
app.get('/get-users/:id', (req, res) => {
    const eid = req.params.id;
    res.send('the doc have been found with ' + eid);

})
app.get('/get-user', (req, res) => {
    res.json({
        "name": "carolina",
        "DNI": 45634
    })

})

app.listen(port, () => {
    console.log('my port is listening ' + port);
});