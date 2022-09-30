const BrandCompanies = () => {
  return (
    <div id="brands-2" className="wide-70 brands-section division">
      <div className="container">
        {/* BRANDS TITLE */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="brands-title text-center">
              <p className="p-xl">Our partners</p>
            </div>
          </div>
        </div>
        {/* BRANDS-2 WRAPPER */}
        <div className="brands-2-wrapper">
          <div className="row justify-content-md-center row-cols-2 row-cols-sm-3 row-cols-md-5">
            <div className="col">
              <div className="brand-logo">
                <a href="#">
                  <img
                    className="img-fluid"
                    src="/images/tronic-logo.png"
                    alt="brand-logo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* END BRANDS-2 WRAPPER */}
      </div>{" "}
      {/* End container */}
    </div>
  );
};

export default BrandCompanies;
