const fs = require('fs');
const fsPromise = require('fs/promises');

// Los métodos de File System tienen 3 formas diferentes de ejecución

// readdir nos devuelve todo el contenido de ficheros y directorios de una carpeta en concreto

// 1 - Síncrona
const files = fs.readdirSync('../MiPrimeraApp');
console.log(files);

// 2 - Asíncrona
fs.readdir('../MiPrimeraApp', (err, files) => {
    console.log(err);
    console.log(files);
});
console.log('DESPUÉS');

// 3 - Promesas
fsPromise.readdir('../MiPrimeraApp')
    .then((files) => {
        console.log(files);
    })
    .catch((err) => {
        console.log(err);
    });