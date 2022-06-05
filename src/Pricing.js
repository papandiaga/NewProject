export default function Pricing() {
  return (
    //  pricing
    <section className="section-lg pb-0 pricing" id="pricing">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-title">Citi Bike Pricing</h2>
            <p className="mb-50">
              <br></br>{" "}
            </p>
          </div>
          <div className="col-lg-10 mx-auto">
            <div className="row justify-content-center">
              {/* pricing table  */}
              <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                <div className="rounded text-center pricing-table table-2">
                  <h3>Standard Per ride</h3>
                  <h1>
                    <span>$</span>3.99
                  </h1>
                  <p></p>
                  <a href="#" className="btn pricing-btn px-2">
                    Buy Now
                  </a>
                </div>
              </div>
              {/* pricing table  */}
              <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                <div className="rounded text-center pricing-table table-3">
                  <h3>Premium Per Month</h3>
                  <h1>
                    <span>$</span>15
                  </h1>
                  <p></p>
                  <a href="#" className="btn pricing-btn px-2">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* background shapes  */}
      <img
        className="pricing-bg-shape-1 up-down-animation"
        src="images/background-shape/seo-ball-1.png"
        alt="background-shape"
      ></img>
      <img
        className="pricing-bg-shape-2 up-down-animation"
        src="images/background-shape/seo-half-cycle.png"
        alt="background-shape"
      ></img>
      <img
        className="pricing-bg-shape-3 left-right-animation"
        src="images/background-shape/team-bg-triangle.png"
        alt="background-shape"
      ></img>
    </section>
  );
}
