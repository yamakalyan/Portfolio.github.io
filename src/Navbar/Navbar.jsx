import '../Navbar/Navbar.scss'
export default function Navbar() {
  return (
  <>
<header>
  <div className='header'>
      <div className="logo"><span>Yama Kalyan</span></div>
  <nav className='navbar'>
      <ul className="ul">
        <li className='list'><a href='#home' >Home</a></li>
        <li className='list'><a href='#skills' >Skills</a></li>
        <li className='list'><a href='#projects' >Projects</a></li>
        <li className='list'><a href='#about' >About</a></li>
        <li className='list'><a href='#contact' >Contact</a></li>
        <li className='list'><button className='btn-hireme'>Hire me ?</button></li>
      </ul>
  </nav>
  </div>
</header>
  </>
  )
}
