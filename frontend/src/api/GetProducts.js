export const GetProducts = async (id = '') => {
  const url = `http://localhost:8080/api/productos/listar/${id}`;
  const data = await fetch(url).then((response) => response.json());
  
  const isArray=Boolean(data?.length)
  
  if(!isArray){   
    const { _id, ...allData } = data;
    return {
      id: _id,
      ...allData
    };
  }

  const items = data.map((item) => {
    return {
      id: item._id,
      timestamp: item.timestamp,
      nombre: item.nombre,
      descripcion: item.descripcion,
      codigo: item.codigo,
      stock: item.stock,
      precio: item.precio,
      foto: item.foto,
    };
  });

  return items;
};
