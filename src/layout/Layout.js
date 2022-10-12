import { Fragment, useContext, useEffect } from "react";
// import VideoPopup from "../components/VideoPopup";
// import { VideoContext } from "../context/video";
import { aTagClick } from "../utils/utils";
import Footer from "./Footer";
// import Header from "./Header";
import Navigation from "./Navigation";
import ScrollTop from "./ScrollTop";
import ReactWhatsapp from "react-whatsapp";
import WhatsAppChat from "./WhatsAppChat";

const Layout = ({
  children,
  navLight,
  whiteLogo,
  getStartText,
  btnCustomHover,
  navHoverColor,
  singlePage,
}) => {
  // const videoContext = useContext(VideoContext);
  // const { video } = videoContext;

  useEffect(() => {
    // aTagClick();
  }, []);

  return (
    <Fragment>
      {/* {video.show && <VideoPopup />} */}
      <div id="page" className="page">
        <Navigation
          navLight={navLight}
          whiteLogo={whiteLogo}
          getStartText={getStartText}
          btnCustomHover={btnCustomHover}
          navHoverColor={navHoverColor}
          singlePage={singlePage}
        />
        {children}
        <Footer />
      </div>
      <WhatsAppChat />
      {/* <ScrollTop /> */}
    </Fragment>
  );
};

export default Layout;
