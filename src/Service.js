export default function Service() {
  return (
    //  service
    <section className="section-lg service">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-5 order-2 order-md-1">
            <h2 className="section-title">
              Powerful Layout From Top To Bottom
            </h2>
            <p className="mb-4">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <ul className="pl-0 service-list">
              <li>
                <i className="fas fa-star-of-life"></i>Responsive on any device
              </li>
              <li>
                <i className="far fa-shield-alt"></i>Very easy to customize
              </li>
              <li>
                <i className="far fa-file"></i>Effective support
              </li>
            </ul>
          </div>
          <div className="col-md-7 order-1 order-md-2">
            <img
              className="img-fluid layer-3"
              src="images/service/service.png"
              alt="service"
            ></img>
          </div>
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
