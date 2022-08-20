import Link from "next/dist/client/link";
import Layout from "../src/layout/Layout";

const faqs = () => {
  const faqs_A = [
    {
      question: "Where is your office located?",
      answer: "We are located at Mirage Tower, 13th Floor, Westlands. ",
    },
    {
      question: "What are your working hours? ",
      answer: "We work for 24 hours a day.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "We take the least time possible to complete a project after all supplies have been delivered and payments have completed. ",
    },
    {
      question: "How can I book a service? ",
      answer:
        "You can book a service by selecting one of the listed options on the drop down (place a link for electrical, plumbing, masonry drop down separately) Our booking team will give you a call back, discuss your particular requirements and advice on pricing. ",
    },
  ];

  const faqs_B = [
    {
      question: "How can I get a quote? ",
      answer:
        "We'll first make an inspection and check what work is required and give you a quote to complete the work. Our job booking team will discuss your particular requirements and will advise on pricing. ",
    },
    {
      question: "Do you offer emergency call services? ",
      answer:
        "For any emergency problems don’t hesitate to contact us. We will attend to your query as soon as possible. Our average response time depends on location and we will give you a quote for any additional costs to be incurred to completely resolve the fault. All of our emergency service providers are fully qualified. If we can’t fix the problem straightaway we will give you safety measures to follow. ",
    },
    {
      question: "Are your service providers trained? ",
      answer:
        "Yes. Our service providers are trained and qualified to carry out inspections, repairs, installations and maintenance. Our service providers attend training to enhance their skills. ",
    },
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
                  {/* <p className="p-xl">
                    Check most frequently asked questions here, if you still
                    need help then please contact us at enquiries@proven.co.ke
                  </p> */}
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
                      <h5 className="h5-md">{fA.question}</h5>
                      {/* Answer */}
                      <p className="p-lg">{fA.answer}</p>
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
                      <h5 className="h5-md">{fB.question}</h5>
                      {/* Answer */}
                      <p className="p-lg">{fB.answer}</p>
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
                    {/* {`Still have a question? Don't worry, our customer care team
                    is ready to help you with any questions or problems`} */}
                    Still have a questions or need help? Please contact us at
                    enquiries@proven.co.ke
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
