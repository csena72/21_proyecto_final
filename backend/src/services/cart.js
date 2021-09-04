const  cartModel = require('../dao/models/cart');

module.exports = class {

    async addProductOfCart(cart){
        await cartModel.create(cart);
    }

    async getProductOfCart(id){
        return cartModel.findById(id);
    }

    async getProductsOfCart(){
        return cartModel.find();
    }

    async deleteProductOfCart(id){
        await cartModel.findByIdAndDelete(id);
    }
}