import About from './About/About'
import Contact from './Contact/Contact'
import Home from './Home/Home'
import Navbar from './Navbar/Navbar'
import Project from './Projects/Project'
import Skills from './Skills/Skills'
import "./App.scss"

function App() {
  return (
    <>
    <div className='main'>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Project/>
    <Contact/>
    </div>
    </>
  )
}

export default App
