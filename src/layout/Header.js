import Link from "next/link";
import { useEffect, useState } from "react";
import { scroll } from "../utils/utils";

const Header = ({
  navLight,
  whiteLogo,
  getStartText,
  btnCustomHover,
  navHoverColor,
  singlePage,
}) => {
  useEffect(() => {
    window.addEventListener("scroll", scroll);
  }, []);

  const [toggle, setToggle] = useState(false);
  const [mobileMenuToggle, setMobileMenuToggle] = useState("");

  const toggleFun = () => {
    setToggle(!toggle);
    document.querySelector("body").classList.toggle("wsactive");
  };

  const toggleMenu = (value) => {
    setMobileMenuToggle(mobileMenuToggle !== value ? value : "");
  };

  return (
    <header
      id="header"
      className={`header tra-menu ${navLight ? "navbar-light" : "navbar-dark"}`}
    >
      <div className="header-wrapper">
        {/* MOBILE HEADER */}
        <div className="wsmobileheader clearfix">
          <span className="smllogo">
            <img src="/images/logo-01.png" alt="mobile-logo" />
          </span>
          <a
            id="wsnavtoggle"
            onClick={() => toggleFun()}
            className="wsanimated-arrow"
          >
            <span />
          </a>
        </div>
        {/* NAVIGATION MENU */}
        <div className="wsmainfull menu clearfix">
          <div className="wsmainwp clearfix">
            {/* HEADER LOGO */}
            <div className="desktoplogo">
              <Link href="/demo-1">
                <a className="logo-black">
                  <img src="/images/logo-01.png" alt="header-logo" />
                </a>
              </Link>
            </div>
            <div className="desktoplogo">
              <Link href="/demo-1">
                <a className="logo-white">
                  <img
                    src={`${
                      whiteLogo
                        ? "/images/logo-white.png"
                        : "/images/logo-02.png"
                    }`}
                    alt="header-logo"
                  />
                </a>
              </Link>
            </div>
            {/* MAIN MENU */}
            <nav className="wsmenu clearfix">
              <div className="overlapblackbg" onClick={() => toggleFun()} />

              <ul
                className={`wsmenu-list ${
                  navHoverColor ? navHoverColor : "nav-skyblue-hover"
                }`}
              >
                {/* MEGAMENU */}
                <li className="mg_link">
                  <span
                    className={`wsmenu-click ${
                      mobileMenuToggle === "home" ? "ws-activearrow" : ""
                    }`}
                    onClick={() => toggleMenu("home")}
                  >
                    <i className="wsmenu-arrow" />
                  </span>
                  <Link href="#">
                    <a>
                      Home <span className="wsarrow" />
                    </a>
                  </Link>
                  <div
                    className="wsmegamenu w-75 clearfix"
                    style={{
                      display: mobileMenuToggle === "home" ? "block" : "",
                    }}
                  >
                    <div className="container">
                      <div className="row">
                        {/* MEGAMENU LINKS */}
                        <ul className="col-md-12 col-lg-3 link-list">
                          <li className="fst-li">
                            <Link href="/demo-1">App Landing</Link>
                          </li>
                          <li>
                            <Link href="/demo-2">App Showcase 1</Link>
                          </li>
                          <li>
                            <Link href="/demo-3">Startup Agency</Link>
                          </li>
                          <li>
                            <Link href="/demo-4">Design Agency</Link>
                          </li>
                          <li>
                            <Link href="/demo-5">Software 1</Link>
                          </li>
                          <li>
                            <Link href="/demo-6">SaaS Service 1</Link>
                          </li>
                          <li>
                            <Link href="/demo-7">Digital Service 1</Link>
                          </li>
                        </ul>
                        {/* MEGAMENU LINKS */}
                        <ul className="col-md-12 col-lg-3 link-list">
                          <li className="fst-li">
                            <Link href="/demo-8">Social Media Marketing</Link>
                          </li>
                          <li>
                            <Link href="/demo-9">Digital Agency</Link>
                          </li>
                          <li>
                            <Link href="/demo-10">SaaS Service 2</Link>
                          </li>
                          <li>
                            <Link href="/demo-11">Desktop Software 1</Link>
                          </li>
                          <li>
                            <Link href="/demo-12">Digital Service 2</Link>
                          </li>
                          <li>
                            <Link href="/demo-13">Software SaaS</Link>
                          </li>
                          <li>
                            <Link href="/demo-14">App Showcase 2</Link>
                          </li>
                        </ul>
                        {/* MEGAMENU LINKS */}
                        <ul className="col-md-12 col-lg-3 link-list">
                          <li className="fst-li">
                            <Link href="/demo-15">Software 2</Link>
                          </li>
                          <li>
                            <Link href="/demo-16">App Showcase 3</Link>
                          </li>
                          <li>
                            <Link href="/demo-17">Desktop Software 2</Link>
                          </li>
                          <li>
                            <Link href="/demo-18">SEO Company</Link>
                          </li>
                          <li>
                            <Link href="/demo-19">Digital Marketing</Link>
                          </li>
                          <li>
                            <Link href="/demo-20">Cyber Security</Link>
                          </li>
                          <li>
                            <Link href="/demo-21">SaaS Service 3</Link>
                          </li>
                        </ul>
                        {/* MEGAMENU LINKS */}
                        <ul className="col-md-12 col-lg-3 link-list">
                          <li className="fst-li">
                            <Link href="/demo-22">Marketing Agency</Link>
                          </li>
                          <li>
                            <Link href="/demo-23">Branding Agency</Link>
                          </li>
                          <li>
                            <Link href="/404">404 Page</Link>
                          </li>
                          <li>
                            <Link href="/demo-24">RTL Version #1</Link>
                          </li>
                          <li>
                            <Link href="/demo-25">RTL Version #2</Link>
                          </li>
                          <li>
                            <Link href="/demo-26">RTL Version #3</Link>
                          </li>
                        </ul>
                      </div>
                      {/* End row */}
                    </div>
                    {/* End container */}
                  </div>
                </li>
                {/* END MEGAMENU */}
                {/* DROPDOWN MENU */}
                <li>
                  <span
                    className={`wsmenu-click ${
                      mobileMenuToggle === "about" ? "ws-activearrow" : ""
                    }`}
                    onClick={() => toggleMenu("about")}
                  >
                    <i className="wsmenu-arrow" />
                  </span>
                  <Link href={`${singlePage ? "/about" : "#"}`}>
                    <a>About {!singlePage && <span className="wsarrow" />}</a>
                  </Link>
                  {!singlePage && (
                    <ul
                      className="sub-menu"
                      style={{
                        display: mobileMenuToggle === "about" ? "block" : "",
                      }}
                    >
                      <li>
                        <Link href="#content-2">Why OLMO?</Link>
                      </li>
                      <li>
                        <Link href="#content-5">Best Solutions</Link>
                      </li>
                      <li>
                        <Link href="#content-3">Integrations</Link>
                      </li>
                      <li>
                        <Link href="#content-10">How It Works</Link>
                      </li>
                      <li>
                        <Link href="#reviews-1">Testimonials</Link>
                      </li>
                    </ul>
                  )}
                </li>
                {/* DROPDOWN MENU */}
                <li>
                  <span
                    className={`wsmenu-click ${
                      mobileMenuToggle === "pages" ? "ws-activearrow" : ""
                    }`}
                    onClick={() => toggleMenu("pages")}
                  >
                    <i className="wsmenu-arrow" />
                  </span>
                  <Link href="#">
                    <a>
                      Pages <span className="wsarrow" />
                    </a>
                  </Link>
                  <div
                    className="wsmegamenu clearfix halfmenu"
                    style={{
                      display: mobileMenuToggle === "pages" ? "block" : "",
                    }}
                  >
                    <div className="container-fluid">
                      <div className="row">
                        {/* Links */}
                        <ul className="col-lg-6 link-list">
                          <li>
                            <Link href="/about">About Us</Link>
                          </li>
                          <li>
                            <Link href="/features">Features &amp; Addons</Link>
                          </li>
                          <li>
                            <Link href="/pricing">Pricing Packages</Link>
                          </li>
                          <li>
                            <Link href="/download">Download Page</Link>
                          </li>
                          <li>
                            <Link href="/projects">Our Projects</Link>
                          </li>
                          <li>
                            <Link href="/project-details">Project Details</Link>
                          </li>
                        </ul>
                        {/* Links */}
                        <ul className="col-lg-6 link-list">
                          <li>
                            <Link href="/team">Meet The Team</Link>
                          </li>
                          <li>
                            <Link href="/faqs">FAQs Page</Link>
                          </li>
                          <li>
                            <Link href="/blog-listing">Blog Listing</Link>
                          </li>
                          <li>
                            <Link href="/single-post">Single Blog Post</Link>
                          </li>
                          <li>
                            <Link href="/terms">Terms &amp; Privacy</Link>
                          </li>
                          <li>
                            <Link href="/contacts">Contact Us</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                {/* END DROPDOWN MENU */}
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple">
                  <Link href={`${singlePage ? "/features" : "#features-8"}`}>
                    Features
                  </Link>
                </li>
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple">
                  <Link href="/pricing">Pricing</Link>
                </li>
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple">
                  <Link href={`${singlePage ? "/faqs" : "#faqs-2"}`}>FAQs</Link>
                </li>
                {/* HEADER BUTTON */}
                <li className="nl-simple">
                  <Link href={`${singlePage ? "/pricing" : "#content-4"}`}>
                    <a
                      className={`btn ${
                        btnCustomHover
                          ? btnCustomHover
                          : "btn-tra-white orange-red-hover"
                      } last-link`}
                    >
                      {getStartText ? "Get Started" : "Let's Started"}
                    </a>
                  </Link>
                </li>
                {/* HEADER SOCIAL LINKS 													
									<li class="nl-simple white-color header-socials ico-20 clearfix" >
										<span><Link href="#" class="ico-facebook"><span class="flaticon-facebook"></span></Link></span>
										<span><Link href="#" class="ico-twitter"><span class="flaticon-twitter"></span></Link></span>
										<span><Link href="#" class="ico-instagram"><span class="flaticon-instagram"></span></Link></span>
										<span><Link href="#" class="ico-dribbble"><span class="flaticon-dribbble"></span></Link></span>	
									</li> */}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
