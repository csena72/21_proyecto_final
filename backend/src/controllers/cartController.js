const { cartDto } = require('../dal/dto/cartDto');

const cartController = (service) => {
    const { cartService } = service;
    return {
        getProductsOfCart : async (req, res, next) => {
            const { id } = req.params;
            let productsOfCart = await cartService.getProductsOfCart();
            if(id){productsOfCart = await cartService.getProductOfCart(id)};
            resProductsOfCart = productsOfCart.map(product => cartDto(product));

            res.json(resProductsOfCart);
        },

        addProductOfCart : async (req,res) => {
            await cartService.addProductOfCart(req.body);
            res.json('Producto agregado al Carrito!');
        },

        deleteProductOfCart : async (req, res,next) => {
            const {
                body,
                params: { id }
            } = req;
            await cartService.deleteProductOfCart(id);
            res.json({msg: 'Ok'});
        }
    }
};

module.exports = cartController;
