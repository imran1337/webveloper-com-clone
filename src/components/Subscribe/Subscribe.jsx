import React from "react";
import { Form } from "react-bootstrap";

const Subscribe = () => {
  return (
    <section
      style={{ minHeight: "300px" }}
      className="bg-dark d-flex justify-content-center align-items-center"
    >
      <div className="container text-center text-white">
        <h2>Get Optimized With Webveloper.</h2>
        <div className="d-flex justify-content-center align-items-center mt-5">
          <Form.Control placeholder="email..." style={{ maxWidth: "360px" }} />
          <button
            className="base_btn"
            style={{ width: "180px", fontWeight: "bold" }}
          >
            Join Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
