const cartService = require('../services/cart');

const cart = new cartService();

exports.getProductsOfCart = async (req, res, next) => {
    const { id } = req.params;
    let productsOfCart = await cart.getProductsOfCart();
    if(id){productsOfCart = await cart.getProductOfCart(id)};
    
    res.json(productsOfCart);
}

exports.addProductOfCart = async (req,res) => {
    await cart.addProductOfCart(req.body);
    res.json('Producto agregado al Carrito!');
};

exports.deleteProductOfCart = async (req, res,next) => {
    const {
        body,
        params: { id }
    } = req;
    await cart.deleteProductOfCart(id);
    res.json({msg: 'Ok'});
}