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
          Have you ever needed to make an investment decision but did not know
          where to look. Have you been curious about the true financial health
          of a business venture or fund. Look no further; the multivariate stop
          to financial choices and capital budgeting decisions is here
        </p>
      </div>
    </div>
  );
};

export default Footer;
