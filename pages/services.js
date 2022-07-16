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
                    Aliquam a augue suscipit, luctus neque purus ipsum neque at
                    dolor primis libero tempus, blandit and cursus varius
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
    </Layout>
  );
};

export default Services;
