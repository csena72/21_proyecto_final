const productService = require('../services/product');

const product = new productService();


exports.getProducts = async (req, res,next) => {
    const { id } = req.params;
    let allProducts = await product.getAllProducts();
    if(id){allProducts = await product.getProduct(id)};

    res.json(allProducts);
}

exports.createProduct = async (req,res) => {
    await product.createProduct(req.body);
    res.json('Producto creado!');
};

exports.updateProduct = async (req, res,next) => {
    const { body, params: { id } } = req;
    const updateProduct = await product.updateProduct(id, body);
    res.json(updateProduct);
}

exports.deleteProduct = async (req, res,next) => {
    const {
        body,
        params: { id }
    } = req;
    await product.deleteProduct(id);
    res.json({msg: 'Ok'});
}