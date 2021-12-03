const express = require('express');
var cors = require('cors');
const app = express();
const port = process.env.PORT || 8080;
app.use(express.static('public'));
app.use(express.json());
app.use(cors());
const dbU = require('./src/db/crudcalculadora.js');



app.get('/', function(req, res) {
    res.send('servidor express express')
});

app.get('/get-calculadora', (req, res) => {
    dbU.getDatos(function(arrayExperts) {
        var arreglo = arrayExperts;
        res.send(arreglo);
    })
})

app.get('/get-calculadora/:id', (req, res) => {
    const eid = req.params.id;
    dbU.getDato(eid, function(doc) {
        res.send(doc);
    })
})
app.post('/add-calculadora', (req, res) => {
    const users = req.body;
    dbU.addusers(users, function(response) {
        res.send(response);

    })
})
app.listen(port, () => {
    console.log('my port is listening ' + port);
});