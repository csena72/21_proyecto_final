import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { ItemDetail } from "./ItemDetail";
import { GetProductos } from "../helpers/GetProductos";

import { Spinner } from "react-bootstrap";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const history = useHistory();
  const [item, setItem] = useState([]);
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    GetProductos(id)
      .then((items) => {        
        setItem(items[0]);      
      })
      .catch((error) => {
        console.log("Error searching items", error);
      })
      .finally(() => {
        setIsLoad(false);
      });
  }, [id, history]);

  return (
    <>
      {isLoad && (
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
      )} 
      { !item.length &&(
        <div>
          <h2>Detalle del producto {id}</h2>
          <ItemDetail key={item.id} item={item} />
        </div>
      )}
    </>
  );
};
