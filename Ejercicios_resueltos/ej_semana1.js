const fs = require('fs');
const fsPromise = require('fs/promises');

fs.readdir('./ficheros', (err, files) => {
    for (let file of files) {
        if (file.endsWith('.md')) {
            const content = fs.readFileSync(`./ficheros/${file}`, 'utf-8');
            // console.log(content);
        }
    }
});

fs.readdir('./ficheros', (err, files) => {
    files
        .filter(file => file.endsWith('.md'))
        .forEach(file => {
            const content = fs.readFileSync(`./ficheros/${file}`, 'utf-8');
            // console.log(content);
        });
});

function leerFicherosMd() {
    fsPromise.readdir('./ficheros')
        .then(files => files.filter(file => file.endsWith('.md')))
        .then((mdFiles) => {
            mdFiles.forEach(file => {
                const content = fs.readFileSync(`./ficheros/${file}`, 'utf-8');
                console.log(content);
            });
        })
        .catch(error => console.log(error));
}

async function leerFicherosMd_v2() {
    const files = await fsPromise.readdir('./ficheros');
    const mdFiles = files.filter(file => file.endsWith('.md'));
    for (let file of mdFiles) {
        const content = await fsPromise.readFile(`./ficheros/${file}`, 'utf-8');
        console.log(content);
    }
}

leerFicherosMd_v2();