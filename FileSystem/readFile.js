// readFile lee el contenido de un fichero
const fs = require('fs');
const fsPromise = require('fs/promises');

// Síncrona
const data = fs.readFileSync('./ficheros/uno.md', 'utf-8');
console.log(data);

// asíncrona
fs.readFile('./ficheros/uno.md', 'utf-8', (err, data) => {
    console.log(err);
    console.log(data);
});

// Promesas
fsPromise.readFile('./ficheros/uno.md', 'utf-8')
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err)
    });


if (fs.existsSync('./ficheros/uno.md')) {
    console.log('SI')
} else {
    console.log('NO')
}

fs.exists('./ficheros/uno.md', (existe) => {
    if (existe) {
        console.log('Existe');
    } else {
        console.log('NO existe');
    }
})