import React from "react";
import { Row, Col } from "react-bootstrap";

export const LoginError = () => {
  return (
    <Row style={{ margin: "5em", borderBottom: "1px solid" }}>
      <Col>
        <div className="container text-center my-3">
          <div
            className="jumbotron border border-secondary rounded"
          >
            <h1>USER ERROR LOGIN</h1>

            <button
              className="btn btn-secondary my-5"
            >
              <a href="/" className="btn btn-white btn-outline-white text-white">
                VOLVER
              </a>
            </button>
          </div>
        </div>
      </Col>
    </Row>
  );
};
