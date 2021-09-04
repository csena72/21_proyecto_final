const productController = require('../controllers/product');
const cartController = require('../controllers/cart');

module.exports = (router) => {

    router
    .get('/api/productos/listar/:id?', productController.getProducts)
    .post('/api/productos/agregar', productController.createProduct)
    .put('/api/productos/actualizar/:id', productController.updateProduct)
    .delete('/api/productos/borrar/:id', productController.deleteProduct)

    .get('/api/carrito/listar/:id?', cartController.getProductsOfCart)
    .post('/api/carrito/agregar/:id_producto', cartController.addProductOfCart) 
    .delete('/api/carrito/borrar/:id', cartController.deleteProductOfCart)
    
    return router;
}