const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const departmentSchema = new Schema({
    name: String,
    description: String,
    created_at: Date,
    products: [{ type: Schema.Types.ObjectId, ref: 'product' }]
});

module.exports = mongoose.model('department', departmentSchema);