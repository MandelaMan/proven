import Link from "next/dist/client/link";
import Layout from "../src/layout/Layout";

const faqs = () => {
  const faqs_A = [
    { title: "How does it work?" },
    { title: "How does it work?" },
    { title: "How does it work?" },
    { title: "How does it work?" },
    { title: "How does it work?" },
  ];

  const faqs_B = [
    { title: "How do i make payment?" },
    { title: "How do i make payment?" },
    { title: "How do i make payment?" },
    { title: "How do i make payment?" },
    { title: "How do i make payment?" },
  ];
  return (
    <Layout
      navLight
      whiteLogo
      btnCustomHover="btn btn-skyblue tra-white-hover last-link"
      singlePage
    >
      <div id="faqs-page" className="page-hero-section division">
        <div className="page-hero-overlay division">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-8">
                <div className="hero-txt text-center white-color">
                  {/* Title */}
                  <h2 className="h2-xs">Frequently Asked Questions</h2>
                  {/* Text */}
                  <p className="p-xl">
                    Aliquam a augue suscipit, luctus neque purus ipsum neque at
                    dolor primis libero tempus, blandit and cursus varius
                  </p>
                </div>
              </div>
            </div>
          </div>{" "}
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
      <section id="faqs-2" className="wide-60 faqs-section division">
        <div className="container">
          {/* FAQs-2 QUESTIONS */}
          <div className="faqs-2-questions">
            <div className="row row-cols-1 row-cols-lg-2">
              {/* QUESTIONS HOLDER */}
              <div className="col">
                <div className="questions-holder pr-15">
                  {faqs_A.map((fA, i) => (
                    <div className="question wow fadeInUp">
                      {/* Question */}
                      <h5 className="h5-md">{fA.title}</h5>
                      {/* Answer */}
                      <p className="p-lg">
                        Etiam amet mauris suscipit in odio integer congue metus
                        vitae arcu mollis blandit ultrice ligula egestas and
                        magna suscipit lectus magna suscipit luctus blandit
                        vitae
                      </p>
                    </div>
                  ))}
                </div>
              </div>{" "}
              {/* END QUESTIONS HOLDER */}
              {/* QUESTIONS HOLDER */}
              <div className="col">
                <div className="questions-holder pl-15">
                  {faqs_B.map((fB, i) => (
                    <div className="question wow fadeInUp">
                      {/* Question */}
                      <h5 className="h5-md">{fB.title}</h5>
                      {/* Answer */}
                      <p className="p-lg">
                        Etiam amet mauris suscipit in odio integer congue metus
                        vitae arcu mollis blandit ultrice ligula egestas and
                        magna suscipit lectus magna suscipit luctus blandit
                        vitae
                      </p>
                    </div>
                  ))}
                </div>
              </div>{" "}
              {/* END QUESTIONS HOLDER */}
            </div>{" "}
            {/* End row */}
          </div>{" "}
          {/* END FAQs-2 QUESTIONS */}
          {/* MORE QUESTIONS BUTTON */}
          <div className="row">
            <div className="col">
              <div className="more-questions">
                <h5 className="h5-sm">
                  Have more questions?{" "}
                  <Link href="/contacts">
                    <a>Ask your question here</a>
                  </Link>
                </h5>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* End container */}
      </section>
      {/* END FAQs-2 */}
      {/* CALL TO ACTION-7
			============================================= */}
      <div id="cta-7" className="cta-section division">
        <div className="container">
          <div className="cta-7-wrapper bg-snow">
            <div className="row d-flex align-items-center">
              {/* TEXT */}
              <div className="col-lg-9">
                <div className="cta-7-txt">
                  <p className="p-xl">
                    {`Still have a question? Don't worry, our customer care team
                    is ready to help you with any questions or problems`}
                  </p>
                </div>
              </div>
              {/* BUTTON */}
              <div className="col-lg-3 text-end">
                <div className="cta-7-btn">
                  <Link href="/contacts">
                    <a className="btn btn-skyblue tra-grey-hover">Contact Us</a>
                  </Link>
                </div>
              </div>
            </div>{" "}
            {/* End row */}
          </div>{" "}
          {/* End cta-7-wrapper */}
        </div>{" "}
        {/* End container */}
      </div>
    </Layout>
  );
};

export default faqs;
