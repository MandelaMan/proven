import { useEffect, useState } from "react";
// import PreLoader from "../src/layout/PreLoader";
import Link from "next/dist/client/link";
import Layout from "../src/layout/Layout";
import Slider from "react-slick";
import Counter from "../src/components/Counter";
import ServiceForm from "../src/components/ServiceForm";

const Home = () => {
  const testimonials = [
    {
      comment:
        "My interaction with the service provider was very good. He was very well behaved and the service was well done. ",
      name: "Becky",
      fix: "Earth Fault Inspection",
      location: "Lavington",
    },
    {
      comment:
        "What I loved most about the service was the work was neat and the cabling was very well done. There was constant communication to ensure everything was settled at its best. The service was transparent and affordable. ",
      name: "Stella",
      fix: "Line Extension",
      location: "Komarock",
    },
    {
      comment:
        "During the service my expectations were fully met. There was excellent timekeeping, good briefing from the service provider and follow-up which was done really well. ",
      name: "Eric",
      fix: "Showerhead Connection",
      location: "Lang'ata",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoPlay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const [preloader, setPreloader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      // setPreloader(false);
    }, 1500);
  }, []);

  return (
    <>
      {/* {preloader && <PreLoader />} */}
      <Layout navLight navHoverColor="nav-pink-hover">
        <section id="hero-4" className="bg-scroll hero-section division">
          <div className="container">
            <div className="row d-flex align-items-center">
              {/* HERO TEXT */}
              <div className="col-md-6">
                <div className="hero-4-txt white-color">
                  {/* Title */}
                  <h2 className="h2-lg">Welcome to Proven</h2>
                  <h3>Competence & Skill delivered professionally.</h3>
                  <p className="p-xl">
                    We provides a unique market place where skilled informal
                    service providers meet and interact with customers who need
                    their services in a professional manner.
                  </p>
                  {/* List
                  <ul className="simple-list">
                    <li className="list-item">
                      <p className="p-xl">
                        Fringilla risus, luctus mauris orci auctor purus a
                        ligula undo euismod pretium purus pretium rutrum tempor
                        sapien ligula undo auctor mauris
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-xl">
                        Nemo ipsam egestas volute turpis dolores aliquam quaerat
                        sodales sapien undo pretium a purus
                      </p>
                    </li>
                  </ul> */}
                </div>
              </div>
              {/* END HERO TEXT */}
              {/* HERO REQUEST FORM */}
              <div className="col-md-6 col-xl-5 offset-xl-1">
                <div id="hero-4-form">
                  <ServiceForm />
                </div>
              </div>
              {/* END HERO REQUEST FORM */}
            </div>
            {/* End row */}
          </div>
          {/* End container */}
          {/* WAVE SHAPE BOTTOM */}
          <div className="wave-shape-bottom">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
              <path
                fill="#ffffff"
                fillOpacity={1}
                d="M0,192L120,197.3C240,203,480,213,720,197.3C960,181,1200,139,1320,117.3L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
              />
            </svg>
          </div>
        </section>
        <section id="features-8" className="wide-60 features-section division">
          <div className="container">
            {/* SECTION TITLE */}
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-8">
                <div className="section-title title-01 mb-70">
                  {/* Title */}
                  <h2 className="h2-md">We’ve got you covered</h2>
                  {/* Text */}
                  <p className="p-xl">
                    For all pressing issues either at home or in other spaces
                    that you cannot solve on your own we provide skilled and
                    competent services at your convinience.
                  </p>
                </div>
              </div>
            </div>
            {/* FEATURES-8 WRAPPER */}
            <div className="fbox-8-wrapper text-center">
              <div className="row row-cols-1 row-cols-md-3">
                {/* FEATURE BOX #1 */}
                <div className="col">
                  <div className="fbox-8 mb-40 wow fadeInUp">
                    {/* Image */}
                    <div className="fbox-img bg-whitesmoke-gradient">
                      <img
                        className="img-fluid"
                        src="/myImages/img-1.jpg"
                        alt="feature-icon"
                      />
                    </div>
                    {/* Title */}
                    <h5 className="h5-md">Plumbing Services</h5>
                    {/* Text */}
                    <p className="p-lg">
                      Feugiat primis ultrice semper lacus cursus feugiat undo
                      primis ultrice a ligula an auctor tempus magnis
                    </p>
                  </div>
                </div>
                {/* FEATURE BOX #2 */}
                <div className="col">
                  <div className="fbox-8 mb-40 wow fadeInUp">
                    {/* Image */}
                    <div className="fbox-img bg-whitesmoke-gradient">
                      <img
                        className="img-fluid"
                        src="/myImages/img-2.jpg"
                        alt="feature-icon"
                      />
                    </div>
                    {/* Title */}
                    <h5 className="h5-md">Electrical Services</h5>
                    {/* Text */}
                    <p className="p-lg">
                      Feugiat primis ultrice semper lacus cursus feugiat undo
                      primis ultrice a ligula an auctor tempus magnis
                    </p>
                  </div>
                </div>
                {/* FEATURE BOX #3 */}
                <div className="col">
                  <div className="fbox-8 mb-40 wow fadeInUp">
                    {/* Image */}
                    <div className="fbox-img bg-whitesmoke-gradient">
                      <img
                        className="img-fluid"
                        src="/myImages/img-3.jpg"
                        alt="feature-icon"
                      />
                    </div>
                    {/* Title */}
                    <h5 className="h5-md">Masonry services</h5>
                    {/* Text */}
                    <p className="p-lg">
                      Feugiat primis ultrice semper lacus cursus feugiat undo
                      primis ultrice a ligula an auctor tempus magnis
                    </p>
                  </div>
                </div>
              </div>
              {/* End row */}
            </div>
            {/* END FEATURES-8 WRAPPER */}
          </div>
          {/* End container */}
        </section>
        <hr className="divider" />
        <section
          id="statistic-2"
          className="wide-100 statistic-section division"
        >
          <div className="container">
            <div className="row d-flex align-items-center">
              {/* TEXT BLOCK */}
              <div className="col-lg-6">
                <div className="txt-block right-column wow fadeInLeft">
                  <h3 className="h3-xs">
                    More than 50,000 people use Proven to source for Electrical,
                    Plumbing and Masonary professionals
                  </h3>
                </div>
              </div>
              {/* STATISTIC BLOCK #1 */}
              <div className="col-sm-5 col-md-4 col-lg-3 offset-sm-1 offset-md-2 offset-lg-1">
                <div className="statistic-block wow fadeInUp">
                  {/* Text */}
                  <h2 className="h2-title-xs statistic-number">
                    <span className="count-element">
                      <Counter end={3} />
                    </span>
                    K
                  </h2>
                  <p className="p-lg mt-20">
                    Number of servered <br /> customers per month
                  </p>
                </div>
              </div>
              {/* STATISTIC BLOCK #2 */}
              <div className="col-sm-5 col-md-4 col-lg-2">
                <div className="statistic-block wow fadeInUp">
                  {/* Text */}
                  <h2 className="h2-title-xs statistic-number">
                    <Counter end={9.5} decimals={1} />
                    /10
                  </h2>
                  {/* Rating */}
                  <div className="txt-block-rating ico-15 yellow-color">
                    <span className="flaticon-star-1" />
                    <span className="flaticon-star-1" />
                    <span className="flaticon-star-1" />
                    <span className="flaticon-star-1" />
                    <span className="flaticon-star-1" />
                    <span className="flaticon-star-1" />
                    <span className="flaticon-star-1" />
                    <span className="flaticon-star-1" />
                    <span className="flaticon-star-1" />
                    <span className="flaticon-star-half-empty" />
                  </div>
                  <p className="p-lg txt-400">Customer's Rating</p>
                </div>
              </div>
            </div>
            {/* End row */}
          </div>
          {/* End container */}
        </section>
        <hr className="divider" />
        <section
          id="solution"
          className="content-3 wide-60 content-section division"
        >
          <div className="container">
            {/* TOP ROW */}
            <div className="top-row pb-50">
              <div className="row d-flex align-items-center">
                {/* IMAGE BLOCK */}
                <div className="col-md-5 col-lg-6">
                  <div className="img-block left-column wow fadeInRight">
                    <img
                      className="img-fluid"
                      src="/images/img_22.jpg"
                      alt="content-image"
                    />
                  </div>
                </div>
                {/* TEXT BLOCK */}
                <div className="col-md-7 col-lg-6">
                  <div className="txt-block right-column wow fadeInLeft">
                    {/* Section ID */}
                    <span className="section-id rounded-id bg-tra-purple purple-color txt-upcase">
                      The Problem + Proven = Solution
                    </span>
                    {/* Title */}
                    <h2 className="h2-xs">
                      Customized service delivery at your doorstep
                    </h2>
                    <p className="p-lg">
                      We are an organisation that offers Electrical, Plumbing,
                      and Masonry services. We pride ourselves on providing
                      Professional, Efficient, Reliable and Timely Services. We
                      provide quality customer-focused service from start
                      through to job completion.
                    </p>
                    <p>
                      Our Vision is to create a perfect world that judges on
                      competence and our ultimate goal is to guarantee quality
                      service to the client while improving the personal and
                      professional development of the service provider.{" "}
                    </p>
                    <p>
                      Your home systems should run smoothly therefore we provide
                      the best solutions for all your needs.{" "}
                    </p>
                    {/* List */}
                    <ul className="simple-list">
                      <li className="list-item">
                        <p className="p-md">
                          An engagement with service providers that is
                          structured and professional.
                        </p>
                      </li>
                      <li className="list-item">
                        <p className="p-md">
                          We deliver pain-free repairs and installations and
                          work around your schedule with flexible hours to
                          minimize disruptions.
                        </p>
                      </li>
                      <li className="list-item">
                        <p className="p-md">
                          Access to selected service providers fast and
                          comfortably.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* END TEXT BLOCK */}
              </div>
            </div>
            {/* END TOP ROW */}
          </div>
          {/* End container */}
        </section>
        <hr className="divider" />
        <section
          id="reviews-1"
          className="bg-whitesmoke-gradient wide-100 reviews-section division slickmargin"
        >
          <div className="container">
            {/* SECTION TITLE */}
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-8">
                <div className="section-title title-01 mb-70">
                  {/* Title */}
                  <h2 className="h2-md">Client feedback</h2>
                  {/* Text */}
                  <p className="p-xl">
                    Aliquam a augue suscipit, luctus neque purus ipsum neque
                    dolor primis a libero tempus, blandit and cursus varius and
                    magnis sapien
                  </p>
                </div>
              </div>
            </div>
            {/* TESTIMONIALS CONTENT */}
            <div className="row">
              <div className="col">
                <div className="owl-carousel owl-theme reviews-1-wrapper">
                  <Slider {...settings}>
                    {testimonials.map((t, i) => (
                      <div className="review-1" key={i}>
                        <div className="review-1-ico ico-25">
                          <span className="flaticon-left-quote" />
                        </div>
                        <div className="review-1-txt">
                          <div className="author-data clearfix">
                            <div
                              className="review-author"
                              style={{ marginLeft: "-5%" }}
                            >
                              <h6 className="h6-xl">{t.fix}</h6>
                            </div>
                          </div>
                          <p className="p-lg">{t.comment}</p>
                          <div className="author-data clearfix">
                            <div
                              className="review-author"
                              style={{ marginLeft: "-5%" }}
                            >
                              <h6 className="h6-xl">{t.name}</h6>
                              <p className="p-md">{t.location}</p>
                              {/* Rating */}
                              <div className="review-rating ico-15 yellow-color">
                                <span className="flaticon-star-1" />
                                <span className="flaticon-star-1" />
                                <span className="flaticon-star-1" />
                                <span className="flaticon-star-1" />
                                <span className="flaticon-star-half-empty" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
            {/* END TESTIMONIALS CONTENT */}
          </div>
          {/* End container */}
        </section>
      </Layout>
    </>
  );
};

export default Home;
