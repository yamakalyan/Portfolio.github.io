import { NavLink } from "react-router-dom";
import { GrInstagram, GrLinkedin } from "react-icons/gr";
import { BsWhatsapp, BsGithub } from "react-icons/bs";
// import {FaLocationCrosshairs} from "react-icons/fa"
import { TfiEmail } from "react-icons/tfi";
import { FaMobileAlt } from "react-icons/fa";

export default function HomeLatest() {
  return (
    <div>
      <div id="home-latest">
        <div className="header">
          <div className="logo">
            <span>YAMA KALYAN</span>
          </div>
          <nav className="navbar">
            <ul className="ul">
              <li className="list">
                <a href="#services">Services</a>
              </li>
              <li className="list">
                <a href="#about">About</a>
              </li>
              <li className="list">
                <a href="#skills">Skills</a>
              </li>
              <li className="list">
                <a href="#projects">Projects</a>
              </li>
              <li className="list">
                <a href="#resume">Resume</a>
              </li>
              <li className="list">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="home-latest-content">
          <div className="text-home">
            <h1>Full-stack devoloper</h1>
          </div>
          <div className="img-home">
            <img src="bg-img3.png" />
          </div>
          <div className="header">
            <div className="logo">
              <div className="right">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://instagram.com/beautifulmind_00?igshid=NGExMmI2YTkyZg=="
                >
                  <span>
                    <GrInstagram />
                  </span>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://wa.me/9550049382"
                >
                  <span>
                    <BsWhatsapp />
                  </span>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/yamakalyan"
                >
                  <span>
                    <BsGithub />
                  </span>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/yama-kalyan-821360266"
                >
                  <span>
                    <GrLinkedin />
                  </span>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:yamakalyan6@gmail.com"
                >
                  <span>
                    <TfiEmail />
                  </span>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="tel:9550049382"
                >
                  <span>
                    <FaMobileAlt />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
