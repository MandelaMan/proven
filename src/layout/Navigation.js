import Link from "next/link";
import { useEffect, useState } from "react";
import { scroll } from "../utils/utils";

const Navigation = ({
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
            <img src="/images/logo-bl.png" alt="mobile-logo" />
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
              <Link href="/">
                <a className="logo-black">
                  <img src="/images/logo-bl.png" alt="header-logo" />
                </a>
              </Link>
            </div>
            <div className="desktoplogo">
              <Link href="/">
                <a className="logo-white">
                  <img
                    src={`${
                      whiteLogo ? "/images/logo-wh.png" : "/images/logo-wh.png"
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
                <li className="nl-simple">
                  <Link href="/#solution">Our solution</Link>
                </li>
                <li>
                  <span
                    className={`wsmenu-click ${
                      mobileMenuToggle === "about" ? "ws-activearrow" : ""
                    }`}
                    onClick={() => toggleMenu("about")}
                  >
                    <i className="wsmenu-arrow" />
                  </span>
                  <Link href="/services">
                    <a>
                      Our services <span className="wsarrow" />
                    </a>
                  </Link>
                  <ul
                    className="sub-menu"
                    style={{
                      display: mobileMenuToggle === "about" ? "block" : "",
                    }}
                  >
                    <li>
                      <Link href="/services/#plumbing">Plumbing</Link>
                    </li>
                    <li>
                      <Link href="/services/#electrical">Electricity</Link>
                    </li>
                    <li>
                      <Link href="/services/#masonry">Masonry</Link>
                    </li>
                  </ul>
                </li>
                <li className="nl-simple">
                  <Link href="/about-us">About us</Link>
                </li>
                <li className="nl-simple">
                  <Link href="/contact-us">Contact us</Link>
                </li>
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple">
                  <Link href="/faqs">FAQs</Link>
                </li>
                {/* HEADER BUTTON */}
                {/* <li className="nl-simple">
                  <Link href={`${singlePage ? "/pricing" : "#content-4"}`}>
                    <a
                      className={`btn ${
                        btnCustomHover
                          ? btnCustomHover
                          : "btn-tra-white orange-red-hover"
                      } last-link`}
                    >
                      How we Work
                    </a>
                  </Link>
                </li> */}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
