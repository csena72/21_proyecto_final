const services = require('../services');
const productController = require('./productController');
const cartController = require('./cartController');


module.exports = {
    productController: productController(services),
    cartController:  cartController(services),
}
