import Link from "next/dist/client/link";
import BrandCompanies from "../src/components/BrandCompanies";
import Layout from "../src/layout/Layout";

const AboutUs = () => {
  return (
    <Layout
      navLight
      whiteLogo
      btnCustomHover="btn btn-skyblue tra-white-hover last-link"
      singlePage
    >
      <div id="download-page" className="page-hero-section division">
        <div className="page-hero-overlay division">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-8">
                <div className="hero-txt text-center white-color">
                  <h2 className="h2-xs">About Us</h2>
                  <p className="p-xl">
                    At proven we believe that quality services should not be
                    hard to find.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wave-shape-bottom">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80">
            <path
              fill="#ffffff"
              fillOpacity={1}
              d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            />
          </svg>
        </div>
      </div>
      <section
        id="content-6"
        className="content-6 pt-30 content-section division"
      >
        <div className="container">
          <div className="row d-flex align-items-center">
            {/* TEXT BLOCK */}
            <div className="col-md-6 col-lg-5">
              <div className="txt-block left-column wow fadeInRight">
                <span className="section-id rounded-id bg-tra-purple purple-color txt-upcase">
                  Who we are
                </span>
                <p className="p-xl">
                  Proven was birthed with the need to offer reliable services in
                  an extraordinary manner. Since inception we continue to be a
                  solution to our clients needs in a professional, efficient,
                  timely and integral manner.
                </p>
                <p className="p-xl">
                  We aim to provide modern, innovative solutions. We are leading
                  the industry by providing the resources it takes to ensure
                  your safety and innovating the latest training practices to
                  our service providers.
                </p>
              </div>
            </div>
            {/* IMAGE BLOCK */}
            <div className="col-md-6 col-lg-7">
              <div className="img-block right-column wow fadeInLeft">
                <img
                  className="img-fluid"
                  src="/images/img-20.png"
                  alt="content-image"
                />
              </div>
            </div>
          </div>
          {/* End row */}
        </div>
        {/* End container */}
      </section>
      <section id="features-7" className="wide-70 features-section division">
        <div className="container">
          <div className="row d-flex align-items-center">
            {/* FEATURES-7 WRAPPER */}
            <div className="col-lg-7 order-last order-lg-2">
              <div className="fbox-7-wrapper pr-30">
                <div className="row">
                  <div className="col-md-6">
                    {/* FEATURE BOX #1 */}
                    <div
                      id="fb-7-1"
                      className="fbox-7 mt-40 mb-30 wow fadeInUp"
                    >
                      {/* Icon */}
                      <div className="fbox-ico-center ico-rounded-md ico-45 bg-tra-purple purple-color">
                        <span className="flaticon-dashboard" />
                      </div>
                      {/* Title */}
                      <h5 className="h5-sm">Professional Service</h5>
                      {/* Text */}
                      <p className="p-lg">
                        Porta semper lacus and cursus feugiat at primis ultrice
                        a ligula auctor
                      </p>
                    </div>
                    {/* FEATURE BOX #2 */}
                    <div id="fb-7-2" className="fbox-7 mb-30 wow fadeInUp">
                      {/* Icon */}
                      <div className="fbox-ico-center ico-rounded-md ico-45 bg-tra-red red-color">
                        <span className="flaticon-tool" />
                      </div>
                      {/* Title */}
                      <h5 className="h5-sm">We are timely</h5>
                      {/* Text */}
                      <p className="p-lg">
                        Porta semper lacus and cursus feugiat at primis ultrice
                        a ligula auctor
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    {/* FEATURE BOX #3 */}
                    <div id="fb-7-3" className="fbox-7 mb-30 wow fadeInUp">
                      {/* Icon */}
                      <div className="fbox-ico-center ico-rounded-md ico-45 bg-tra-yellow yellow-color">
                        <span className="flaticon-layers" />
                      </div>
                      {/* Title */}
                      <h5 className="h5-sm">Teamwork</h5>
                      {/* Text */}
                      <p className="p-lg">
                        Porta semper lacus and cursus feugiat at primis ultrice
                        a ligula auctor
                      </p>
                    </div>
                    {/* FEATURE BOX #4 */}
                    <div id="fb-7-4" className="fbox-7 mb-30 wow fadeInUp">
                      {/* Icon */}
                      <div className="fbox-ico-center ico-rounded-md ico-45 bg-tra-green green-color">
                        <span className="flaticon-arrow" />
                      </div>
                      {/* Title */}
                      <h5 className="h5-sm">Quality Service</h5>
                      {/* Text */}
                      <p className="p-lg">
                        Porta semper lacus and cursus feugiat at primis ultrice
                        a ligula auctor
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-5 order-first order-lg-2">
              <div className="txt-block right-column wow fadeInLeft">
                <span className="section-id rounded-id bg-tra-purple purple-color txt-upcase">
                  What we offer
                </span>
                <p className="p-xl">
                  Proven App Limited has a record of exceeding expectations. Our
                  team of professional electricians, plumbers and masonry
                  specialists have joined Proven from a wide range of technical
                  disciplines and bring years of combined experience to every
                  project. They are the best and the brightest in the industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="divider" />
      <BrandCompanies />
    </Layout>
  );
};

export default AboutUs;
