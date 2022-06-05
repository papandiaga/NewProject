export default function HeroArea() {
  return (
    // hero area
    <section className="hero-section hero" data-background="">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center zindex-1">
            <h1 className="mb-3">Project by PAPA and Horlyn</h1>
            <p className="mb-4">
              <br></br>
            </p>

            {/* banner image  */}
          </div>
        </div>
      </div>
      {/* background shapes  */}
      <div id="scene">
        <img
          className="img-fluid hero-bg-1 up-down-animation"
          src="images/background-shape/feature-bg-2.png"
          alt=""
        ></img>
        <img
          className="img-fluid hero-bg-2 left-right-animation"
          src="images/background-shape/seo-ball-1.png"
          alt=""
        ></img>
        <img
          className="img-fluid hero-bg-3 left-right-animation"
          src="images/background-shape/seo-half-cycle.png"
          alt=""
        ></img>
        <img
          className="img-fluid hero-bg-4 up-down-animation"
          src="images/background-shape/green-dot.png"
          alt=""
        ></img>
        <img
          className="img-fluid hero-bg-5 left-right-animation"
          src="images/background-shape/blue-half-cycle.png"
          alt=""
        ></img>
        <img
          className="img-fluid hero-bg-6 up-down-animation"
          src="images/background-shape/seo-ball-1.png"
          alt=""
        ></img>
      </div>
    </section>
  );
}
