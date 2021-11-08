import React from "react";
import { Row, Col } from "react-bootstrap";

export const Register = () => {
  return (
    <Row style={{ margin: "5em" }}>
      <Col>
        <section class="ftco-section">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-8 col-lg-8">
                <div class="wrap">
                  <div class="text-wrap p-2 p-lg-2 text-center d-flex align-items-center order-md-last">
                    <div class="text w-100 border border-secondary rounded">
                      <h2>Bienvenido</h2>
                      <p>¿Ya tienes una cuenta?</p>
                      <a href="/" class="btn btn-white btn-outline-white">
                        Iniciar sesión
                      </a>
                    </div>
                  </div>
                  <div class="login-wrap p-2 p-lg-2">
                    <div class="d-flex">
                      <div class="w-100">
                        <h3 class="mb-4">Registrarse</h3>
                      </div>
                    </div>
                    <form action="http://localhost:8080/register" method="post" class="signin-form">
                      <div class="form-group mb-2">
                        <label class="label m-1" for="username">
                          Usuario
                        </label>
                        <input
                          type="text"
                          name="username"
                          class="form-control"
                          placeholder="Usuario"
                          required
                        />
                      </div>
                      <div class="form-group mb-2">
                        <label class="label m-1" for="password">
                          Contraseña
                        </label>
                        <input
                          type="password"
                          name="password"
                          class="form-control"
                          placeholder="Contraseña"
                          required
                        />
                      </div>
                      <div class="form-group mb-2">
                        <label class="label m-1" for="name">
                          Nombre
                        </label>
                        <input
                          type="text"
                          name="name"
                          class="form-control"
                          placeholder="Nombre"
                          required
                        />
                      </div>
                      <div class="form-group mb-2">
                        <label class="label m-1" for="address">
                          Dirección
                        </label>
                        <input
                          type="text"
                          name="address"
                          class="form-control"
                          placeholder="Dirección"
                          required
                        />
                      </div>
                      <div class="form-group mb-2">
                        <label class="label m-1" for="email">
                          e-mail
                        </label>
                        <input
                          type="text"
                          name="email"
                          class="form-control"
                          placeholder="e-mail"
                          required
                        />
                      </div>
                      <div class="form-group mb-2">
                        <label class="label m-1" for="age">
                          Edad
                        </label>
                        <input
                          type="text"
                          name="age"
                          class="form-control"
                          placeholder="Edad"
                          required
                        />
                      </div>
                      <div class="form-group mb-2">
                        <label class="label m-1" for="phone">
                          Teléfono
                        </label>
                        <input
                          type="text"
                          name="phone"
                          class="form-control"
                          placeholder="Teléfono"
                          required
                        />
                      </div>
                      <div class="form-group mb-2">
                        <label class="label m-1" for="picture">
                          Foto
                        </label>
                        <input
                          type="text"
                          name="picture"
                          class="form-control"
                          placeholder="Foto"
                          required
                        />
                      </div>
                      <div class="form-group">
                        <button
                          type="submit"
                          class="form-control btn btn-secondary submit px-3"
                        >
                          Registrarse
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Col>
    </Row>
  );
};
