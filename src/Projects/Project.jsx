import "../Projects/Project.scss";

export default function Project() {
  return (
    <div className="project" id="projects" data-aos="fade">
      <div className="project-content">
        {/* <h1>Projects and Integrations</h1> */}
        <h1>FEW OF MY FREELANCE PROJECTS AND INTEGRATIONS</h1>
        <hr />

        <h2 style={{ textAlign: "center" }}>Live projects </h2>
        {/* <hr /> */}
        <div className="list-projects">
          <div className="list">
            <a href="https://kvnbco.com/" target="_blanck">
              <h3>K V N B & CO</h3>
              <p>Chartered accountants</p>
            </a>
          </div>
          
          <div className="list">
            <a
              href="https://seetharamjewellers.in/"
              target="_blanck"
            >
              <h3>Seetharam jewellers</h3>
              <p>jewellery shop</p>
            </a>
          </div>

          <div className="list">
            <a
              href="https://github.com/yamakalyan/Node.js-Apis"
              target="_blanck"
            >
              <h3>Technological</h3>
              <p>Services & job search</p>
            </a>
          </div>

          <div className="list">
            <a href="https://blooddonation-80938.web.app/" target="_blanck">
              <h3>Swachanda seva samstha</h3>
              <p>Blood donation</p>
            </a>
          </div>

          
          <div className="list">
            <a href="https://events-862f4.web.app/" target="_blanck">
              <h3>Events</h3>
              <p>events & party</p>
            </a>
          </div>

          
          <div className="list">
            <a href="https://mern-social-media-b2810.web.app/" target="_blanck">
              <h3>Quotes media</h3>
              <p>Social media for quotes</p>
            </a>
          </div>
        </div>
        <h2 style={{ textAlign: "center" }}>
          {" "}
          <span style={{ marginRight: "10px" }}>
            <i className="bi bi-github"></i>
          </span>
          Git-hub projects{" "}
        </h2>
        {/* <hr /> */}
        <div className="list-projects">
          <div className="list-git">
            <a href="https://github.com/yamakalyan/MERN" target="_blanck">
              <h3>MERN</h3>
            </a>
          </div>

          <div className="list-git">
            <a
              href="https://github.com/yamakalyan/MERN--with-userroles"
              target="_blanck"
            >
              <h3>User / Admin</h3>
            </a>
          </div>

          <div className="list-git">
            <a
              href="https://github.com/yamakalyan/Node.js-Apis"
              target="_blanck"
            >
              <h3>Node.js apis</h3>
            </a>
          </div>

          <div className="list-git">
            <a
              href="https://github.com/yamakalyan/Food-delivery-app"
              target="_blanck"
            >
              <h3>Food Delivery</h3>
            </a>
          </div>

          <div className="list-git">
            <a href="https://github.com/yamakalyan/D_arts" target="_blanck">
              <h3>Arts Selling</h3>
            </a>
          </div>
          <div className="list-git">
            <a
              href="https://github.com/yamakalyan/e-commerce-template-UI"
              target="_blanck"
            >
              <h3>UI Template</h3>
            </a>
          </div>
          <div className="list-git">
            <a href="https://github.com/yamakalyan/CRUD" target="_blanck">
              <h3>CRUD</h3>
            </a>
          </div>
        </div>
        <div style={{ marginBottom: "25px" }}>
          <h2 style={{ textAlign: "center" }}>
            {" "}
            {"<"} Integrations {">"}
          </h2>
          {/* <hr /> */}
        </div>
        <div className="int">
          <div className="list-int">
            <h3>Razor-pay</h3>
          </div>
          <div className="list-int">
            <h3>JWT</h3>
          </div>
          <div className="list-int">
            <h3>PayPal</h3>
          </div>
          <div className="list-int">
            <h3>Email.js</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
