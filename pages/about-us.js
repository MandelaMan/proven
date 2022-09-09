import Link from "next/dist/client/link";
import BrandCompanies from "../src/components/BrandCompanies";
import Layout from "../src/layout/Layout";

const AboutUs = () => {
  const values = [
    { title: "Professional", description: "" },
    { title: "Quality", description: "" },
    { title: "Teamwork", description: "" },
    { title: "Saftey", description: "" },
  ];
  return (
    <Layout
      btnCustomHover="btn btn-skyblue tra-grey-hover last-link"
      singlePage
    >
      <section id="about-2" className="about-section">
        <div className="bg-inner bg-lightgrey inner-page-hero division">
          <div className="container">
            {/* ABOUT-2 TITLE */}
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-8">
                <div className="about-2-title">
                  {/* Title */}
                  <h2 className="h2-xl">
                    At proven we believe that quality services should not be
                    hard to find...
                  </h2>
                  {/* Text */}
                  <p className="p-xl">
                    Proven was birthed with the need to offer reliable services
                    in an extraordinary manner. Since inception we continue to
                    be a solution to our clients needs in a professional,
                    efficient, timely and integral manner.
                  </p>
                  <p className="p-xl">
                    We aim to provide modern, innovative solutions. We are
                    leading the industry by providing the resources it takes to
                    ensure your safety and innovating the latest training
                    practices to our service providers.
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* END ABOUT-2 TITLE */}
            {/* ABOUT-2 IMAGES */}
            <div className="about-2-images">
              <div className="row row-cols-1 row-cols-md-2">
                {/* IMAGES-1 */}
                <div className="col col-md-5">
                  <img
                    className="img-fluid"
                    src="/images/about1.jpg"
                    alt="about-image"
                  />
                </div>
                {/* IMAGES-2 */}
                <div className="col col-md-7">
                  <img
                    className="img-fluid"
                    src="/images/about2.jpg"
                    alt="about-image"
                  />
                </div>
              </div>{" "}
              {/* End row */}
            </div>{" "}
            {/* END ABOUT-2 IMAGES */}
          </div>{" "}
          {/* End container */}
        </div>{" "}
        {/* End bg-inner */}
      </section>
      <section id="features-4" className="wide-60 features-section division">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <div className="section-title title-01 mb-70">
                {/* Title */}
                <h2 className="h2-md">We Are Better, Here's Why....</h2>
                {/* Text */}
                <p className="p-xl">
                  Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                  primis a libero tempus, blandit and cursus varius and magnis
                  sapien
                </p>
              </div>
            </div>
          </div>
          {/* FEATURES-4 WRAPPER */}
          <div className="fbox-4-wrapper fbox-4-wide">
            <div className="row row-cols-1 row-cols-md-2">
              {values.map((v, i) => (
                <div className="col" key={i}>
                  <div className="fbox-4 pr-25 mb-40 wow fadeInUp">
                    {/* Icon */}
                    <div className="fbox-ico">
                      <div className="ico-65">
                        <span className="flaticon-line-graph-1" />
                      </div>
                    </div>
                    {/* Text */}
                    <div className="fbox-txt">
                      {/* Title */}
                      <h5 className="h5-md">{v.title}</h5>
                      {/* Text */}
                      <p className="p-lg">
                        Porta semper lacus cursus feugiat primis ultrice ligula
                        risus auctor tempus feugiat impedit undo auctor felis
                        augue mauris aoreet tempor
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>{" "}
          {/* END FEATURES-4 WRAPPER */}
        </div>{" "}
        {/* End container */}
      </section>
      <hr className="divider" />
      <BrandCompanies />
    </Layout>
  );
};

export default AboutUs;
