import React from "react";
import { Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { FormProduct } from "./FormProduct";
import { GetProducts } from "../../api/GetProducts";
import { AddProducts } from "../../api/AddProducts"; 
import { UpdateProduct } from "../../api/updateProduct"; 

import Swal from "sweetalert2";


export const AddProduct = (props) => {

  const productId = props?.match?.params?.id;
  const isEdit= Boolean(productId);
  const history = useHistory();  

  const [product, setProduct ] = React.useState(null);

  const addProductHandle = (data) => {
    AddProducts(data).then((resp) => {
      Swal.fire({
        title: `Producto agregado con éxito!`,        
        icon: "success",
        confirmButtonText: "Aceptar",
      }).then((result) => {        
        if (result.isConfirmed) {
          history.push('/productList');
        }
      })      
    });    
  }

  const editProductHandle = (data) => {
    UpdateProduct(productId,  data).then((resp) => {
      Swal.fire({
        title: `Producto editado con éxito!`,        
        icon: "success",
        confirmButtonText: "Aceptar",
      }).then((result) => {        
        if (result.isConfirmed) {
          history.push('/productList');
        }
      })       
    });    
  } 

  React.useEffect(() => {
    if(!productId){
      return ;
    }

    const fetch=async()=>{
      try{
        const resp = await GetProducts(productId)
        setProduct(resp)
      }catch(err){
        console.log(err)
      }      
    }
    fetch();
  }, [productId]);

  return (
    <Row style={{ margin: "5em", borderBottom: "1px solid" }}>
      <Col>
        <h1>{ productId ? 'Editar Producto' : 'Agregar Producto'}</h1>
        <FormProduct defaultValues={product}  onClick={isEdit ? editProductHandle : addProductHandle} isEdit={isEdit}/>
      </Col>
    </Row>
  );
};