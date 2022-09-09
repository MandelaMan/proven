import Link from "next/dist/client/link";
import Layout from "../src/layout/Layout";

const Services = () => {
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
                  {/* Title */}
                  <h2 className="h2-xs">Our Services</h2>
                  {/* Text */}
                  <p className="p-xl">
                    For all your household needs, we are your trusted
                    Electrical, Plumbing and Masonry skilled service providers
                    in Africa.
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* End row */}
          </div>{" "}
          {/* End container */}
        </div>{" "}
        {/* End hero-overlay */}
        {/* WAVE SHAPE BOTTOM */}
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
      {/* <hr className="divider" /> */}
      <section
        id="content-3"
        className="content-3 wide-60 content-section division"
      >
        <div className="container">
          <div id="electrical" className="bottom-row">
            <div className="row d-flex align-items-center">
              {/* IMAGE BLOCK */}
              <div className="col-md-5 col-lg-6">
                <div className="img-block left-column wow fadeInRight">
                  <img
                    className="img-fluid"
                    src="/images/img-17.png"
                    alt="video-preview"
                  />
                </div>
              </div>
              {/* TEXT BLOCK */}
              <div className="col-md-7 col-lg-6">
                <div className="txt-block right-column wow fadeInLeft">
                  <h2 className="h2-xs">Electrical Services</h2>
                  <div className="txt-box mb-25">
                    <p className="p-lg">
                      Proven provides long lasting solutions for your electrical
                      needs. We are timely while offering efficiency and safety.
                      When you want the services of a trained professional for
                      your home, trust our team to get everything running
                      smoothly.
                    </p>
                    <p className="p-lg">
                      We offer electrical installations, maintenance and repair
                      work, including outlet repairs, appliance repairs, wiring
                      system repairs and many more. If you require electrical
                      solutions, contact us today.
                    </p>
                    <p className="p-lg">
                      Appliances Sub-category ( Shower Head, Refrigerator,
                      Washing Machine, Dishwasher, Microwave, Cooker, Blender,
                      Kettle ) Air Conditioner Internal Lights External Lights
                      CCTV Electrical Rewiring Doorbell Smoke Detector Alarms
                      Meter Box Consumer Control Unit Electrical Inspection
                    </p>
                  </div>
                </div>
              </div>{" "}
              {/* END TEXT BLOCK */}
            </div>
          </div>
          <div className="top-row pb-50">
            <div className="row d-flex align-items-center">
              {/* TEXT BLOCK */}
              <div className="col-md-7 col-lg-6 order-last order-lg-2">
                <div className="txt-block left-column wow fadeInRight">
                  <h2 className="h2-xs">Plumbing Services</h2>
                  <div className="txt-box mb-25">
                    <p className="p-lg">
                      Proven provides effective solutions for all your plumbing
                      needs. We are affordable while maintaining quality. You
                      can count on a job well done when you contact one of our
                      experienced plumbers for a project.
                    </p>
                    <p className="p-lg">
                      We offer plumbing installations, maintenance and repair
                      work, including tap repairs, tank repairs, toilet repairs
                      and many more. If you require plumbing solutions, contact
                      us today.
                    </p>
                  </div>
                </div>
              </div>{" "}
              {/* END TEXT BLOCK */}
              {/* IMAGE BLOCK */}
              <div
                id="plumbing"
                className="col-md-5 col-lg-6 order-first order-md-2"
              >
                <div className="img-block left-column wow fadeInLeft">
                  <img
                    className="img-fluid"
                    src="/images/img-16.png"
                    alt="content-image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div id="electrical" className="bottom-row">
            <div className="row d-flex align-items-center">
              {/* IMAGE BLOCK */}
              <div className="col-md-5 col-lg-6">
                <div className="img-block left-column wow fadeInRight">
                  <img
                    className="img-fluid"
                    src="/images/img-17.png"
                    alt="video-preview"
                  />
                </div>
              </div>
              {/* TEXT BLOCK */}
              <div id="masonry" className="col-md-7 col-lg-6">
                <div className="txt-block right-column wow fadeInLeft">
                  <h2 className="h2-xs">Masonry Services</h2>
                  <div className="txt-box mb-25">
                    <p className="p-lg">
                      Proven provides all of your masonry services using the
                      most up-to-date components while meeting the best
                      standards in the industry.
                    </p>
                    <p className="p-lg">
                      We offer masonry installations, maintenance and repair
                      work, including tiling, cabro, waterproofing and many
                      more. Our skilled masons can listen to your exact
                      requirements and provide their own suggestions until you
                      are one hundred percent happy.
                    </p>
                    <p className="p-lg">
                      Leave your project in our capable hands by contacting us
                      today.
                    </p>
                  </div>
                </div>
              </div>{" "}
              {/* END TEXT BLOCK */}
            </div>
          </div>
        </div>
        {/* End container */}
      </section>
    </Layout>
  );
};

export default Services;
