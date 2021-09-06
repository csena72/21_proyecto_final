import { useEffect, useState } from "react";
import { GetProducts } from "../../api/GetProducts";
import { DeleteProducts } from "../../api/DeleteProduct";
import { Link } from "react-router-dom";
import { Row, Col, Image, Button, Table } from "react-bootstrap";
import { MdDelete, MdEdit, MdAdd } from "react-icons/md";
import Swal from "sweetalert2";


const ProductsTable = () => {

  const [items, setItems] = useState([]);  

  useEffect(() => {
    GetProducts()
      .then((items) => {        
        setItems(items);
        console.log(items)
      })
      .catch((error) => {
        console.log("Error searching items", error);
      })
  }, [setItems]);


  const removeProduct = (id) => {    
    DeleteProducts(id).then((resp) => {
      Swal.fire({
        title: `El producto se eliminó con éxito!`,        
        icon: "success",
        confirmButtonText: "Aceptar",
      });
      document.getElementById(id).remove();
    });
  };

  const editProduct = (id) => {
    console.log(id);
  };

  return (
    <>
      <Row
        style={{
          margin: "5em 5em 2em 5em",
          borderBottom: "1px solid",
          color: "#e5e5e5",
        }}
      >
        <Col>
          <h1 style={{ color: "#212529" }}>Productos</h1>
        </Col>
      </Row>
      <Row style={{ margin: "0 5em" }}>
        <Col>
          <Link to={"/addProduct"} className="abtn">
            <Button variant="success" size="sm" className="float-right">
              Agregar producto <MdAdd />
            </Button>
          </Link>
        </Col>
      </Row>
      <Row style={{ margin: "1em 5em 2em 5em" }}>
        <Col>
          <Table responsive size="sm">
            <thead>
              <tr className="no-border">
                <th className="align-middle text-center">Imagen</th>
                <th className="align-middle">Nombre</th>
                <th className="align-middle">Descripción</th>
                <th className="align-middle">Código</th>
                <th className="align-middle text-center">Precio</th>
                <th className="align-middle text-center">Stock</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
            {items.map((item, index) => (
              <tr key={index} id={item.id}>
                <td>
                  <Image
                    className="mx-auto d-block"
                    width="80px"
                    src={`/assets/img/${item.image}`}
                  />
                </td>
                <td className="align-middle">{item.title}</td>
                <td className="align-middle">{item.description}</td>
                <td className="align-middle">{item.code}</td>
                <td className="align-middle text-right">{item.price}</td>
                <td className="align-middle text-right">{item.stock}</td>
                <td className="align-middle">
                  <Button
                    variant="success"
                    size="sm"
                    onClick={() => editProduct(item.id)}
                  >
                    <MdEdit />
                  </Button>
                </td>
                <td className="align-middle">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => removeProduct(item.id)}
                  >
                    <MdDelete />
                  </Button>
                </td>
              </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>      
    </>
  );
};

export default ProductsTable;
