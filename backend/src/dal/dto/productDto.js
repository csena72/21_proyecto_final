exports.productDto = (obj) => {
  const { _id, ...data} = obj;
  const product = data._doc;
  return {
    id: _id,
    nombre: product.nombre,
    descripcion: product.descripcion,
    codigo: product.codigo,
    precio: product.precio,
    stock: product.stock
  }
};
