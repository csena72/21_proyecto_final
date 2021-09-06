export const UpdateProduct = async (id, data) => {
    
    const url = `http://localhost:8080/api/productos/actualizar/${id}`;

    await fetch(url, {
        method: "PUT",
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