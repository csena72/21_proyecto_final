import React from "react";
import { Row, Col } from "react-bootstrap";

export const Login = () => {
  return (
    <Row style={{ margin: "5em" }}>
      <Col>
        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-8">
                <div className="wrap d-md-flex">
                  <div className="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
                    <div className="text w-100">
                      <h2>Bienvenido</h2>
                      <p>¿No tenes una cuenta?</p>
                      <a
                        href="/register"
                        className="btn btn-white btn-outline-white"
                      >
                        Registrate
                      </a>
                    </div>
                  </div>
                  <div className="login-wrap p-4 p-lg-5">
                    <div className="d-flex">
                      <div className="w-100">
                        <h3 className="mb-4">Ingresar</h3>
                      </div>
                    </div>
                    <form action="http://localhost:8080/login" method="post" className="signin-form">
                      <div className="form-group mb-3">
                        <label className="label" for="username">
                          Usuario
                        </label>
                        <input
                          type="text"
                          name="username"
                          className="form-control"
                          placeholder="Usuario"
                          required
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label className="label" for="password">
                          Contraseña
                        </label>
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          placeholder="Contraseña"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <button
                          type="submit"
                          className="form-control btn btn-secondary submit px-3"
                        >
                          Iniciar sesión
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
