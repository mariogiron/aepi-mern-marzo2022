const colors = require('colors');
const operaciones = require('./operaciones');
const exec = require('child_process').exec;

console.log('Hola Mundo'.green);
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass

console.log(operaciones.res(8, 2));

console.log(__dirname);
console.log(__filename);

console.log(process.argv);

exec('open http://google.es');