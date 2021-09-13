import React from "react";
import LightLogo from "../Logo/LightLogo";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-objects d-flex justify-content-between mt-4">
          <div className="col">
            <div className="footer-logo">
              <LightLogo />
            </div>
          </div>
          <div className="col footer-links">
            <div className="footer-links-group">
              <a href="www.google.com" className="text-capitalize one">
                {" "}
                investment
              </a>
            </div>
            <div className="footer-links-group">
              <a href="www.google.com" className="text-capitalize mt-4">
                {" "}
                Policy
              </a>
            </div>
          </div>
          <div className="col footer-links">
            <div className="footer-links-group">
              <a href="www.google.com" className="text-capitalize one">
                {" "}
                companies{" "}
              </a>
            </div>
            <div className="footer-links-group">
              <a href="www.google.com" className="text-capitalize mt-4">
                {" "}
                contact us
              </a>
            </div>
          </div>
          <div className="col footer-links">
            <div className="footer-links-group">
              <a href="www.google.com" className="text-uppercase one">
                faqs
              </a>
            </div>
            <div className="footer-links-group">
              <a href="www.google.com" className="text-capitalize mt-4 help">
                {" "}
                help
              </a>
            </div>
          </div>
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
          impedit consequatur ullam eaque! A repellendus porro optio eos impedit
          assumenda, saepe fuga sapiente deleniti id corrupti quae dolores natus
          veritatis omnis facilis velit doloremque voluptate sed. Et corrupti
          suscipit optio, aperiam harum magni, quos quisquam, blanditiis itaque
          quibusdam tempora tenetur!
        </p>
      </div>
    </div>
  );
};

export default Footer;
