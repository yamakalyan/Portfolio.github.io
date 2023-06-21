import About from "./About/About";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import Project from "./Projects/Project";
import Skills from "./Skills/Skills";
import "./App.scss";
import ScrollTopBtn from "./ScrollTop/ScrollTopBtn";
import { useEffect, useState } from "react";
import Resume from "./Resume/Resume";
import Services from "./Services/Services";

function App() {
   
  const [bgColor, setBgColor] = useState(false)


  const handleBgColor = ()=>{

    const scroll = document.documentElement.scrollTop

    if (scroll > 1000) {
      setBgColor(true)
      if (scroll > 3000) {
        setBgColor(false)
      }
    }
     else if(scroll < 1000){
      setBgColor(false)
    }
  }
  useEffect(()=>{

    if (bgColor) {
      document.body.style.background = "black"
      document.body.style.color = "white"
      document.body.style.scrollBehavior = "smooth"
      document.body.style.transition = "0.5s"
    } else {
      document.body.style.background = "white"
      document.body.style.color = "black"
      document.body.style.scrollBehavior = "smooth"
      document.body.style.transition = "0.5s"
    }
  }, [handleBgColor])

  window.addEventListener("scroll", handleBgColor)

  return (
    <>
        <Navbar />
        <Home colorChange={bgColor} />
        <Services/>
        <About />
        <Skills />
        <Project />
        <Resume/>
        <Contact />
        <ScrollTopBtn />
    </>
  );
}

export default App;
