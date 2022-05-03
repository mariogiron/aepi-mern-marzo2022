const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    username: String,
    password: String,
    age: Number,
    active: Boolean
});

module.exports = mongoose.model('user', userSchema);