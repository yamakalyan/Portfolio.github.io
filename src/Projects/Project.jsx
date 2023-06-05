import "../Projects/Project.scss"

export default function Project() {
  return (
    <div className="project" id="projects" data-aos="fade">
      <div className="project-content">
        
    <h1>Projects and Integrations</h1><hr/>
    <div className="list-projects">

      <div className="list">
      <a href="https://github.com/yamakalyan/MERN" target="_blanck">
        <h3>MERN app</h3>
      </a>
      </div>      

      <div className="list">
      <a href="https://vishwambhar-ca.web.app/" target="_blanck">
        <h3>CA business app</h3>
      </a>
      </div>
      <div className="list">
      <a href="https://events-862f4.web.app/" target="_blanck">
        <h3>Events app</h3>
      </a>
      </div>

      <div className="list">
        <a href="https://github.com/yamakalyan/Node.js-Apis" target="_blanck">
        <h3>Node.js apis</h3>
        </a>
      </div>

      <div className="list">
        <a href="https://blooddonation-80938.web.app/" target="_blanck">
        <h3>Blood Donation app</h3>
        </a>
      </div>

      <div className="list">
        <a href="https://github.com/yamakalyan/Food-delivery-app" target="_blanck">
        <h3>Food Delivery app</h3>
        </a>
      </div>

      <div className="list">
        <a href="https://github.com/yamakalyan/D_arts" target="_blanck">
        <h3>Arts Selling app</h3>
        </a>
      </div>

      <div className="list">
        <a href="https://github.com/yamakalyan/CRUD" target="_blanck">
        <h3>CRUD app</h3>
        </a>
      </div>
    </div>
    <div style={{marginBottom : "15px"}}>
      <h1>Integrations</h1><hr/>
    </div>
    <div className="int">
    <div className="list-int">
        <h3>Razor-pay integration</h3>
      </div>
      <div className="list-int">
        <h3>Email.js integration</h3>
      </div>
    </div>
      </div>
      
    </div>
  )
}
