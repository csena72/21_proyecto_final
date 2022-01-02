const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    timestamp: String,
    nombre: String,
    descripcion: String,
    codigo: String,
    foto: String,
    precio: Number,
    stock: Number
})

module.exports = model('ProductDao', productSchema);
