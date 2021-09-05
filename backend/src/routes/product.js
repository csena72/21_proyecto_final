const productController = require('../controllers/product');

module.exports = (router) => {

    router
    .get('/api/productos/listar/:id?', productController.getProducts)
    .post('/api/productos/agregar', productController.createProduct)
    .put('/api/productos/actualizar/:id', productController.updateProduct)
    .delete('/api/productos/borrar/:id', productController.deleteProduct)
    
    return router;
}