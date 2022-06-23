const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    category: String,
    stock: Number,
    available: Boolean,
    department: { type: Schema.Types.ObjectId, ref: 'department' }
});

module.exports = mongoose.model('product', productSchema);