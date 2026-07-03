import React, { useState } from "react";


import {
  FaHome,
  FaBookOpen,
  FaChartLine,
  FaImages,
  FaCalendarAlt,
  FaBlog,
  FaHandsHelping,
  FaFolderOpen,
  FaPhoneAlt,
  FaUser,
  FaChevronRight,
  FaGraduationCap,
  FaFemale,
  FaLaptopCode,
  FaAward,
  FaBookReader,
  FaHeart,
} from "react-icons/fa";

import logo from "../assets/logo.png";

function MegaMenu() {
  const [showPrograms, setShowPrograms] = useState(true);

  const programs = [
    {
      icon: <FaGraduationCap />,
      title: "Free Education",
      desc: "Quality education for underprivileged children",
    },
    {
      icon: <FaFemale />,
      title: "Women Education",
      desc: "Empowering women through education",
    },
    {
      icon: <FaLaptopCode />,
      title: "Skill Development",
      desc: "Vocational & employment training",
    },
    {
      icon: <FaLaptopCode />,
      title: "Digital Literacy",
      desc: "Computer & internet education",
    },
    {
      icon: <FaAward />,
      title: "Scholarship Program",
      desc: "Financial support for deserving students",
    },
    {
      icon: <FaBookReader />,
      title: "Library Project",
      desc: "Books and digital learning resources",
    },
  ];

  return (
    <section className="mega-wrapper">

      <div className="container">

        <div className="row">

          {/* ================= LEFT DESKTOP ================= */}

          <div className="col-lg-7">

            <h2 className="demo-heading">
              Desktop Mega Menu
            </h2>

            <div className="mega-menu-box">

              <div className="triangle"></div>

              <div className="menu-left">

                {programs.map((item, index) => (

                  <div className="menu-item" key={index}>

                    <div className="menu-icon">
                      {item.icon}
                    </div>

                    <div>

                      <h4>{item.title}</h4>

                      <p>{item.desc}</p>

                    </div>

                  </div>

                ))}

              </div>



            </div>

          </div>
                    {/* ================= MOBILE MENU ================= */}

          <div className="col-lg-5">

            <h2 className="demo-heading">
              Mobile Menu
            </h2>

            <div className="mobile-menu">

              {/* Header */}

              <div className="mobile-header">

                <div className="mobile-logo">

                  <img
                    src={logo}
                    alt="Logo"
                  />

                  <div>

                    <h3>SANSKRITI</h3>

                    <span>SANSKAR PATHSHALA</span>

                  </div>

                </div>

                <button className="close-btn">
                  ✕
                </button>

              </div>

              {/* Menu */}

              <ul className="mobile-list">

                <li className="active">
                  <div>
                    <FaHome />
                    Home
                  </div>
                </li>

                <li>
                  <div>
                    <FaBookOpen />
                    About Us
                  </div>

                  <FaChevronRight />
                </li>

                <li>
                  <div>
                    <FaGraduationCap />
                    Our Programs
                  </div>

                  <FaChevronRight />
                </li>

                <li>
                  <div>
                    <FaChartLine />
                    Our Impact
                  </div>

                  <FaChevronRight />
                </li>

                <li>
                  <div>
                    <FaImages />
                    Gallery
                  </div>
                </li>

                <li>
                  <div>
                    <FaCalendarAlt />
                    Events
                  </div>
                </li>

                <li>
                  <div>
                    <FaBlog />
                    Blog
                  </div>
                </li>

                <li>
                  <div>
                    <FaHandsHelping />
                    Get Involved
                  </div>

                  <FaChevronRight />
                </li>

                <li>
                  <div>
                    <FaFolderOpen />
                    Resources
                  </div>

                  <FaChevronRight />
                </li>

                <li>
                  <div>
                    <FaPhoneAlt />
                    Contact Us
                  </div>
                </li>

              </ul>

              {/* Footer */}

              <div className="mobile-footer">

                <button className="member-login">

                  <FaUser />

                  Member Login

                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default MegaMenu;