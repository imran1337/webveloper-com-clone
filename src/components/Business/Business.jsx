import React from "react";

const Business = ({ img, title, content, alt }) => {
  return (
    <div className="p-3 text-center col-12 col-md-4">
      <img
        src={img}
        alt={alt}
        className="img-fluid"
        style={{ maxWidth: "360px" }}
      />
      <h3 className="my-3">{title}</h3>
      <p className="gray_color">{content}</p>
    </div>
  );
};

export default Business;
