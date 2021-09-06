export const AddProducts = async (data) => {
  const url = "http://localhost:8080/api/productos/agregar";  
  
  await fetch(url, {
    method: "POST",
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(data),
  })
    .then((response) => response.text())
    .then((responseText) => {
      console.log(responseText);
    })
    .catch((error) => {
      console.error(error);
    });
};
