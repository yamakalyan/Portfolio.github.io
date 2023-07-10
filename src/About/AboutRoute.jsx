import "../About/About.scss";

export default function AboutRoute() {
  return (
    <div>
      <div className="about">
      <div className="about-content">
        <div>
          <div className="about-heading">
            <h1>About Me</h1>
            <hr />
            <p>
              Hi, Im{" "}
              <span style={{ fontWeight: "bold", color: "rgb(162, 255, 162)" }}>
                {" "}
                Kalyan Yama
              </span>
              , Im interested in combining creativity and technology. Im
              passionate about the web and Ive been creative coding since 2022,
              I have completed my graduation in 2022, After that, I started my
              career, I have overall{" "}
              <span style={{ fontWeight: "bold", color: "rgb(162, 255, 162)" }}>
                {" "}
                1 years of experience <span style={{ color: "white" }}>in</span> ReactJs , NodeJs{" "}
                <span style={{ color: "white" }}>with</span> Express, MongoDB,
                MySql <span style={{ color: "white" }}>and</span> REST APIs.
              </span>{" "}
              Previously worked with few projects related to my skills, Below
              you can see some of my skills and projects.
            </p>
          </div>
          <div className="about-info">
            <div className="left">
              <img src="KN3.jpg" />
            </div>
            <div className="right">
              <div className="heading"></div>
              <div className="about-row">
                <ul className="about-ul">
                  <h2 className="info-h4">
                    {" "}
                    {"< "} Full{" "}
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "rgb(162, 255, 162)",
                      }}
                    >
                      stack Devoloper
                    </span>{" "}
                    {" >"}
                  </h2>
                  <li>
                    <b>Name</b> : Yama Kalyan
                  </li>
                  <li>
                    <b>Email</b> : yamakalyan6@gmail.com
                  </li>
                  <li>
                    <b>Mobile no</b> : +91 9550049382
                  </li>
                  <li>
                    <b>DOB</b> : 20-07-2000
                  </li>
                </ul>
                <ul className="about-ul">
                  <li>
                    <b>Degree</b> : B.com(computer application)
                  </li>
                  <li>
                    <b>City</b> : Hyderabad
                  </li>
                  <li>
                    <b>Free-lance</b> : Available
                  </li>
                </ul>
              </div>
              <div>
                <p className="about-bottom">
                  <b>Fresher and looking for a job opportunity</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
