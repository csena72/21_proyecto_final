const productDao = require('../dal/dao/models/productDao');
const cartDao = require('../dal/dao/models/cartDao');
const productService = require('./productService');
const cartService = require('./cartService');

module.exports = {
    productService: productService(productDao),
    cartService: cartService(cartDao),
}
