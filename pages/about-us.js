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
      <section id="features-6" className="pb-100 features-section division">
        <div className="container">
          {/* SECTION TITLE */}
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <div className="section-title title-01 mb-70">
                <span className="section-id rounded-id bg-tra-purple purple-color txt-upcase">
                  Who we are
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
          {/* FEATURES-6 WRAPPER */}
          <div className="fbox-6-wrapper">
            <div className="row align-items-center row-cols-1 row-cols-md-3">
              <div className="col">
                <div id="fb-6-1" className="fbox-6 bg-white wow fadeInUp">
                  <div className="fbox-ico-center ico-rounded-lg ico-50 bg-tra-green green-color">
                    <span className="flaticon-browser" />
                  </div>
                  <h5 className="h5-md">Professional Service</h5>
                  <p className="p-lg">
                    We help streamline your service so that you can avoid the
                    hassle of balancing communications with service providers
                    and suppliers.
                  </p>
                </div>
              </div>
              <div className="col">
                <div id="fb-6-2" className="fbox-6 bg-white wow fadeInUp">
                  <div className="fbox-ico-center ico-rounded-lg ico-50 bg-tra-orange orange-color">
                    <span className="flaticon-layers" />
                  </div>
                  <h5 className="h5-md">Teamwork</h5>
                  <p className="p-lg">
                    The intimate planning process, done together with you, keeps
                    everyone on the same page and working together for a shared
                    goal.
                  </p>
                </div>
                <div id="fb-6-3" className="fbox-6 bg-white wow fadeInUp">
                  <div className="fbox-ico-center ico-rounded-lg ico-50 bg-tra-purple purple-color">
                    <span className="flaticon-click-3" />
                  </div>
                  <h5 className="h5-md">We are timely</h5>
                  <p className="p-lg">
                    When you have questions, need clarification, or want to
                    explore additional options for a service, We Listen and Work
                    fast to deliver.
                  </p>
                </div>
              </div>
              <div className="col">
                <div id="fb-6-4" className="fbox-6 bg-white wow fadeInUp">
                  <div className="fbox-ico-center ico-rounded-lg ico-50 bg-tra-yellow yellow-color">
                    <span className="flaticon-tool" />
                  </div>
                  <h5 className="h5-md">Quality Service</h5>
                  <p className="p-lg">
                    As your single point of contact, we take on all the
                    planning, dispatch the most qualified service providers, and
                    dedication to quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <hr className="divider" /> */}
      <BrandCompanies />
    </Layout>
  );
};

export default AboutUs;
