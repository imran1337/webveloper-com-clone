import React from "react";

const UsedTools = () => {
  return (
    <section className="text-center border-top" style={{ marginTop: "200px" }}>
      <h2 style={{ color: "#123466" }} className="mt-4">
        Tools For Everything Your Business Does
      </h2>
      <h3 className="gray_color mb-5 py-2">All in one place. All in sync.</h3>
      <div className="container">
        <img
          src="https://assets.webveloper.com/WVTools.svg"
          alt="tools"
          className="img-fluid"
        />
      </div>

      <div className="mt-5 pt-5">
        <h2>Pricing</h2>
        <h3 className="gray_color mb-5 py-2">
          Transparent pricing. No hidden fees, no contracts, no commitment.
        </h3>
        <div className="container">
          <img
            src="https://assets.webveloper.com/PricingGraphic.svg"
            alt="pricing"
          />
        </div>
      </div>
    </section>
  );
};

export default UsedTools;
