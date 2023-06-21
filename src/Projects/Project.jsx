import "../Projects/Project.scss";

export default function Project() {
  return (
    <div className="project" id="projects" data-aos="fade">
      <div className="project-content">
        {/* <h1>Projects and Integrations</h1> */}
        <h1>FEW OF MY FREELANCE PROJECTS AND INTEGRATIONS</h1>
        <hr />
        <h2 style={{textAlign : "center"}}> <span style={{marginRight : "10px"}}><i className="bi bi-github"></i></span>Git-hub projects </h2>
        {/* <hr /> */}
        <div className="list-projects">
          <div className="list">
            <a href="https://github.com/yamakalyan/MERN" target="_blanck">
              <h3>MERN app</h3>
            </a>
          </div>

          <div className="list">
            <a
              href="https://github.com/yamakalyan/Node.js-Apis"
              target="_blanck"
            >
              <h3>Node.js apis</h3>
            </a>
          </div>
          
          <div className="list">
            <a
              href="https://github.com/yamakalyan/Food-delivery-app"
              target="_blanck"
            >
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
        <h2 style={{textAlign : "center"}}>Live projects </h2>
        {/* <hr /> */}
        <div className="list-projects">

          <div className="list">
            <a href="https://kvnb-co-c27a7.web.app/" target="_blanck">
              <h3>CA business app</h3>
            </a>
          </div>
          <div className="list">
            <a href="https://events-862f4.web.app/" target="_blanck">
              <h3>Events app</h3>
            </a>
          </div>

          <div className="list">
            <a
              href="https://github.com/yamakalyan/Node.js-Apis"
              target="_blanck"
            >
              <h3>Node.js apis</h3>
            </a>
          </div>

          <div className="list">
            <a href="https://blooddonation-80938.web.app/" target="_blanck">
              <h3>Blood Donation app</h3>
            </a>
          </div>

        </div>
        <div style={{ marginBottom: "25px" }}>
          <h2 style={{textAlign : "center"}}> {"<"} Integrations {">"}</h2>
          {/* <hr /> */}
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
  );
}
