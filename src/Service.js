export default function Service() {
  return (
    //  service
    <section className="section-lg service">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-5 order-2 order-md-1">
            <h2 className="section-title">
              Experience the best way to get around Manhattan, Brooklyn, Bronx,
              Queens, Staten Island
            </h2>
            <p className="mb-4"></p>
            <ul className="pl-0 service-list">
              <li>
                <i className="fas fa-star-of-life"></i>Healthier and more
                environmentally friendly than driving.
              </li>
              <li>
                <i className="far fa-shield-alt"></i>Faster than walking
              </li>
              <li>
                <i className="far fa-file"></i>It will save you a lot on
                MetroCards
              </li>
            </ul>
          </div>
          <div className="col-md-7 order-1 order-md-2"></div>
        </div>
      </div>
      {/* background image */}
      <img
        className="img-fluid service-bg"
        src="images/backgrounds/service-bg.png"
        alt="service-bg"
      ></img>
      {/* background shapes */}
      <img
        className="service-bg-shape-1 up-down-animation"
        src="images/background-shape/service-half-cycle.png"
        alt="background-shape"
      ></img>
      <img
        className="service-bg-shape-2 left-right-animation"
        src="images/background-shape/feature-bg-2.png"
        alt="background-shape"
      ></img>
    </section>
    // service
  );
}
