import "../Contact/Contact.scss"
import {GrInstagram, GrLinkedin } from "react-icons/gr"
import {BsWhatsapp, BsGithub} from "react-icons/bs"
// import {FaLocationCrosshairs} from "react-icons/fa"
import {TfiEmail} from "react-icons/tfi"
import {FaMobileAlt} from "react-icons/fa"

import emailjs from "@emailjs/browser"
import { useState } from "react"


export default function Contact() {
  const [success, setSuccess] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [mobile, setMobile] = useState('')
  const [message, setMessage] = useState("")

  const handleEmailCall = async(e)=>{
    e.preventDefault()

    await  emailjs.send("service_pzyi7fb","template_vxdxsi6",{
      from_name: name,
      from_mobile: mobile,
      from_email: email,
      message: message,
      }, "b_nBUkZl0EkDLLatq").then(res =>{
        console.log(res.text)
        setSuccess(true)
      }, (error)=>{
        console.log(error.text)
      })
    }

  return (
    <div className="contact" id="contact">
      <div className="contact-content">
    <h1 style={{textAlign : "center"}}>Contact Me</h1>
    <div className="contact-me">
      <div className="details">
        <div>
        <div className="personal">
          {/* <h1><FaLocationCrosshairs /></h1> */}
          <div className="personal-info">
          <h2>Present location :</h2>
          <p className="text">3-6-497, Near brand factory, Himayat nagar, Hyderabad, TS, India, 500029.</p>
          </div>
        </div>
        <div className="personal">
          {/* <h1><GrLocation/></h1> */}
          <div className="personal-info">
          <h2>Permanent Address :</h2>
          <p className="text">6-1, Sunket, Morthad, Nizamabad, TS, India, 503225.</p>
          </div>
        </div>
        <div className="personal">
          {/* <h1><GrLocation/></h1> */}
          <div className="personal-info">
          <h2>Email & Mobile :</h2>
          <p className="text">yamakalyan6@gmail.com</p>
          <p className="text">+91 9550049382</p>
          </div>
        </div>
        </div>

      </div>
      <form onSubmit={handleEmailCall}>
        <div className="forms">
        <div  className="mobile">
            <label>Enter your name</label><br/><br/>
      <input type="text" size="40" onChange={(e)=>setName(e.target.value)} required placeholder="Enter your name"/>
          </div>
        <div  className="email">
            <label>Enter your Mobile</label><br/><br/>
      <input type="text" size="40" onChange={(e)=>setMobile(e.target.value)} required placeholder="Enter your mobile"/>
          </div>
        <div  className="email">
            <label>Enter your Email </label><br/><br/>
      <input type="email" size="40" onChange={(e)=>setEmail(e.target.value)} required placeholder="Enter your @gmail"/>
          </div>
    
          <div  className="textarea">
          <label>Enter Message</label><br/><br/>
      <textarea type="text" cols="40" rows="8" required onChange={(e)=>setMessage(e.target.value)} placeholder="Enter your message here"/>
          </div>
          <div className="btn-div">
      <button type="submit" className={success ? "btn-success" : "btn"}>{ success ? "Success" : "Submit"} </button>
          </div>
        </div>
            <p style={{textAlign : "center", color : "#51e86a"}}> {success && "I'll Contact You ASAP"}</p>
      </form>
    </div>
    <div className="contact-list">
      <div className="right">
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
      <div className="left">
    <p>© Copyright Yama Kalyan. All Rights Reserved</p>
      </div>
      </div>
    </div>
      
    </div>
  )
}
