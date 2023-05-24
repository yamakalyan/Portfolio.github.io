import "../Contact/Contact.scss"
import {GrInstagram, GrLinkedin } from "react-icons/gr"
import {BsWhatsapp, BsGithub} from "react-icons/bs"
import {TfiEmail} from "react-icons/tfi"
import {FaMobileAlt} from "react-icons/fa"
export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="contact-content">
    <h1>Contact Me</h1><hr/>
    <div className="contact-me">
      <form>
        <div className="forms">
          <div  className="email">
            <label>Enter your email</label><br/><br/>
      <input type="text" size="50" placeholder="Enter your Email"/>
          </div>
          <div  className="textarea">
          <label>Enter Message</label><br/><br/>
      <textarea type="text" cols="48" rows="10" placeholder="Enter your message here"/>
          </div>
          <div className="btn-div">
      <button className="btn">Submit</button>
          </div>
        </div>
      </form>
    </div>
    <div className="contact-list">
      <div className="right">
        <span><GrInstagram/></span>
        <span><BsWhatsapp/></span>
        <span><BsGithub/></span>
        <span><GrLinkedin/></span>
        <span><TfiEmail/></span>
        <span><FaMobileAlt/></span>
      </div>
      <div className="left">
    <p>© Copyright Yama Kalyan. All Rights Reserved</p>
      </div>
      </div>
    </div>
      
    </div>
  )
}
