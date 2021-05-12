import React from "react";
import "./HomeBanner.css";
import bannerVideo from "./../../resources/HomepageVideoSD.mp4";
import bannerPoster from "./../../resources/videoPoster.png";
const HomeBanner = () => {
  return (
    <section className="banner">
      <video
        className="bannerVideo"
        poster={bannerPoster}
        preload="none"
        loop
        autoPlay
      >
        <source src={bannerVideo} type="video/mp4"></source>
        Your browser does not support the video tag.
      </video>
      <div className="banner_content">
        <h1 className="banner_header display-3 m-2">
          Our Technology,
          <br />
          Your Competitive Advantage.
        </h1>
        <h3 className="banner_text">
          Fill in a quick form about your business and <br /> we will generate a preview of your new website.
        </h3>
      </div>
    </section>
  );
};

export default HomeBanner;
