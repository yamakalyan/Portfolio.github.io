import "./Services.scss";
export default function Services() {
  return (
    <div className="services" id="services">
      <div className="container">
        <h1 className="heading">My Services.</h1>
        <div className="services-row">
          <div className="content one">
            <div className="content-details">
              <h3>
                <span>
                <i className="bi bi-code-slash"></i>
                </span>{" "}
                Web devolopement.
              </h3>
              <p>
                Creating responsive websites with clean code for seamless online
                experiences.
              </p>
            </div>
          </div>
          <div className="content two">
            <div className="content-details">
              <h3>
                <span>
                  <i className="bi bi-pen"></i>
                </span>{" "}
                Logo designing.{" "}
              </h3>
              <p>
                Custom logos that elevate brands through visual storytelling and
                design.
              </p>
            </div>
          </div>
        </div>
        <div className="services-row">
          <div className="content Three">
            <div className="content-details">
              <h3>
                <span>
                  <i className="bi bi-broadcast"></i>
                </span>{" "}
                Digital marketing.{" "}
              </h3>
              <p>
                Driving brand growth through targeted digital strategies on
                social platforms.
              </p>
            </div>
          </div>
          <div className="content last">
            <div className="content-details">
              <h3>
                <span>
                  <i className="bi bi-x-diamond-fill"></i>
                </span>{" "}
                Template creation.{" "}
              </h3>
              <p>
                Eye-catching advertising templates that captivate audiences and
                drive conversions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
