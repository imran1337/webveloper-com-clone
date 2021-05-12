import React from "react";
import { Col, Row } from "react-bootstrap";

const BusinessOptimized = () => {
  return (
    <section
      className="d-flex justify-content-center align-items-center container-fluid"
      style={{ height: "300px" }}
    >
      <Row className="d-flex justify-content-center align-items-center">
        <Col xs={12} md={4} className="order-2 order-md-1">
          <h2 className="base_color">Your Business, Optimized.</h2>
          <p className="gray_color">
            Optimized for search engines. Optimized for efficiency. Optimized
            for customers. Optimized for you.
          </p>
        </Col>
        <Col xs={12} md={8} className="order-1 order-md-2">
          <img
            className="img-fluid mb-3"
            src="https://assets.webveloper.com/OptimizedDiagram.svg"
            alt="OptimizedDiagram"
          />
        </Col>
      </Row>
    </section>
  );
};

export default BusinessOptimized;
