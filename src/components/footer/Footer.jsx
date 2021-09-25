import React from "react";
import LightLogo from "../Logo/LightLogo";
import "./Footer.css";
import Icons from '../icons/Icons'

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
            <div className="footer-links-group">
              <a href="www.google.com" className="text-capitalize one">
                {" "}
                investment
              </a>
            </div>
            <div className="footer-links-group">
              <a href="www.google.com" className="text-capitalize mt-4">
                {" "}
                Privacy Policy
              </a>
            </div>
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
        <div className="mobile-view">
          <Icons />
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
