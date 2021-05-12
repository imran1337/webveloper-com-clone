import React from "react";
import "./Information.css";
const Information = () => {
  return (
    <section id="overview" className="text-center info_bg">
      <div className="container pt-5">
        <h1 className="my-5">
          The Most Beautiful Website In Your Industry Formatted Across All
          Devices
        </h1>
        <img
          className="img-fluid"
          src="https://assets.webveloper.com/Macbook-Iphone-LawyerSite.png"
          alt="lawyerSuite"
        />
        <hr className="d-block my-5" />
        <h1>The Dashboard</h1>
        <h3>Your Business</h3>
        <h3>Control Center</h3>
        <img
          className="img-fluid mt-5"
          src="https://assets.webveloper.com/iMacDashboard.png"
          alt="dashboard"
        />

        <div className="card_img">
          <img
            className="img-fluid"
            src="https://assets.webveloper.com/cards.svg"
            alt="cards"
          />
        </div>
      </div>
    </section>
  );
};

export default Information;
