import { CartWidget } from "./CartWidget";

import {
  Navbar,
  Nav,
  NavDropdown,
  Image,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

export const NavBar = () => {

  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
        <Navbar.Brand href="/home">
          <Image src={"/logo.png"} />
          TiendaNet
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <NavDropdown title="Mi perfil" id="basic-nav-dropdown">
                <NavDropdown.Item href="/userEdit">
                  Editar
                </NavDropdown.Item>
                <NavDropdown.Item href="http://localhost:8080/logout">
                  Salir
                </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Administrar" id="basic-nav-dropdown">
                <NavDropdown.Item href="/productList">
                  Productos
                </NavDropdown.Item>
                <NavDropdown.Item href="/usersList">
                  Usuarios
                </NavDropdown.Item>
          </NavDropdown>

            <Nav.Link href="/help">Ayuda</Nav.Link>
            <CartWidget />
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
            <Button variant="outline-info">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
