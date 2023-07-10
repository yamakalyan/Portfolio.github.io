import "../Home/Home.scss";
import { GrInstagram, GrLinkedin } from "react-icons/gr";
import { BsWhatsapp, BsGithub } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { FaMobileAlt } from "react-icons/fa";
import Services from "../Services/Services";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Project from "../Projects/Project";
import Resume from "../Resume/Resume";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Home(props) {
  const [homeLatest, setHomeLatest] = useState(false);

  const consultationLink = "https://www.buymeacoffee.com/yamakalyan";

  const handleConsultation = () => {
    window.open(consultationLink, "_blank");
  };
  return (
    <section className="home" id="home">
      {homeLatest ? (
        <>
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
        </>
      ) : (
        <>
          <div className="home-content">
            <div className="home-img ">
              {/* <img  src="kn2.JPG" alt=""/> */}
              <div className="links">
                <div className="headings">
                  <h2>Yama Kalyan</h2>
                  <div className="animation-text">
                    <span className="im-text">Im a </span>
                    <span className="dev-text">Full-stack Devoloper</span>
                  </div>
                </div>
                <div className="social-links">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: props.colorChange ? "white" : "black" }}
                    href="https://instagram.com/beautifulmind_00?igshid=NGExMmI2YTkyZg=="
                  >
                    <span>
                      <GrInstagram />
                    </span>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: props.colorChange ? "white" : "black" }}
                    href="https://wa.me/9550049382"
                  >
                    <span>
                      <BsWhatsapp />
                    </span>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: props.colorChange ? "white" : "black" }}
                    href="https://github.com/yamakalyan"
                  >
                    <span>
                      <BsGithub />
                    </span>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: props.colorChange ? "white" : "black" }}
                    href="https://www.linkedin.com/in/yama-kalyan-821360266"
                  >
                    <span>
                      <GrLinkedin />
                    </span>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: props.colorChange ? "white" : "black" }}
                    href="mailto:yamakalyan6@gmail.com"
                  >
                    <span>
                      <TfiEmail />
                    </span>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: props.colorChange ? "white" : "black" }}
                    href="tel:9550049382"
                  >
                    <span>
                      <FaMobileAlt />
                    </span>
                  </a>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <button
                    className="btn-consultation"
                    onClick={handleConsultation}
                  >
                    Get consultation !
                  </button>
                  <button
                    className="btn-consultation"
                    onClick={() => (window.location.href = "#contact")}
                  >
                    Lets talk !
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <Services colorChange={props.colorChange} />
      <About />
      <Skills />
      <Project />
      <Resume />
    </section>
  );
}
