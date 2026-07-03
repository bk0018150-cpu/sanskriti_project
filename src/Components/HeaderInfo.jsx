import {
  FaGraduationCap,
  FaUsers,
  FaMapMarkerAlt,
  FaHeart,
} from "react-icons/fa";

import logo from "../assets/logo.png";

export default function HeaderInfo() {
  return (
    <section className="headerBanner">
      <div className="bannerContainer">

        {/* Left Logo */}

        <div className="brand">
          <img src={logo} alt="logo" />

          <div className="brandText">
            <h1>SANSKRITI</h1>

            <h2>
              SANSKAR <span>PATHSHALA</span>
            </h2>
          </div>
        </div>

        <div className="divider"></div>

        {/* Stat 1 */}

        <div className="info">
          <div className="icon">
            <FaGraduationCap />
          </div>

          <div>
            <h3>Educating Children</h3>
            <p>Since 1997</p>
          </div>
        </div>

        <div className="divider"></div>

        {/* Stat 2 */}

        <div className="info">
          <div className="icon">
            <FaUsers />
          </div>

          <div>
            <h3>50,000+ Students</h3>
            <p>Empowered</p>
          </div>
        </div>

        <div className="divider"></div>

        {/* Stat 3 */}

        <div className="info">
          <div className="icon">
            <FaMapMarkerAlt />
          </div>

          <div>
            <h3>75+ Villages</h3>
            <p>Reached</p>
          </div>
        </div>

        {/* Button */}

        <button className="donateBtn">
          <FaHeart />
          Donate Now
        </button>
      </div>
    </section>
  );
}