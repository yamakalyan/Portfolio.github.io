import "../Resume/Resume.scss";

export default function Resume() {
  const handleDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1bYPHj_OHFs6FW1hwaDd3cfY1nsuGvJw8/view?usp=drivesdk",
      "_blank"
    );
  };
  return (
    <div className="resume" id="resume">
      <div className="resume-details">
        <div style={{textAlign : "center"}}>
      <h1 className="heading">My Resume.</h1><hr/>
        </div>
        <div className="resume-container">
          <div className="left">
            <div>
              <h3>Summary</h3>
              <p>
                As a fresher web developer, I'm passionate about creating
                user-friendly web applications. Proficient in React, Node.js,
                and working with databases like MySQL and MongoDB, I have a keen
                eye for detail and strong problem-solving skills. Eager to learn
                and contribute to innovative projects, I strive to deliver
                high-quality code. Ready to collaborate and grow as a
                professional web developer.
              </p>
            </div>
            <div>
              <h3>Education</h3>
              <div className="education-box">
                <p style={{ fontWeight: "bold" }}>
                  Bachelor of Commerce (B.Com), Computer Application
                </p>
                <p style={{ color: "blueviolet" }}>Nishitha Degree College.</p>
                <p>Year of completion: 2022</p>
              </div>
              <div className="education-box">
                <p style={{ fontWeight: "bold" }}>
                  {" "}
                  Senior Secondary (XII), Science
                </p>
                <p style={{ color: "blueviolet" }}>Vijay Junior College.</p>
                <p>Year of completion: 2019</p>
              </div>
              <div className="education-box">
                <p style={{ fontWeight: "bold" }}> Secondary (X)</p>
                <p style={{ color: "blueviolet" }}>ZPHS school</p>
                <p>Year of completion: 2016</p>
              </div>
            </div>
          </div>
          <div className="right">
            <div>
              <h3>Traning</h3>
              <p>
                Completed comprehensive Web Development course, proficient in
                front-end javascript library React.js and back-end Node.js also
                express.js for api development. Skilled in database management
                like MySQL & MongoDb. gained broad knowledge in web development
                principles.
              </p>
            </div>
          </div>
        </div>
      <div style={{ textAlign: "center", margin: "25px" }}>
        <button className="btn-resume" onClick={handleDownload}>
          Download resume
        </button>
      </div>
      </div>
    </div>
  );
}
