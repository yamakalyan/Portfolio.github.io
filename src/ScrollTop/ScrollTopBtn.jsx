import { useState } from "react"
import "../ScrollTop/ScroolBtn.scss"
import {BiArrowToTop} from "react-icons/bi"
export default function ScrollTopBtn() {
    const [active, setActive] = useState(false)

    const handleBtn =()=>{
        const scrolled = document.documentElement.scrollTop
        if (scrolled > 300) {
            setActive(true)
        } else if(scrolled <= 300){
            setActive(false)
        }
    }

    const scrollToTopaction =()=>{
        window.scrollTo({
            top : 0,
            behavior : "smooth"
        })
    }
    window.addEventListener("scroll", handleBtn)
  return (
    <div>
      <button onClick={scrollToTopaction} className="btn-scroll" style={{display : active ? "inline" : "none", bottom : "8%", borderRadius : "40%", fontSize : "22px"}}><BiArrowToTop/></button>
    </div>
  )
}
