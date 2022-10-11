const Footer = () => {
  return (
    <footer id="footer-1" className="footer division">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="footer-info mb-40">
              <img
                className="footer-logo mb-25"
                src="/images/logo-wh.png"
                alt="footer-logo"
              />
              <p className="p-md">
                A unique market place where skilled informal service providers
                meet and interact with customers who need their services in a
                professional manner.
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="footer-links mb-40">
              <h6 className="h6-xl">Company</h6>
              <ul className="foo-links text-secondary clearfix">
                <li>
                  <p className="p-md">
                    <a href="/impact">Impact</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="/about-us">About Us</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="/contact-us">Contact Us</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="/faqs">FAQs</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="footer-links mb-40">
              <h6 className="h6-xl">Services</h6>
              <ul className="foo-links text-secondary clearfix">
                <li>
                  <p className="p-md">
                    <a href="/services/#electrical">Electrical</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="/services/#masonry">Masonry</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="/services/#plumbing">Plumbing</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="/services/#solar">Solar</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="footer-links mb-40">
              <h6 className="h6-xl">Legal</h6>
              <ul className="foo-links text-secondary clearfix">
                <li>
                  <p className="p-md">
                    <a href="/terms">Terms and Conditions</a>
                  </p>
                </li>
                {/* <li>
                  <p className="p-md">
                    <a href="/terms">Privacy Policy</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="/terms">Cookie Policy</a>
                  </p>
                </li> */}
              </ul>
            </div>
          </div>
          {/* <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="footer-links mb-40">
              <h6 className="h6-xl">Support</h6>
              <ul className="foo-links text-secondary clearfix">
                <li>
                  <p className="p-md">
                    <a href="#">FAQs</a>
                  </p>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
        <hr />
        <div className="bottom-footer">
          <div className="row row-cols-1 row-cols-md-2 d-flex align-items-center">
            <div className="col">
              <div className="footer-copyright">
                <p>
                  © 2010 - {new Date().getFullYear()} Proven. All Rights
                  Reserved
                </p>
              </div>
            </div>
            <div className="col">
              <ul className="bottom-footer-list text-secondary text-end">
                <li className="first-li">
                  <p>
                    <a href="#">Instagram</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#">Facebook</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#">Twitter</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#">LinkedIn</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
