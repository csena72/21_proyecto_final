const { Schema, model } = require('mongoose');

const cartSchema = new Schema({
    timestamp: String,
    product: Object,    
})

module.exports = model('Cart', cartSchema);