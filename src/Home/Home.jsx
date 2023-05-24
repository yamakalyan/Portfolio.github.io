import "../Home/Home.scss"
import {GrInstagram, GrLinkedin } from "react-icons/gr"
import {BsWhatsapp, BsGithub} from "react-icons/bs"
import {TfiEmail} from "react-icons/tfi"
import {FaMobileAlt} from "react-icons/fa"


export default function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <div className="left">
          <div className="left-headings">
            <h1>Yama Kalyan</h1>
            <p>web devoloper</p>
          </div>
          <div className="links">
        <span><GrInstagram/></span>
        <span><BsWhatsapp/></span>
        <span><BsGithub/></span>
        <span><GrLinkedin/></span>
        <span><TfiEmail/></span>
        <span><FaMobileAlt/></span>
          </div>
        </div>
        <div className="right">
          <img  src="kn.JPG" width="450px"/>
        </div>
      </div>
    </section>
  )
}
