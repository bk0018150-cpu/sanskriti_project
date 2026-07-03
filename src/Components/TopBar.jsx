import React from "react";


const TopBar = () => {
  return (
    <div className="sev-top-header">
      <div className="sev-top-container">
        <div className="sev-top-left">
          <a href="mailto:info@sanskritipathshala.org">
            <i className="bi bi-envelope-fill"></i>
            <span>info@sanskritipathshala.org</span>
          </a>

          <div className="sev-divider"></div>

          <a href="tel:+911234567890">
            <i className="bi bi-telephone-fill"></i>
            <span>+91 12345 67890</span>
          </a>

          <div className="sev-divider"></div>

          <div className="sev-location">
            <i className="bi bi-geo-alt-fill"></i>
            <span>Adarsh Gram, India</span>
          </div>
        </div>

        <div className="sev-top-right">
          <div className="sev-language">
            <a href="/">हिंदी</a>
            <span>|</span>
            <a href="/">English</a>
          </div>

          <a href="/login" className="sev-login">
            <i className="bi bi-person-fill"></i>
            Volunteer Login
          </a>

          <div className="sev-social">
            <a href="#">
              <i className="bi bi-facebook"></i>
            </a>

            <a href="#">
              <i className="bi bi-instagram"></i>
            </a>

            <a href="#">
              <i className="bi bi-youtube"></i>
            </a>

            <a href="#">
              <i className="bi bi-twitter-x"></i>
            </a>

            <a href="#">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
