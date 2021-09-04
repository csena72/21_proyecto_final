const  productModel = require('../dao/models/product');

module.exports = class {

    async createProduct(product){
        await productModel.create(product);
    }

    async getProduct(id){
        return productModel.findById(id);
    }

    async getAllProducts(){
        return productModel.find();
    }

    async updateProduct(id, productUpdate){
        const productToUpdate = await productModel.findByIdAndUpdate(id, productUpdate, {
            new: true,
        });
        return productToUpdate;
    }

    async deleteProduct(id){
        await productModel.findByIdAndDelete(id);
    }
}