import React from "react";

const Partners = () => {
  return (
    <section
      className="text-center container-fluid"
      style={{ marginTop: "10px" }}
    >
      <h5>Our Partners</h5>
      <p className="gray_color">
        We work with the best, because your business deserves the best.
      </p>
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        <img
          style={{ maxWidth: "186px", maxHeight: "60px" }}
          className="img-fluid"
          src="https://assets.webveloper.com/GoogleAnalyticsLogo.png"
          alt="googleAnalytics"
        />
        <img
          style={{ maxWidth: "186px", maxHeight: "60px" }}
          className="img-fluid"
          src="https://assets.webveloper.com/GoogleCloudLogo.png"
          alt="googleCloudPlatForm"
        />
      </div>
    </section>
  );
};

export default Partners;
