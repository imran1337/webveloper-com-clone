import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mb-0">
      <ul
        className="d-flex p-2 justify-content-center align-items-center mb-0 pb-0"
        style={{ listStyle: "none" }}
      >
        <li>&copy; Webveloper {new Date().getFullYear()}</li>
        <li className="mx-2">
          <Link to="/#legal">Legal</Link>
        </li>
        <li className="mx-2">
          <Link to="/#terms">Terms</Link>
        </li>
        <li className="mx-2">
          <Link to="/#privacy">Privacy</Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;