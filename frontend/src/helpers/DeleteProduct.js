export const DeleteProducts = async (id) => {
    
    const url = `http://localhost:8080/api/productos/borrar/${id}`;

    await fetch(url, {
        method: "DELETE",
        headers: new Headers({
          'Content-Type': 'application/json'
        })        
      })
        .then((response) => response.text())
        .then((responseText) => {
          console.log(responseText);
        })
        .catch((error) => {
          console.error(error);
        });
  };
  