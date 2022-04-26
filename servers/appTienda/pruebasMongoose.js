const mongoose = require('mongoose');
const User = require('./models/user.model');

// Conectar con la base de datos
mongoose.connect('mongodb://127.0.0.1:27017/aepimern');

// Recuperar todos los usuarios
User.find()
    .then((users) => {
        console.log(users);
    })
    .catch((error) => {
        console.log(error);
    });

// Crear un nuevo Documento
// User.create({
//     name: 'Ramón',
//     email: 'ramon@gmail.com',
//     username: 'ramon',
//     age: 65,
//     active: false
// })
//     .then((result) => { console.log(result) })
//     .catch((error) => { console.log(error) });

// Recuperación de documentos filtrados (then/catch)
User.find({ active: true })
    .then((users) => { console.log(users) })
    .catch((error) => { console.log(error) });

// Recuperación de documentos filtrados (async/await)
async function recuperoActivos() {
    try {
        const users = await User.find({ active: true });
        console.log(users);
    } catch (error) {
        console.log(error);
    }
}
recuperoActivos();