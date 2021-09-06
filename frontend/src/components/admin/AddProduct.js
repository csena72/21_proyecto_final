import React from "react";
import { Row, Col } from "react-bootstrap";
import { FormProduct } from "./FormProduct";

export const AddProduct = () => {
  return (
    <Row style={{ margin: "5em", borderBottom: "1px solid" }}>
      <Col>
        <h1>Agregar Producto</h1>
        <FormProduct />
      </Col>
    </Row>
  );
};