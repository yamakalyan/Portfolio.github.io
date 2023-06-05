// import { useEffect, useState } from 'react'
import '../Navbar/Navbar.scss'
export default function Navbar() {
  // const [active,setActive] = useState(false)

  // const isactive =()=>{
  //   window.scrollY > 0 ? setActive(true) : setActive(false)
  // }

  // useEffect(()=>{
  //   window.addEventListener("scroll", isactive)
  //   return ()=> window.removeEventListener("scroll", isactive)
  // }, [])

  return (
  <>
<header>
  <div className='header'>
      <div className="logo"><span>Yama Kalyan</span></div>
  <nav className='navbar'>
      <ul className="ul">
        <li className='list'><a href='#home' >Home</a></li>
        <li className='list'><a href='#about' >About</a></li>
        <li className='list'><a href='#skills' >Skills</a></li>
        <li className='list'><a href='#projects' >Projects</a></li>
        <li className='list'><a href='#contact' >Contact</a></li>
        <li className='list'><button className='btn-hireme' onClick={()=>window.location.href = "tel:9550049382"}>Hire me ?</button></li>
      </ul>
  </nav>
  </div>
  {/* <div className='bottom-header'>
  {active ?
    <div className='container'>
    <ul>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
    </ul>
    </div>
  :
  ""
}
  </div> */}
</header>
  </>
  )
}
