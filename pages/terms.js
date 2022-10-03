import Link from "next/dist/client/link";
import Layout from "../src/layout/Layout";

const terms = () => {
  return (
    <Layout
      btnCustomHover="btn btn-skyblue tra-grey-hover last-link"
      singlePage
    >
      <section
        id="terms-page"
        className="bg-snow wide-70 inner-page-hero terms-section division"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="terms-title text-center">
                <h2 className="h2-md">Our Terms &amp; Conditions</h2>
              </div>
              <hr className="divider" />
              <div className="terms-box mt-30">
                <p className="p-md">
                  This User Agreement (this{" "}
                  <span className="txt-500">“Agreement”</span>) is a contract
                  between You and Proven App Limited. You must read, agree to,
                  and accept all the terms and conditions contained in this
                  Agreement to use Our Services. This Agreement includes and
                  hereby incorporates by reference other important agreements
                  and documents, as they may be in effect and modified from time
                  to time.
                </p>
                <p className="p-md">
                  <span className="txt-500">
                    <b>
                      YOU UNDERSTAND THAT BY USING OUR SERVICES AND/OR ACCESSING
                      THE PLATFORM YOU AGREE TO BE BOUND BY THIS AGREEMENT.{" "}
                    </b>
                  </span>
                </p>
                <p className="p-md">
                  <span className="txt-500">
                    <b>
                      IF YOU DO NOT ACCEPT THE TERMS OF SERVICE IN ITS ENTIRETY,
                      YOU MUST NOT ACCESS THE PLATFORM OR USE OUR SERVICES.
                    </b>
                  </span>
                </p>

                <h6 className="h6-lg bold-me">Contents</h6>

                <ol className="simple-list">
                  <li className="list-item">
                    <p className="p-md">
                      <span className="txt-200">
                        Definition and Interpretation of Terms
                      </span>
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-md">
                      <span className="txt-200">
                        Proven App Limited Services
                      </span>
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-md">
                      <span className="txt-200">
                        Relationship between the Parties
                      </span>
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-md">
                      <span className="txt-200">Registration and account</span>
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-md">
                      <span className="txt-200">Duration of the Agreement</span>
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-md">
                      <span className="txt-200">
                        Rules of Conduct in Connection with Use of Our Platform
                      </span>
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-md">
                      <span className="txt-200">
                        Rules of Conduct with regards to Independent Contractor
                      </span>
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-md">
                      <span className="txt-200">Payments</span>
                      <br />
                      <span className="txt-100">
                        8.1. Payment to Independent Contractor
                      </span>
                      <br />
                      <span className="txt-100">8.2. Payment to Us</span>
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-md">
                      <span className="txt-200">Warranties</span>
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-md">
                      <span className="txt-200">Non Circumvention</span>
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-md">
                      <span className="txt-200">Intellectual Property</span>
                      <br />
                      <span className="txt-100">11.1. Ownership</span>
                      <br />
                      <span className="txt-100">11.2. Restrictions</span>
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-md">
                      <span className="txt-200">Confidentiality</span>
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-md">
                      <span className="txt-200">Privacy</span>
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-md">
                      <span className="txt-200">
                        Disclosure of Personal Information
                      </span>
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-md">
                      <span className="txt-200">Limitation of Liability</span>
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-md">
                      <span className="txt-200">Indemnity</span>
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-md">
                      <span className="txt-200">Insurance claims</span>
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-md">
                      <span className="txt-200">Loss of property</span>
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-md">
                      <span className="txt-200">Assignment</span>
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-md">
                      <span className="txt-200">Termination</span>
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-md">
                      <span className="txt-200">Variation of Agreement</span>
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-md">
                      <span className="txt-200">Governing law</span>
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-md">
                      <span className="txt-200">Dispute resolution</span>
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-md">
                      <span className="txt-200">Notices</span>
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-md">
                      <span className="txt-200">Force Majeure</span>
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-md">
                      <span className="txt-200">Entire Agreement</span>
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-md">
                      <span className="txt-200">Severability</span>
                    </p>
                  </li>
                </ol>
                <p className="p-md">
                  In consideration of the payment of the service fees as herein
                  provided, We agree to provide Our Services to You under the
                  terms hereunder.
                </p>
              </div>
              <div className="terms-box">
                <h5 className="h5-lg">
                  Definition and Interpretation of Terms
                </h5>
                <p className="p-md">
                  In this Contract, unless the context otherwise requires, the
                  following expressions shall have the following meanings:
                </p>
                <p className="p-md">
                  <span className="txt-500 bold-me">“Client”</span>&nbsp;means
                  the person, natural or legal, who obtains Skilled Services
                  from the Independent Contractor through the Proven App
                  Platform.
                </p>
                <p className="p-md">
                  <span className="txt-500 bold-me">
                    “Confidential Information”
                  </span>
                  &nbsp;means know-how, trade secrets and other information of a
                  confidential nature (including, without limitation, all
                  proprietary technical, industrial and commercial information,
                  customers’ and suppliers’ data and techniques in whatever form
                  held as well as any information regarding the business and the
                  contents of this Agreement) disclosed by one party(discloser)
                  to another party(recipient) verbally, in writing, or by
                  inspection of tangible objects; and excludes any information
                  that was:
                </p>
                <ol className="simple-list" type="I">
                  <li className="list-item">
                    <p className="p-md">
                      previously known to the recipient without an obligation of
                      confidentiality;
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                      acquired by the recipient from a third party with the
                      right to make such disclosure;
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                      which becomes publicly available through no fault of the
                      recipient.
                    </p>
                  </li>
                </ol>
                <p className="p-md">
                  <span className="txt-500 bold-me">“Contract”</span>
                  &nbsp;means this agreement and the terms and conditions
                  contained herein.
                </p>
                <p className="p-md">
                  <span className="txt-500 bold-me">“Dispute”</span>
                  &nbsp;means any dispute, action, claim, controversy or cause
                  of action among the parties arising out of or in connection
                  with this agreement or any term, condition or provision
                  hereof, relating to the existence, validity, interpretation,
                  construction, performance, enforcement and termination of this
                  agreement.
                </p>
                <p className="p-md">
                  <span className="txt-500 bold-me">“Effective Date”</span>
                  &nbsp;means the date from which this Agreement comes into
                  effect.
                </p>
                <p className="p-md">
                  <span className="txt-500 bold-me">
                    “Independent Contractor”
                  </span>
                  &nbsp;means the person, natural or legal, who provides Skilled
                  Services to You through the Proven App Platform.
                </p>
                <p className="p-md">
                  <span className="txt-500 bold-me">“Marks”</span>
                  &nbsp;means trademarks, service marks, trade names,
                  copyrights, logos, slogans and other identifying symbols of a
                  party.
                </p>
                <p className="p-md">
                  <span className="txt-500 bold-me">“Our Fees”</span>
                  &nbsp;means the applicable fee payable to Us by You as
                  consideration for the use of Our Services.
                </p>
                <p className="p-md">
                  <span className="txt-500 bold-me">“Our Services”</span>
                  &nbsp;means the services We render to You pursuant to this
                  contract and include but is not limited to:
                </p>
                <ol className="simple-list" type="I">
                  <li className="list-item">
                    <p className="p-md">
                      Our Independent Contractor matching service where We
                      provide You with contact details and relevant information
                      relating to, or otherwise facilitating connections with an
                      Independent Contractor to provide the needed skilled
                      service.
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                      Our Escrow services whereby We hold any asset of value or
                      money, prepaid by You, on behalf of the Independent
                      Contractor and Yourself pursuant to a Service Agreement as
                      You receive the skilled service of the Independent
                      Contractor.
                    </p>
                  </li>
                </ol>
                <p className="p-md">
                  <span className="txt-500 bold-me">“Personal Data”</span>
                  &nbsp;means any information obtained in connection with this
                  Agreement:
                </p>
                <ol className="simple-list" type="I">
                  <li className="list-item">
                    <p className="p-md">
                      relating to an identified or identifiable natural person;
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                      that can reasonably be used to identify or authenticate an
                      individual, including but not limited to name, contact
                      information, precise location information, persistent
                      identifiers; and
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                      any information that may otherwise be considered “personal
                      data” or “personal information” under the applicable law.
                    </p>
                  </li>
                </ol>
                <p className="p-md">
                  <span className="txt-500 bold-me">“Platform”</span>
                  &nbsp;means Proven App Platform.
                </p>
                <p className="p-md">
                  <span className="txt-500 bold-me">“Proven App Platform”</span>
                  &nbsp;means an online interface in the form of any software
                  including a website or a part thereof and applications
                  including, the website, on the domain name, www.proven.co.ke
                  and the Proven mobile applications.
                </p>
                <p className="p-md">
                  <span className="txt-500 bold-me">
                    “Schedule of Service Charges”
                  </span>
                  &nbsp;means the schedule attached hereto.
                </p>
                <p className="p-md">
                  <span className="txt-500 bold-me">“Service Agreement”</span>
                  &nbsp;means any agreement, written, oral, express or implied,
                  entered into between You and the Independent Contractor for
                  the provision of Skilled Services, and to which We are not a
                  party.
                </p>
                <p className="p-md">
                  <span className="txt-500 bold-me">“Service Charges”</span>
                  &nbsp;means the consideration paid to Ourselves.
                </p>
                <p className="p-md">
                  <span className="txt-500 bold-me">“Skilled Services”</span>
                  &nbsp;means a service requiring specialized knowledge and
                  skill.
                </p>
                <p className="p-md">
                  Reference to&nbsp;
                  <span className="txt-500 bold-me">“You”</span>&nbsp;or&nbsp;
                  <span className="txt-500 bold-me">“Your”</span>
                  means the Client.
                </p>
                <p className="p-md">
                  Reference to&nbsp;
                  <span className="txt-500 bold-me">“Us”</span>&nbsp;
                  <span className="txt-500 bold-me">“Our”</span>&nbsp;or&nbsp;
                  <span className="txt-500 bold-me">“We”</span>
                  means Proven App Limited and its affiliates.
                </p>
                <p className="p-md">
                  The words&nbsp;
                  <span className="txt-500 bold-me">“including”</span>
                  &nbsp;and&nbsp;
                  <span className="txt-500 bold-me">“include”</span>
                  &nbsp;maean&nbsp;
                  <span className="txt-500 bold-me">
                    “including but not limited to”
                  </span>
                  &nbsp; means the Client.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default terms;
