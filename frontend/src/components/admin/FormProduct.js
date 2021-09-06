import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdDone, MdBackspace } from "react-icons/md";
import { Container } from "react-bootstrap";


export const FormProduct = ({ onHide, defaultValues,onClick ,isEdit }) => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {        
    onClick(data)
  };

React.useEffect(()=>{
  reset(defaultValues)
},[reset,defaultValues]);

  return (
    <Container fluid="lg">
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="formBasicNombre">
        <Form.Label>* Nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Micro Procesador Amd Ryzen 7 3800xt 4.7ghz"
          name="nombre"
          {...register("nombre", {
            required: {
              value: true,
              message: "Nombre es requerido",
            },
            maxLength: {
              value: 30,
              message: "No más de 30 carácteres!",
            },
            minLength: {
              value: 4,
              message: "Mínimo 4 carácteres",
            },
          })}
        />
        <Form.Text className="text-muted">
          <span className="text-danger d-block mb-2">
            {errors.nombre && errors.nombre.message}
          </span>
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicDescription">
        <Form.Label>* Descripción</Form.Label>
        <Form.Control
          type="text"
          placeholder="Amd Ryzen 7 3800XT 4.7 Ghz - AM4 Sin Video Sin Cooler"
          name="descripcion"
          {...register("descripcion", {
            required: {
              value: true,
              message: "El campo descripción es requerido",
            },
            maxLength: {
              value: 30,
              message: "No más de 30 carácteres!",
            },
            minLength: {
              value: 8,
              message: "Mínimo 8 carácteres",
            },
          })}
        />
        <Form.Text className="text-muted">
          <span className="text-danger d-block mb-2">
            {errors.descripcion && errors.descripcion.message}
          </span>
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicCodigo">
        <Form.Label>* Código</Form.Label>
        <Form.Control
          type="text"
          placeholder="AMD-5566"
          name="codigo"
          {...register("codigo", {
            required: {
              value: true,
              message: "El código del producto es requerido",
            },
            minLength: {
              value: 4,
              message: "Mínimo 4 dígitos",
            },
          })}
        />
        <Form.Text className="text-muted">
          <span className="text-danger d-block mb-2">
            {errors.codigo && errors.codigo.message}
          </span>
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicPrecio">
        <Form.Label>* Precio</Form.Label>
        <Form.Control
          type="text"
          placeholder="45300"
          name="precio"
          {...register("precio", {
            required: {
              value: true,
              message: "El precio del producto es requerido",
            },
            maxLength: {
              value: 8,
              message: "No más de 8 carácteres!",
            }
          })}
        />
        <Form.Text className="text-muted">
          <span className="text-danger d-block mb-2">
            {errors.precio && errors.precio.message}
          </span>
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicStock">
        <Form.Label>* Stock</Form.Label>
        <Form.Control
          type="text"
          placeholder="22"
          name="stock"
          {...register("stock", {
            required: {
              value: true,
              message: "El stock del producto es requerido",
            },
            maxLength: {
              value: 8,
              message: "No más de 2 dígitos!",
            },
          })}
        />
        <Form.Text className="text-muted">
          <span className="text-danger d-block mb-2">
            {errors.stock && errors.stock.message}
          </span>
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicFoto">
        <Form.Label>* Foto</Form.Label>
        <Form.Control
          type="text"
          placeholder="ryzen7.jpg"
          name="foto"
          {...register("foto", {
            required: {
              value: true,
              message: "La foto del producto es requerida",
            },
          })}
        />
        <Form.Text className="text-muted">
          <span className="text-danger d-block mb-2">
            {errors.foto && errors.foto.message}
          </span>
        </Form.Text>
      </Form.Group>
      <Link to={"/productList"} className="abtn">
        <Button className="float-left" type="submit" variant="success">
        <MdBackspace /> Volver
        </Button>
      </Link>
      <Button className="float-right" type="submit" variant="success">
        {isEdit?
        (<>Actualizar Producto <MdDone /></> ):
        (<>Agregar Producto <MdDone /></> ) 
        }
      </Button>
    </Form>
    </Container>
  );
};
