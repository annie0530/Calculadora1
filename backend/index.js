const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public'));
const db = require('./src/db/crudcalculadora.js');

app.get('/', function(req, res) {
    res.send('servidor express express')
});

app.get('/get-user', (req, res) => {
    db.getDatos(function(arrayExperts) {
        var arreglo = arrayExperts;
        res.send(arreglo);
    })
})

app.get('/get-usuario/:id', (req, res) => {
    const eid = req.params.id;
    db.getDato(eid, function(doc) {
        res.send(doc);
    })

})

app.listen(port, () => {
    console.log('my port is listening ' + port);
});