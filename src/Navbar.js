import "./styles.css";

export default function Navbar() {
  return (
    //  navigation

    <section className="fixed-top navigation">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="index.html">
            <img
              src="https://i.pinimg.com/474x/ea/ea/1e/eaea1ec8c678d68ca8e3f58f9d3f4cd.jpg"
              alt="Bikes"
            ></img>
          </a>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-toggle="collapse"
            data-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* navbar  */}
          <div className="collapse navbar-collapse text-center" id="navbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="index.html">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#feature">
                  Manhattan
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">
                  Brooklyn
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="service.html">
                  Bronx
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#team">
                  Queens
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link page-scroll" href="#pricing">
                  Staten Island
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html"></a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
}
