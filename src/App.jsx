import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import "./App.scss";
import ScrollTopBtn from "./ScrollTop/ScrollTopBtn";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Skills from "./Skills/Skills";
import ProjectRoute from "./Projects/ProjectRoute";
import AboutRoute from "./About/AboutRoute";
import Services from "./Services/Services";

import Website from "./Services/Sub-folders/Website/Website"
import Adv from "./Services/Sub-folders/Adv/Adv"
import Digital from "./Services/Sub-folders/Digital/Digital"
import Logo from "./Services/Sub-folders/Logo/Logo"
import HomeLatest from "./Home/HomeLatest";

function App() {
  const [bgColor, setBgColor] = useState(false);

  const handleBgColor = () => {
    const scroll = document.documentElement.scrollTop;

    if (scroll > 1000) {
      setBgColor(true);
      if (scroll > 4000) {
        setBgColor(false);
      }
    } else if (scroll < 1000) {
      setBgColor(false);
    }
  };
  useEffect(() => {
    if (bgColor) {
      document.body.style.background = "black";
      document.body.style.color = "white";
      document.body.style.scrollBehavior = "smooth";
      document.body.style.transition = "0.5s";
    } else {
      document.body.style.background = "white";
      document.body.style.color = "black";
      document.body.style.scrollBehavior = "smooth";
      document.body.style.transition = "0.5s";
    }
  }, [handleBgColor]);

  window.addEventListener("scroll", handleBgColor);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home colorChange={bgColor} />} />
          <Route path="/home" element={<HomeLatest/>}/>

          {/* services links */}
          <Route path="/digital" element={<Digital />} />
          <Route path="/Adv" element={<Adv />} />
          <Route path="/logo" element={<Logo />} />
          <Route path="/websites" element={<Website />} />

          {/* Full page routes */}
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/about" element={<AboutRoute />}/>
          <Route path="/projects" element={<ProjectRoute />}/>

        </Routes>
        <Contact />
        <ScrollTopBtn />
      </Router>
    </>
  );
}

export default App;
