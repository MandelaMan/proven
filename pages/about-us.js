import Link from "next/dist/client/link";
import Layout from "../src/layout/Layout";

const AboutUs = () => {
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
                    Quaerat sodales sapien and euismod blandit vitae ipsum
                    primis cubilia undo laoreet augue luctus magna and dolor
                    luctus egestas sapien
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
                    src="/myImages/img-5.jpg"
                    alt="about-image"
                  />
                </div>
                {/* IMAGES-2 */}
                <div className="col col-md-7">
                  <img
                    className="img-fluid"
                    src="/myImages/img-4.jpg"
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
          {/* SECTION TITLE */}
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
              {/* FEATURE BOX #1 */}
              <div className="col">
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
                    <h5 className="h5-md">Market Research</h5>
                    {/* Text */}
                    <p className="p-lg">
                      Porta semper lacus cursus feugiat primis ultrice ligula
                      risus auctor tempus feugiat impedit undo auctor felis
                      augue mauris aoreet tempor
                    </p>
                  </div>
                </div>
              </div>
              {/* FEATURE BOX #2 */}
              <div className="col">
                <div className="fbox-4 pl-25 mb-40 wow fadeInUp">
                  {/* Icon */}
                  <div className="fbox-ico">
                    <div className="ico-65">
                      <span className="flaticon-idea" />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="fbox-txt">
                    {/* Title */}
                    <h5 className="h5-md">User Experience</h5>
                    {/* Text */}
                    <p className="p-lg">
                      Porta semper lacus cursus feugiat primis ultrice ligula
                      risus auctor tempus feugiat impedit undo auctor felis
                      augue mauris aoreet tempor
                    </p>
                  </div>
                </div>
              </div>
              {/* FEATURE BOX #3 */}
              <div className="col">
                <div className="fbox-4 pr-25 mb-40 wow fadeInUp">
                  {/* Icon */}
                  <div className="fbox-ico">
                    <div className="ico-65">
                      <span className="flaticon-algorithm" />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="fbox-txt">
                    {/* Title */}
                    <h5 className="h5-md">Professional Services</h5>
                    {/* Text */}
                    <p className="p-lg">
                      Porta semper lacus cursus feugiat primis ultrice ligula
                      risus auctor tempus feugiat impedit undo auctor felis
                      augue mauris aoreet tempor
                    </p>
                  </div>
                </div>
              </div>
              {/* FEATURE BOX #4 */}
              <div className="col">
                <div className="fbox-4 pl-25 mb-40 wow fadeInUp">
                  {/* Icon */}
                  <div className="fbox-ico">
                    <div className="ico-65">
                      <span className="flaticon-increase-1" />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="fbox-txt">
                    {/* Title */}
                    <h5 className="h5-md">Digital Marketing</h5>
                    {/* Text */}
                    <p className="p-lg">
                      Porta semper lacus cursus feugiat primis ultrice ligula
                      risus auctor tempus feugiat impedit undo auctor felis
                      augue mauris aoreet tempor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* END FEATURES-4 WRAPPER */}
        </div>{" "}
        {/* End container */}
      </section>
      <hr className="divider" />
      <section id="team-1" className="wide-50 team-section division">
        <div className="container">
          {/* SECTION TITLE */}
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <div className="section-title title-01 mb-80">
                {/* Title */}
                <h2 className="h2-md">Meet the Team</h2>
                {/* Text */}
                <p className="p-xl">
                  Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                  primis a libero tempus, blandit and cursus varius and magnis
                  sapien
                </p>
              </div>
            </div>
          </div>
          {/* <div className="team-members-wrapper text-center">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
              <div className="col">
                <div className="team-member wow fadeInUp">
                  <div className="team-member-photo">
                    <img
                      className="img-fluid"
                      src="/images/team-8.jpg"
                      alt="team-member-foto"
                    />
                  </div>

                  <div className="team-member-data">
                    <h5 className="h5-sm">Susan Awuor</h5>
                    <p className="p-lg">Founder & C.E.O</p>
                  </div>
                </div>
              </div>{" "}
              <div className="col">
                <div className="team-member wow fadeInUp">
                  <div className="team-member-photo">
                    <img
                      className="img-fluid"
                      src="/images/team-8.jpg"
                      alt="team-member-foto"
                    />
                  </div>

                  <div className="team-member-data">
                    <h5 className="h5-sm">Ted Otieno</h5>
                    <p className="p-lg">Operations Executive</p>
                  </div>
                </div>
              </div>{" "}
              <div className="col">
                <div className="team-member wow fadeInUp">
                  <div className="team-member-photo">
                    <img
                      className="img-fluid"
                      src="/images/team-8.jpg"
                      alt="team-member-foto"
                    />
                  </div>

                  <div className="team-member-data">
                    <h5 className="h5-sm">Yvonne Sure</h5>
                    <p className="p-lg">Marketing & Communications</p>
                  </div>
                </div>
              </div>{" "}
              <div className="col">
                <div className="team-member wow fadeInUp">
                  <div className="team-member-photo">
                    <img
                      className="img-fluid"
                      src="/images/team-8.jpg"
                      alt="team-member-foto"
                    />
                  </div>

                  <div className="team-member-data">
                    <h5 className="h5-sm">Team Member</h5>
                    <p className="p-lg">Head of IT</p>
                  </div>
                </div>
              </div>{" "}
            </div>{" "}
          </div>{" "} */}
          {/* TEAM MEMBERS HOLDER */}
        </div>{" "}
        {/* End container */}
      </section>
    </Layout>
  );
};

export default AboutUs;
