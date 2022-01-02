exports.cartDto = (obj) => {
  const { _id, ...data} = obj;

  return {
    productId: _id
  }
};
