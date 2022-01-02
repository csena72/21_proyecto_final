
const cartService = (cartModel) => ({

    async addProductOfCart(cart){
        await cartModel.create(cart);
    },

    async getProductOfCart(id){
        return cartModel.findById(id);
    },

    async getProductsOfCart(){
        return cartModel.find();
    },

    async deleteProductOfCart(id){
        await cartModel.findByIdAndDelete(id);
    },
});

module.exports = cartService;
