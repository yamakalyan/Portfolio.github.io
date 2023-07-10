import { useEffect, useState } from 'react'
import '../Navbar/Navbar.scss'
import {Link, NavLink} from "react-router-dom"

export default function Navbar() {

  const [active, setActive] = useState(false)

  const isactive =()=>{
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }

  useEffect(()=>{
    window.addEventListener("scroll", isactive)
    return ()=> window.removeEventListener("scroll", isactive)
  }, [])

  return (
  <>
<header>
  <div className='header'>
      <div className="logo"><span><Link to='/'>KN</Link><span style={{color : "rgb(91, 96, 237)"}}>.</span></span></div>
  <nav className='navbar'>
      <ul className="ul">
        <li className='list'><NavLink to='/' >Home</NavLink></li>
        <li className='list'><NavLink to='/services' >Services</NavLink></li>
        <li className='list'><NavLink to='/about' >About</NavLink></li>
        <li className='list'><NavLink to='/skills' >Skills</NavLink></li>
        <li className='list'><NavLink to='/projects' >Projects</NavLink></li>
        <li className='list'><button className='btn-hireme' onClick={()=>window.location.href = "#contact"}>Hire me ?</button></li>
      </ul>
  </nav>
  </div>
  {active &&
  <div className='bottom-header'>
    <div className='container'>
    <ul>
        <li className='list'><a href='#services' >Services</a></li>
        <li className='list'><a href='#about' >About</a></li>
        <li className='list'><a href='#skills' >Skills</a></li>
        <li className='list'><a href='#projects' >Projects</a></li>
        <li className='list'><a href='#resume' >Resume</a></li>
        <li className='list'><a href='#contact' >Contact</a></li>
    </ul>
    </div>
  </div>
}
</header>
  </>
  )
}
