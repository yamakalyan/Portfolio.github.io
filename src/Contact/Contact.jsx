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
          <h2><span><i className="bi bi-geo-fill"></i></span> Location :</h2>
          <p className="text">3-6-497, Near brand factory, Himayat nagar, Hyderabad, TS, India, 500029.</p>
          </div>
        </div>
        <div className="personal">
          {/* <h1><GrLocation/></h1> */}
          <div className="personal-info">
          <h2><span><i className="bi bi-envelope-at"></i></span> Email :</h2>
          <p className="text"><a href="mailto:yamakalyan6@gmail.com">yamakalyan6@gmail.com</a></p>
          </div>
        </div>
        <div className="personal">
          {/* <h1><GrLocation/></h1> */}
          <div className="personal-info">
          <h2><span><i className="bi bi-phone"></i></span> Mobile :</h2>
          <p className="text"><a href="tel:+91 9550049382">+91 9550049382</a></p>
          </div>
        </div>
        </div>

      </div>
        <div className="forms">
      <form onSubmit={handleEmailCall}>
        <div  className="email">
            {/* <label>Enter your name</label><br/><br/> */}
      <input type="text"  onChange={(e)=>setName(e.target.value)} required placeholder="Enter your name"/>
          </div>
        <div  className="email">
            {/* <label>Enter your Mobile</label><br/><br/> */}
      <input type="text" onChange={(e)=>setMobile(e.target.value)} required placeholder="Enter your mobile"/>
          </div>
        <div  className="email">
            {/* <label>Enter your Email </label><br/><br/> */}
      <input type="email"  onChange={(e)=>setEmail(e.target.value)} required placeholder="Enter your @gmail"/>
          </div>
    
          <div  className="textarea">
          {/* <label>Enter Message</label><br/><br/> */}
      <textarea type="text" rows="10" required onChange={(e)=>setMessage(e.target.value)} placeholder="Enter your message here"/>
          </div>
          <div className="btn-div">
      <button type="submit" className={success ? "btn-success" : "btn"}>{ success ? "Success" : "Submit"} </button>
          </div>
      </form>
            <p style={{textAlign : "center", color : "#51e86a"}}> {success && "I'll Contact You ASAP"}</p>
        </div>
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
    <p>© Copyright Yama Kalyan.</p>
      </div>
      </div>
    </div>
      
    </div>
  )
}
