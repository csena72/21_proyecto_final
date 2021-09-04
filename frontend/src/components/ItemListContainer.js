import { useEffect, useState } from "react";
import { GetProductos } from "../helpers/GetProductos";
import { ItemList } from "./ItemList";
import { Container, Spinner } from "react-bootstrap";

export const ItemListContainer = () => {  
  const [items, setItems] = useState([]);
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    GetProductos()
      .then((items) => {        
        setItems(items);
      })
      .catch((error) => {
        console.log("Error searching items", error);
      })
      .finally(() => {
        setIsLoad(false);
      });
  }, []);

  return (
    <Container fluid="lg">
      {isLoad ? (
        <div>
          <Spinner
            className="spinner"
            animation="border"
            role="status"
            variant="secondary"
          >
            <span className="sr-only">Cargando...</span>
          </Spinner>
          <p className="textSpinner">Cargando...</p>
        </div>
      ) : (
        <ItemList items={items} />
      )}
    </Container>
  );
};
