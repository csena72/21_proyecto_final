const { productDto } = require('../dal/dto/productDto');

const productController = (service) => {
    const { productService } = service;

    return {
        createProduct : async (req,res) => {
            await productService.createProduct(req.body);
            res.json('Producto creado!');
        },

        getProducts : async (req, res) => {
            const { id } = req.params;
            let allProducts = await productService.getAllProducts();
            if(id){allProducts = await productService.getProduct(id)};
            resProducts = allProducts.map(product => productDto(product));
            res.json(resProducts);
        },

        updateProduct : async (req, res) => {
            const { body, params: { id } } = req;
            const updateProduct = await productService.updateProduct(id, body);
            res.json(updateProduct);
        },

        deleteProduct : async (req, res) => {
            const {
                body,
                params: { id }
            } = req;
            await productService.deleteProduct(id);
            res.json({msg: 'Ok'});
        }
    }
}

module.exports = productController;
