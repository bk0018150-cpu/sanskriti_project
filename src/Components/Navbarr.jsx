import React from "react";
import {
  FaHome,
  FaUser,
  FaChevronDown,
} from "react-icons/fa";



function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">

      <div className="container-fluid">

        <button
          className="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarContent"
        >

          <ul className="navbar-nav me-auto">

            <li className="nav-item">
              <a className="nav-link active-nav" href="#">
                <FaHome className="me-2" />
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>

            <li className="nav-item dropdown">

              <a className="nav-link dropdown-toggle" href="#">
                Our Programs
              </a>

            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#">
                Our Impact
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Gallery
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Events
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Blog
              </a>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#">
                Get Involved
              </a>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#">
                Resources
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>

          </ul>

          <button className="member-btn">

            <FaUser className="me-2" />

            Member Login

          </button>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;