import "../Home/Home.scss"
import {GrInstagram, GrLinkedin } from "react-icons/gr"
import {BsWhatsapp, BsGithub} from "react-icons/bs"
import {TfiEmail} from "react-icons/tfi"
import {FaMobileAlt} from "react-icons/fa"


export default function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
      <div className="home-img ">
        <img  src="kn2.JPG" alt=""/>
        <div className="links">
        <div className="headings">
            <h2>Yama Kalyan</h2>
            <div className="animation-text">
            <span className="im-text">Im a </span>
            <span className="dev-text">Full-stack Devoloper</span>
            </div>
          </div>
          <div>

          <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/beautifulmind_00?igshid=NGExMmI2YTkyZg==">
          <span><GrInstagram/></span>
          </a>
        <a target="_blank" rel="noopener noreferrer" href="https://wa.me/9550049382">
          <span><BsWhatsapp/></span>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/yamakalyan">
        <span><BsGithub/></span>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/yama-kalyan-821360266">
        <span><GrLinkedin/></span>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="mailto:yamakalyan6@gmail.com">
        <span><TfiEmail/></span>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="tel:9550049382">
        <span><FaMobileAlt/></span>
          </a>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
