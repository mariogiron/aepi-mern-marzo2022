const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: String,
    text: String,
    createdAt: Date,
    category: String,
    author: String
});

module.exports = mongoose.model('article', articleSchema);