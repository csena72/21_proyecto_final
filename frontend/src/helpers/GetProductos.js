export const GetProductos = async (id = '') => {
  const url = `http://localhost:8080/productos/listar/${id}`;
  const data = await fetch(url).then((response) => response.json());

  const items = data.map((item) => {
    return {
      id: item.id,
      timestamp: item.timestamp,
      title: item.nombre,
      description: item.descripcion,
      code: item.codigo,
      stock: item.stock,
      price: item.precio,
      image: item.foto,
    };
  });

  return items;
};
