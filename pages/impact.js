import Link from "next/dist/client/link";
import Layout from "../src/layout/Layout";

const Impact = () => {
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
                  <h2 className="h2-xs">Our Impact</h2>
                  {/* <p className="p-xl">
                    For all your household needs, we are your trusted
                    Electrical, Plumbing and Masonry skilled service providers
                    in Africa.
                  </p> */}
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
        id="content-3"
        className="content-3 wide-60 content-section division"
      >
        <div className="container">
          <div id="impact" className="bottom-row">
            <div className="row d-flex align-items-center">
              <div className="col-md-5 col-lg-6">
                <div className="img-block left-column wow fadeInRight">
                  <img
                    className="img-fluid"
                    src="/images/img_z.png"
                    alt="video-preview"
                  />
                </div>
              </div>
              <div className="col-md-7 col-lg-6">
                <div className="txt-block right-column wow fadeInLeft">
                  <div className="txt-box mb-25">
                    <h2 className="h2-xs">
                      We pride ourselves in being a result oriented company.
                    </h2>
                    <p className="p-lg">
                      We believe the personal touches and unique training that
                      we have sets our service providers apart. Impact is all
                      about results. We encourage incremental progress toward
                      goals that lead to big outcomes.
                    </p>
                    <p className="p-lg">
                      Each service provider is able to work on contributing to
                      their individual goals, the success of the team, the
                      clients we serve, and the organization as a whole. Every
                      team member has invested in Proven which is why we're well
                      on our way to changing the way Africapurchases services.
                    </p>
                  </div>
                </div>
              </div>
              <div id="brands-2" className="wide-70 brands-section division">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <div className="brands-title text-center">
                        <p className="p-xl">
                          <strong>
                            Sustainable Development Goals Proven is
                            spearheading…
                          </strong>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <div className="brands-2-wrapper">
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
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End container */}
      </section>
    </Layout>
  );
};

export default Impact;
