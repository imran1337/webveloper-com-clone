import React from "react";
import "./BannerTwo.css";
const BannerTwo = () => {
  return (
    <section className="banner_2 d-flex justify-content-center align-items-center text-white text-center">
      <div className="">
        <h2>Easily start and run your business with Webveloper</h2>
        <p>
          Webveloper's end-to-end solution puts you lightyears ahead of your
          competitors.
        </p>
        <button className="base_btn" style={{ padding: "10px 26px" }}>
          GET STARTED
        </button>
      </div>
    </section>
  );
};

export default BannerTwo;
