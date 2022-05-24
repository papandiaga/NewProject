export default function Feature() {
  return (
    //  feature
    <section className="section feature mb-0" id="feature">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-title">Awesome Features</h2>
            <p className="mb-100">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.<br></br>Excepteur sint
              occaecat cupidatat non proident
            </p>
          </div>
          {/* feature item */}
          <div className="col-md-6 mb-80">
            <div className="d-flex feature-item">
              <div>
                <i className="fas fa-balance-scale feature-icon mr-4"></i>
              </div>
              <div>
                <h4>Awesome Design</h4>
                <p>
                  Consectetur adipiscing elit donec tempus pellentesque dui.
                </p>
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
                <h4>Easy Customize</h4>
                <p>
                  Consectetur adipiscing elit donec tempus pellentesque dui.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- feature item */}
          <div className="col-md-6 mb-80">
            <div className="d-flex feature-item">
              <div>
                <i className="fas fa-code feature-icon mr-4"></i>
              </div>
              <div>
                <h4>Bug free Code</h4>
                <p>
                  Consectetur adipiscing elit donec tempus pellentesque dui.
                </p>
              </div>
            </div>
          </div>
          {/* feature item */}
          <div className="col-md-6 mb-80">
            <div className="d-flex feature-item">
              <div>
                <i className="far fa-file feature-icon mr-4"></i>
              </div>
              <div>
                <h4>Organized Layouts</h4>
                <p>
                  Consectetur adipiscing elit donec tempus pellentesque dui.
                </p>
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
