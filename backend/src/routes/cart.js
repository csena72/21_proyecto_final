const cartController = require('../controllers/cart');

module.exports = (router) => {

    router
    .get('/api/carrito/listar/:id?', cartController.getProductsOfCart)
    .post('/api/carrito/agregar/:id_producto', cartController.addProductOfCart) 
    .delete('/api/carrito/borrar/:id', cartController.deleteProductOfCart)

    return router;
}