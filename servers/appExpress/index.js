const express = require('express');

// Leer el fichero de entorno
require('dotenv').config();

// Crear la aplicación Express
const app = express();

// GET localhost:3000
app.get('/', (req, res) => {
    res.end('Funciona GET localhost:3000');
});

//POST localhost:3000/formulario
app.post('/formulario', (req, res) => {
    res.end('Petición POST sobre formulario');
});

// Pongo el server a escuchar
app.listen(process.env.PORT, () => {
    console.log('Servidor escuchando en puerto ' + process.env.PORT);
});