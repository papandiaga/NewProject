export default function Feature() {
  return (
    //  feature
    <section className="section feature mb-0" id="feature">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-title">Awesome Features</h2>
            <p className="mb-100">
              <br></br>
            </p>
          </div>
          {/* feature item */}
          <div className="col-md-6 mb-80">
            <div className="d-flex feature-item">
              <div>
                <i className="fas fa-variety feature-icon mr-4"></i>
              </div>
              <div>
                <h4>Different Types</h4>
                <p></p>
              </div>
            </div>
          </div>
          {/* feature item  */}
          <div className="col-md-6 mb-80">
            <div className="d-flex feature-item">
              <div>
                <i className="fas fa-barcode feature-icon mr-4"></i>
              </div>
              <div>
                <h4>Easy To Learn</h4>
                <p></p>
              </div>
            </div>
          </div>
          {/* <!-- feature item */}

          {/* feature item */}
          <div className="col-md-6 mb-80">
            <div className="d-flex feature-item">
              <div></div>
              <div>
                <h4></h4>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="feature-bg-1 up-down-animation"
        src="images/background-shape/feature-bg-1.png"
        alt="bg-shape"
      ></img>
      <img
        className="feature-bg-2 left-right-animation"
        src="images/background-shape/feature-bg-2.png"
        alt="bg-shape"
      ></img>
    </section>
  );
}
