import Slider from "react-slick";

const SustainableGoals = () => {
  let setting = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div id="brands-1" className="pb-100 brands-section division">
      <div className="container">
        {/* BRANDS TITLE */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="brands-title text-center">
              <p className="p-xl">
                Sustainable Development Goals Proven is spearheading…
              </p>
            </div>
          </div>
        </div>
        {/* Brands Carousel */}
        <div className="row">
          <div className="col text-center">
            <Slider {...setting} className="owl-carousel brands-carousel">
              {/* BRAND LOGO IMAGE */}
              <div className="brand-logo">
                <img
                  className="img-fluid"
                  src="/images/SDG1.png"
                  alt="brand-logo"
                />
              </div>

              <div className="brand-logo">
                <img
                  className="img-fluid"
                  src="/images/SDG2.png"
                  alt="brand-logo"
                />
              </div>
              <div className="brand-logo">
                <img
                  className="img-fluid"
                  src="/images/SDG4.png"
                  alt="brand-logo"
                />
              </div>
              <div className="brand-logo">
                <img
                  className="img-fluid"
                  src="/images/SDG3.png"
                  alt="brand-logo"
                />
              </div>
            </Slider>
          </div>
        </div>{" "}
        {/* End Brands Carousel */}
      </div>{" "}
      {/* End container */}
    </div>
  );
};

export default SustainableGoals;
