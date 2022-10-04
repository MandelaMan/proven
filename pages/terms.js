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
                <p className="p-sm">
                  This User Agreement (this{" "}
                  <span className="txt-500">“Agreement”</span>) is a contract
                  between You and Proven App Limited. You must read, agree to,
                  and accept all the terms and conditions contained in this
                  Agreement to use Our Services. This Agreement includes and
                  hereby incorporates by reference other important agreements
                  and documents, as they may be in effect and modified from time
                  to time.
                </p>
                <p className="p-sm">
                  <span className="txt-500">
                    <b>
                      YOU UNDERSTAND THAT BY USING OUR SERVICES AND/OR ACCESSING
                      THE PLATFORM YOU AGREE TO BE BOUND BY THIS AGREEMENT.{" "}
                    </b>
                  </span>
                </p>
                <p className="p-sm">
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
                    <p className="p-sm">
                      <span className="txt-200">
                        Definition and Interpretation of Terms
                      </span>
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-sm">
                      <span className="txt-200">
                        Proven App Limited Services
                      </span>
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-sm">
                      <span className="txt-200">
                        Relationship between the Parties
                      </span>
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-sm">
                      <span className="txt-200">Registration and account</span>
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-sm">
                      <span className="txt-200">Duration of the Agreement</span>
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-sm">
                      <span className="txt-200">
                        Rules of Conduct in Connection with Use of Our Platform
                      </span>
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-sm">
                      <span className="txt-200">
                        Rules of Conduct with regards to Independent Contractor
                      </span>
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-sm">
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
                    <p className="p-sm">
                      <span className="txt-200">Warranties</span>
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-sm">
                      <span className="txt-200">Non Circumvention</span>
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-sm">
                      <span className="txt-200">Intellectual Property</span>
                      <br />
                      <span className="txt-100">11.1. Ownership</span>
                      <br />
                      <span className="txt-100">11.2. Restrictions</span>
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-sm">
                      <span className="txt-200">Confidentiality</span>
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-sm">
                      <span className="txt-200">Privacy</span>
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-sm">
                      <span className="txt-200">
                        Disclosure of Personal Information
                      </span>
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-sm">
                      <span className="txt-200">Limitation of Liability</span>
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-sm">
                      <span className="txt-200">Indemnity</span>
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-sm">
                      <span className="txt-200">Insurance claims</span>
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-sm">
                      <span className="txt-200">Loss of property</span>
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-sm">
                      <span className="txt-200">Assignment</span>
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-sm">
                      <span className="txt-200">Termination</span>
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-sm">
                      <span className="txt-200">Variation of Agreement</span>
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-sm">
                      <span className="txt-200">Governing law</span>
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-sm">
                      <span className="txt-200">Dispute resolution</span>
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-sm">
                      <span className="txt-200">Notices</span>
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-sm">
                      <span className="txt-200">Force Majeure</span>
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-sm">
                      <span className="txt-200">Entire Agreement</span>
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-sm">
                      <span className="txt-200">Severability</span>
                    </p>
                  </li>
                </ol>
                <p className="p-sm">
                  In consideration of the payment of the service fees as herein
                  provided, We agree to provide Our Services to You under the
                  terms hereunder.
                </p>
              </div>
              <div className="terms-box">
                <h5 className="h5-md">
                  Definition and Interpretation of Terms
                </h5>
                <p className="p-sm">
                  In this Contract, unless the context otherwise requires, the
                  following expressions shall have the following meanings:
                </p>
                <p className="p-sm">
                  <span className="txt-500 bold-me">“Client”</span>&nbsp;means
                  the person, natural or legal, who obtains Skilled Services
                  from the Independent Contractor through the Proven App
                  Platform.
                </p>
                <p className="p-sm">
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
                    <p className="p-sm">
                      previously known to the recipient without an obligation of
                      confidentiality;
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-sm">
                      acquired by the recipient from a third party with the
                      right to make such disclosure;
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-sm">
                      which becomes publicly available through no fault of the
                      recipient.
                    </p>
                  </li>
                </ol>
                <p className="p-sm">
                  <span className="txt-500 bold-me">“Contract”</span>
                  &nbsp;means this agreement and the terms and conditions
                  contained herein.
                </p>
                <p className="p-sm">
                  <span className="txt-500 bold-me">“Dispute”</span>
                  &nbsp;means any dispute, action, claim, controversy or cause
                  of action among the parties arising out of or in connection
                  with this agreement or any term, condition or provision
                  hereof, relating to the existence, validity, interpretation,
                  construction, performance, enforcement and termination of this
                  agreement.
                </p>
                <p className="p-sm">
                  <span className="txt-500 bold-me">“Effective Date”</span>
                  &nbsp;means the date from which this Agreement comes into
                  effect.
                </p>
                <p className="p-sm">
                  <span className="txt-500 bold-me">
                    “Independent Contractor”
                  </span>
                  &nbsp;means the person, natural or legal, who provides Skilled
                  Services to You through the Proven App Platform.
                </p>
                <p className="p-sm">
                  <span className="txt-500 bold-me">“Marks”</span>
                  &nbsp;means trademarks, service marks, trade names,
                  copyrights, logos, slogans and other identifying symbols of a
                  party.
                </p>
                <p className="p-sm">
                  <span className="txt-500 bold-me">“Our Fees”</span>
                  &nbsp;means the applicable fee payable to Us by You as
                  consideration for the use of Our Services.
                </p>
                <p className="p-sm">
                  <span className="txt-500 bold-me">“Our Services”</span>
                  &nbsp;means the services We render to You pursuant to this
                  contract and include but is not limited to:
                </p>
                <ol className="simple-list" type="I">
                  <li className="list-item">
                    <p className="p-sm">
                      Our Independent Contractor matching service where We
                      provide You with contact details and relevant information
                      relating to, or otherwise facilitating connections with an
                      Independent Contractor to provide the needed skilled
                      service.
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-sm">
                      Our Escrow services whereby We hold any asset of value or
                      money, prepaid by You, on behalf of the Independent
                      Contractor and Yourself pursuant to a Service Agreement as
                      You receive the skilled service of the Independent
                      Contractor.
                    </p>
                  </li>
                </ol>
                <p className="p-sm">
                  <span className="txt-500 bold-me">“Personal Data”</span>
                  &nbsp;means any information obtained in connection with this
                  Agreement:
                </p>
                <ol className="simple-list" type="I">
                  <li className="list-item">
                    <p className="p-sm">
                      relating to an identified or identifiable natural person;
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-sm">
                      that can reasonably be used to identify or authenticate an
                      individual, including but not limited to name, contact
                      information, precise location information, persistent
                      identifiers; and
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-sm">
                      any information that may otherwise be considered “personal
                      data” or “personal information” under the applicable law.
                    </p>
                  </li>
                </ol>
                <p className="p-sm">
                  <span className="txt-500 bold-me">“Platform”</span>
                  &nbsp;means Proven App Platform.
                </p>
                <p className="p-sm">
                  <span className="txt-500 bold-me">“Proven App Platform”</span>
                  &nbsp;means an online interface in the form of any software
                  including a website or a part thereof and applications
                  including, the website, on the domain name, www.proven.co.ke
                  and the Proven mobile applications.
                </p>
                <p className="p-sm">
                  <span className="txt-500 bold-me">
                    “Schedule of Service Charges”
                  </span>
                  &nbsp;means the schedule attached hereto.
                </p>
                <p className="p-sm">
                  <span className="txt-500 bold-me">“Service Agreement”</span>
                  &nbsp;means any agreement, written, oral, express or implied,
                  entered into between You and the Independent Contractor for
                  the provision of Skilled Services, and to which We are not a
                  party.
                </p>
                <p className="p-sm">
                  <span className="txt-500 bold-me">“Service Charges”</span>
                  &nbsp;means the consideration paid to Ourselves.
                </p>
                <p className="p-sm">
                  <span className="txt-500 bold-me">“Skilled Services”</span>
                  &nbsp;means a service requiring specialized knowledge and
                  skill.
                </p>
                <p className="p-sm">
                  Reference to&nbsp;
                  <span className="txt-500 bold-me">“You”</span>&nbsp;or&nbsp;
                  <span className="txt-500 bold-me">“Your”</span>
                  means the Client.
                </p>
                <p className="p-sm">
                  Reference to&nbsp;
                  <span className="txt-500 bold-me">“Us”</span>&nbsp;
                  <span className="txt-500 bold-me">“Our”</span>&nbsp;or&nbsp;
                  <span className="txt-500 bold-me">“We”</span>&nbsp; means
                  Proven App Limited and its affiliates.
                </p>
                <p className="p-sm">
                  The words&nbsp;
                  <span className="txt-500 bold-me">“including”</span>
                  &nbsp;and&nbsp;
                  <span className="txt-500 bold-me">“include”</span>
                  &nbsp;means&nbsp;
                  <span className="txt-500 bold-me">
                    “including but not limited to”
                  </span>
                  &nbsp;means the Client.
                </p>
              </div>
              <div className="terms-box">
                <h5 className="h5-md">Proven App Limited Services</h5>
                <p className="p-sm">
                  Whereas Our Services constitute a technology Platform that
                  enables Client users, such as Yourself, to request for
                  provision of Skilled Services from Independent Contractors,
                  You acknowledge that:
                </p>
                <ol className="simple-list" type="1">
                  <li className="list-item">
                    <p className="p-sm">We do not provide Skilled Services;</p>
                  </li>
                  <li className="list-item">
                    <p className="p-sm">
                      We do not give any representation or warranties on the
                      quality of the Skilled Services You shall procure through
                      Our Services;
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-sm">
                      We give no warranties whatsoever on the qualifications or
                      suitability of the Independent Contractors on the
                      Platform; and
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-sm">
                      We give no warranties whatsoever on the Skilled Services
                      that shall be provided to You by the Independent
                      Contractors on the Platform.
                    </p>
                  </li>
                </ol>
                <p className="p-sm">
                  We shall provide You with the contact information of
                  Independent Contractors who are willing to provide You with
                  the Skilled Services You request on the Platform.
                </p>
                <p className="p-sm">
                  Our Platform is solely a venue for communications enabling the
                  connection between You and the Independent Contractor for the
                  procurement of Skilled Services.
                </p>
              </div>
              <div className="terms-box">
                <h5 className="h5-md">Relationship between the Parties</h5>
                <p className="p-sm">
                  Except as otherwise expressly provided for herein, nothing in
                  this contract shall be deemed to create any joint venture,
                  partnership, or an agency relationship between the parties,
                  and no party shall have the right to enter into contracts on
                  behalf of, to legally bind, to incur debt on behalf of, or to
                  otherwise incur any liability or obligation on behalf of the
                  other party hereto, in the absence of a separate agreement in
                  writing executed by an authorized representative of the other
                  party.
                </p>
                <p className="p-sm">
                  You expressly acknowledge that there is no employment or
                  agency relationship between Us and the Independent
                  Contractors.
                </p>
                <p className="p-sm">
                  By agreeing to use Our Services, You grant Us the right to
                  access details of the job specifications and service agreement
                  between You and the Independent Contractor.
                </p>
              </div>
              <div className="terms-box">
                <h5 className="h5-md">Registration and account</h5>
                <p className="p-sm">
                  To use Our Services as a Client, You must be of the age of
                  majority and by using Our Services or by registering for the
                  Platform, You warrant and represent to Us that You have
                  attained the age of majority.
                </p>
                <p className="p-sm">
                  To access and use Our Services, You shall register for an
                  account with Our Platform by completing and submitting the
                  registration form. You represent and warrant that all
                  information provided in the registration form is complete and
                  accurate.
                </p>
                <p className="p-sm">
                  Upon registration, You shall provide Us with Your email
                  address, set Your user ID and password and You agree to: keep
                  Your password confidential, notify Us in writing immediately
                  You become aware of any disclosure of Your password, be
                  responsible for any activity on the Platform arising out of
                  any failure to keep Your password confidential, and that You
                  shall solely be liable for any losses arising out of such a
                  failure.
                </p>
                <p className="p-sm">You shall use Your account exclusively.</p>
                <p className="p-sm">
                  You shall not transfer Your account to any third party.
                  Permitting a third party to manage Your account on Your behalf
                  shall constitute a breach of this Contract.
                </p>
                <p className="p-sm">
                  We may suspend or cancel Your account, and/or edit Your
                  account details, at any time at Our sole discretion and
                  without notice or explanation.
                </p>
                <p className="p-sm">You may cancel Your account at any time.</p>
              </div>
              <div className="terms-box">
                <h5 className="h5-md">Duration of the Agreement</h5>
                <p className="p-sm">
                  This Agreement shall commence on the Effective Date and shall
                  continue indefinitely thereafter unless earlier terminated as
                  provided herein below or otherwise revised by Us.
                </p>
              </div>
              <div className="terms-box">
                <h5 className="h5-md">
                  Rules of Conduct in Connection with Use of Our Platform
                </h5>
                <p className="p-sm">
                  By agreeing to use Our Services, You agree to be bound by the
                  rules of conduct hereunder.
                </p>
                <p className="p-sm">
                  You shall not post, transmit or otherwise make available
                  through or in connection with Our Platform any material that
                  is:-
                </p>
                <ol className="simple-list" type="I">
                  <li className="list-item">
                    <p className="p-sm">
                      threatening, harassing, degrading, hateful, intimidating,
                      or otherwise fails to respect the rights and dignity of
                      others;
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-sm">
                      defamatory, libellous, fraudulent or otherwise tortious;
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-sm">
                      obscene, indecent, pornographic or otherwise
                      objectionable;
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-sm">
                      protected by copyright, trademark, trade secret, right of
                      publicity or privacy or any other proprietary right,
                      without the express prior written consent of the
                      applicable owner; or
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-sm">
                      a virus, worm, spyware or other computer code, file or
                      program that is or is potentially harmful or invasive or
                      intended to damage or hijack the operation of, or alter
                      the normal operation of, or monitor the use of any
                      hardware, software or equipment;
                    </p>
                  </li>
                </ol>
                <p className="p-sm">
                  You agree not to use the Platform for any purpose that is not
                  relevant to or permitted on Our Services.
                </p>
                <p className="p-sm">
                  A breach of any term of this clause shall result in
                  termination of Our Services without further reference to You
                  and without prejudice to any other rights available to Us.
                </p>
              </div>
              <div className="terms-box">
                <h5 className="h5-md">
                  Rules of Conduct with regards to Independent Contractor
                </h5>
                <p className="p-sm">
                  In the course of delivery of Skilled Services by the
                  Independent Contractor, You agree to act professionally and
                  courteously and shall at all times maintain a professional and
                  ethical relationship with the Independent Contractor.
                </p>
                <p className="p-sm">
                  You agree to adhere to set timelines of receiving Skilled
                  Services and take all reasonable efforts to ensure the
                  Independent Contractor shall be able to render Skilled
                  Services without undue delays.
                </p>
                <p className="p-sm">
                  You agree to comply with all applicable laws and regulations
                  in the course of the Independent Contractor performing
                  rendering Skilled Service.
                </p>
                <p className="p-sm">
                  A breach of any term of this clause shall result in
                  termination of Our Services without further reference to You
                  and without prejudice to any other rights available to Us.
                </p>
              </div>
              <div className="terms-box">
                <h5 className="h5-md">Payment to Independent Contractor</h5>
                <ol className="simple-list" type="1">
                  <li className="list-item">
                    <p className="p-sm">
                      You acknowledge that You shall contract for the provision
                      of Skilled Services directly with the Independent
                      Contractor on the Platform and that We are not a party to
                      any Service Agreement between You and the Independent
                      Contractors.
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-sm">
                      Payment for Skilled Services rendered shall be made by You
                      to the Independent Contractor.
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-sm">
                      Payments to Independent Contractors shall be made through
                      a designated payment method using Our Escrow Account upon
                      request.
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-sm">
                      You are required to make payments to the Independent
                      Contractor prior to commencement of rendering of Skilled
                      Services under the Service Agreement.
                    </p>
                  </li>
                </ol>
                <p className="p-sm">Payment to Us</p>
                <ol className="simple-list" type="1">
                  <li className="list-item">
                    <p className="p-sm">
                      We shall charge You certain fees for the use of Our
                      Services. Such fees will be as per Our Fee Schedule
                      determined by Us and may be revised from time to time by
                      Ourselves at Our sole discretion.
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-sm">
                      For every service We offer, We shall, at Our option,
                      deduct Our fees automatically from any funds We hold for
                      You or in Your Escrow Account or request You to make
                      payment for the service.
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-sm">
                      By using Our Services, You agree to pay all applicable
                      Fees or charges in connection with Your use of Our
                      Services and We shall have all rights permissible under
                      law and at Our sole discretion to recover payment of Our
                      Fees and all costs and expenses incurred, including
                      reasonable attorney fees from You as a debt.
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-sm">
                      All fees payable under these terms shall be deemed
                      exclusive of Value Added Tax or other similar taxes, and
                      shall be paid free and clear of any other deductions.
                    </p>
                  </li>
                </ol>
              </div>
              <div className="terms-box">
                <h5 className="h5-md">Warranties</h5>
                <p className="p-sm">
                  We do not guarantee the accuracy, completeness, or usefulness
                  of any content or information including, but not limited to
                  opinions, advice, statements and offers made on Our Platform
                  neither adopt nor endorse nor are responsible for accuracy or
                  reliability of any such information or content. Under no
                  circumstances shall We be responsible for any loss or damage
                  resulting from anyone’s reliance on any information or content
                  posted on the Platform.
                </p>
                <p className="p-sm">
                  We do not warrant that We confirm the identity of the
                  Independent Contractors or vet them, check, audit or monitor
                  any information provided to Us as to the completeness,
                  accuracy or usefulness of such content or information.
                </p>
                <p className="p-sm">
                  We do not make any warranties as to the quality of Skilled
                  Services to be offered by the Independent Contractor nor do We
                  guarantee that the Skilled Services offered will be without
                  fault or will meet Your expectations.
                </p>
                <p className="p-sm">
                  We provide Our Services on an "as is" basis and grant no
                  warranties of any kind, express, implied, statutory, in
                  connection with the performance of Our Services under this
                  Contract.
                </p>
                <p className="p-sm">
                  We will not be responsible for the enforcement of any
                  contractual obligations arising out of an agreement between
                  You and the Independent Contractor and We will have no
                  obligation to mediate between the parties to any such
                  agreement.
                </p>
                <p className="p-sm">
                  We reserve the right to discontinue or alter any or all of Our
                  Services and to stop at any time at Our sole discretion
                  without notice or explanation, and You will not be entitled to
                  any compensation upon the discontinuance or alteration of any
                  of Our Services.
                </p>
                <p className="p-sm">
                  By registering using Our Platform, You warrant, acknowledge
                  and represent to us that:
                </p>
                <ol className="simple-list" type="1">
                  <li className="list-item">
                    <p className="p-sm">
                      You have been requested to obtain Your own independent
                      legal advice on this contract prior to signing this
                      contract;
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-sm">
                      You have been given adequate time to obtain independent
                      legal advice;
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-sm">
                      You confirm that You have fully understood this contract;
                      and
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-sm">
                      You have obtained independent legal advice.
                    </p>
                  </li>
                </ol>
              </div>
              <div className="terms-box">
                <h5 className="h5-md">Non Circumvention</h5>
                <p className="p-sm">
                  By agreeing to use Our Platform, You agree not to contact any
                  Independent Contractor who has previously offered their
                  Skilled Services to You through Our Platform to provide You
                  with skilled Service outside of the Platform without Our
                  written consent, which consent shall not be unreasonably
                  withheld but shall be subject to payment of Our introductory
                  fees.
                </p>
                <p className="p-sm">
                  Should You contract an Independent Contractor who has
                  previously offered their Skilled Services to You through Our
                  Platform to provide You with skilled Service outside of the
                  Platform, without Our explicit written consent, We shall be
                  entitled to receive double Our prevailing fees from You.
                </p>
                <p className="p-sm">
                  Any bookings and requests to procure Skilled Services shall be
                  made through Our Platform and shall be provided on an “as is”
                  basis.
                </p>
                <p className="p-sm">
                  Where You wish to make specific bookings for a particular
                  Independent Contractor, You shall make such requests through
                  Our Platform.
                </p>
              </div>
              <div className="terms-box">
                <h5 className="h5-md">Intellectual Property</h5>
                <p className="p-sm">
                  Ownership
                  <br />
                  We own all rights to the marks of Proven App, including all
                  intellectual property rights therein, which shall be the
                  property of Us, Our affiliates or respective licensors.
                </p>
                <p className="p-sm">
                  Restrictions
                  <br />
                  You shall not: remove any copyright, trademark, or other
                  proprietary marks, or reproduce, modify, prepare derivative
                  works based upon, distribute, sell, resell, license, lease,
                  transfer, publicly display, publicly perform, transmit,
                  stream, broadcast, or otherwise exploit Our Services except as
                  otherwise permitted by Us; decompile, reverse engineer or
                  disassemble Our Services except as may be permitted under
                  applicable law; link to, mirror or frame any portion of Our
                  Services; cause or launch any programs or scripts for
                  scraping, indexing, surveying, or otherwise data mining any
                  portion of Our Services or unduly burdening or hindering the
                  operation and/or functionality of any aspect of Our Services;
                  or attempt to gain unauthorized access to or impair any aspect
                  of Our Services or its related systems or networks.
                </p>
              </div>
              <div className="terms-box">
                <h5 className="h5-md">Confidentiality</h5>
                <p className="p-sm">
                  Each party agrees that it will not disclose confidential
                  information to any third parties, or use in any way other than
                  for the purposes for which such information was collected, as
                  required by law or as is necessary to perform this Agreement.
                </p>
                <p className="p-sm">
                  Each party shall ensure that confidential information will
                  only be made available upon prior written consent of the
                  discloser and to its employees and agents who need to know
                  such confidential information and who are bound by written
                  obligations of confidentiality to protect the confidential
                  information.
                </p>
                <p className="p-sm">
                  Where the discloser gives authority to disclose confidential
                  information or disclosure is made as a requirement of law, the
                  recipient shall give prior written notice to the discloser and
                  reasonably assist in obtaining a protective order to make such
                  disclosure.
                </p>
                <p className="p-sm">
                  Upon termination of this Agreement, and as requested by the
                  discloser, each party shall not disclose confidential
                  information, and shall maintain the confidentiality of such
                  information. Each party shall deliver to discloser (or destroy
                  upon request by disclosing party) all materials or documents
                  containing the discloser’s confidential, together with all
                  copies thereof in whatever form.
                </p>
                <p className="p-sm">
                  You agree to use, disclose, store, retain or otherwise process
                  Personal Data obtained in Your use of Our software services
                  solely to perform this Contract and shall maintain the
                  accuracy and integrity of such Personal Data provided by Us
                  and in Your possession, custody or control.
                </p>
              </div>
              <div className="terms-box">
                <h5 className="h5-md">Privacy</h5>
                <p className="p-sm">
                  By providing Your email address, You agree to receive certain
                  communications in connection with Our Services including, but
                  not limited to email letters with information and
                  notifications. By providing Your phone number and using Our
                  Services, You agree that We may, to the extent permitted by
                  applicable law, use Your mobile phone number for calls and or
                  text (SMS) messages, to assist in facilitating the Skilled
                  Services to be provided by the Independent Contractor.
                </p>
                <p className="p-sm">
                  By agreeing to use Our Services, You agree to Our use of a
                  third party to mask Your telephone number when You call or
                  exchange text (SMS) messages with the Independent Contractor
                  using a telephone number provided by Us. During this process,
                  We will receive in real-time and store call data, including
                  the date and time of the call or text (SMS) message, the
                  parties phone numbers, and the content of the text (SMS)
                  messages. You agree to the masking process described above and
                  to Our use and disclosure of this call data for legitimate
                  business purposes.
                </p>
              </div>
              <div className="terms-box">
                <h5 className="h5-md">Disclosure of Personal Information </h5>
                <p className="p-sm">
                  We may provide Your information, including Your personal
                  information, to Our subsidiaries, affiliated companies, or
                  subcontractors, so such parties can, among other things:
                </p>
                <ol className="simple-list" type="I">
                  <li className="list-item">
                    <p className="p-sm">
                      perform services and/or process such information on Our
                      behalf;
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-sm">
                      use the information to offer You greater functionality and
                      enhanced services or related product and service
                      opportunities; and
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-sm">
                      communicate these opportunities to You.
                    </p>
                  </li>
                </ol>
                <p className="p-sm">
                  When We do this, the recipients of Your information may not be
                  bound by contracts with Us to maintain the privacy of Your
                  information.
                </p>
                <p className="p-sm">
                  We may share non-personal information (such as anonymous
                  website and/or application use data) with third parties to
                  assist them in understanding Our Services, including users’
                  use of Our Services and the success of advertisements and
                  promotions.
                </p>
                <p className="p-sm">
                  We may share non-personally identifiable user data, such as
                  aggregated gender, age, geographic and usage data (without the
                  inclusion of Your name or other identifying information) to
                  advertisers and other third parties for their marketing and
                  promotional purposes.
                </p>
                <p className="p-sm">
                  We may use analytics services provided by third parties that
                  use cookies and other similar technologies to collect
                  information about Our Services without identifying individual
                  visitors. The third parties that provide Us with these
                  services may also collect information about Your use of
                  third-party websites and applications.
                </p>
                <p className="p-sm">
                  We may share location-based information with third parties for
                  their marketing and promotional purposes if You have allowed
                  location-based services on Your computing device.
                </p>
                <p className="p-sm">
                  We may also release Your information if required to do so by
                  law, or in the good-faith belief that such action is necessary
                  to comply with state or federal laws or respond to a court
                  order, subpoena, law enforcement or regulatory request, or
                  search warrant.
                </p>
                <p className="p-sm">
                  We reserve the right to collect and share any information:
                </p>
                <ol className="simple-list" type="I">
                  <li className="list-item">
                    <p className="p-sm">
                      to investigate, prevent, or take action regarding
                      suspected or actual illegal activities;
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-sm">
                      as appropriate or necessary to enforce Our Terms of Use or
                      investigate potential or actual violations of the Terms of
                      Use or Privacy Policy;
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-sm">take precautions against liability;</p>
                  </li>
                  <li className="list-item">
                    <p className="p-sm">
                      to protect the security or integrity of Our Services;{" "}
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-sm">
                      to exercise or protect Our rights and property, Our
                      Services, or the rights and personal safety of Company
                      affiliates, Users or others; or
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-sm">for other legitimate purposes.</p>
                  </li>
                </ol>
              </div>
              <div className="terms-box">
                <h5 className="h5-md">Limitation of Liability</h5>
                <p className="p-sm">
                  We shall not be liable for any damages, including, but not
                  limited to any direct, indirect, special, wilful, punitive,
                  incidental, exemplary, special or consequential damages
                  (including, but not limited to damages for loss of business,
                  business interruptions, loss of programs or information or
                  loss of profits, income, revenue, use, anticipated savings,
                  commercial opportunities or goodwill) or any other damages
                  arising out of the availability, use, reliance on, inability
                  to utilize or improper use, interruption or dysfunction of Our
                  Services giving rise to any form of action or omission of
                  action, whether in contract, tort or otherwise.
                </p>
                <p className="p-sm">
                  This section applies to the maximum extent permitted by
                  applicable law, and does not or is not intended to override,
                  limit or exclude any rights You may have under applicable law.
                </p>
              </div>
              <div className="terms-box">
                <h5 className="h5-md">Indemnity</h5>
                <p className="p-sm">
                  You will indemnify, defend and hold Us, Our affiliates and
                  their respective directors, officers, employees and agents
                  from and against any and all claims (including any claim filed
                  by an Independent Contractor due to the breach of any
                  applicable Service Agreement), suits, actions or
                  administrative proceedings, demands, losses, liabilities,
                  causes of action, damages, costs, and expenses of whatever
                  nature (including attorney’s fees and expenses) with respect
                  to the Independent Contractor or any third party claim arising
                  out of Your negligence or willful misconduct except to the
                  extent such harm was directly caused by the gross negligence
                  or willful misconduct of the other party.
                </p>
                <p className="p-sm">
                  You agree to indemnify and keep indemnified Us, Our related
                  entities and respective officers, employees, agents and
                  contractors (“those indemnified”) in respect of any claim,
                  liability, loss, damage, cost (including legal cost) or
                  expense which those indemnified may suffer or incur as a
                  direct or indirect result of Your willful or negligent act or
                  omission with respect to Your use of the Service (or any part
                  of it) or the violation of these Terms and Conditions by You.
                </p>
              </div>
              <div className="terms-box">
                <h5 className="h5-md">Insurance claims</h5>
                <p className="p-sm">
                  We shall not be liable for any insurance claims arising out of
                  the service agreement between You and the Independent
                  Contractor for the performance of Skilled Services.
                </p>
              </div>
              <div className="terms-box">
                <h5 className="h5-md">Loss of property</h5>
                <p className="p-sm">
                  You understand that it is Your responsibility to ensure Your
                  property is secure and safe. We shall not be liable for any
                  loss of property, theft or damage to property occasioned to
                  You in the course of performance of the Skilled Services by
                  the Independent Contractor.
                </p>
              </div>
              <div className="terms-box">
                <h5 className="h5-md">Assignment</h5>
                <p className="p-sm">
                  This Agreement shall be binding upon and shall inure to the
                  benefit of each party hereto and its respective successors and
                  assigns.
                </p>
                <p className="p-sm">
                  You may not assign this Agreement in whole or in part, except
                  with Our prior written consent.
                </p>
                <p className="p-sm">
                  We may assign this Agreement, by giving notice to You.
                </p>
              </div>
              <div className="terms-box">
                <h5 className="h5-md">Termination</h5>
                <p className="p-sm">
                  We may terminate this Agreement by giving a notice in writing
                  of such termination at Our sole discretion.
                </p>
                <p className="p-sm">
                  We reserve the right to immediately terminate or suspend this
                  Agreement without notice upon any breach of the Agreement.
                </p>
              </div>
              <div className="terms-box">
                <h5 className="h5-md">Variation of Agreement</h5>
                <p className="p-sm">
                  We reserve the right to amend or vary the terms of this
                  Agreement from time to time and such variations will be
                  effective upon Our notifying You.
                </p>
              </div>
              <div className="terms-box">
                <h5 className="h5-md">Governing law</h5>
                <p className="p-sm">
                  This Contract shall be governed by and construed in all
                  respects in accordance with the laws of Kenya. You hereby
                  consent to the exclusive jurisdiction and venue of the Kenyan
                  courts.
                </p>
              </div>
              <div className="terms-box">
                <h5 className="h5-md">Dispute resolution</h5>
                <p className="p-sm">
                  By agreeing to use Our Services, You agree that any dispute
                  arising from, out of, or in connection to this Agreement
                  relating to its interpretation or performance of the
                  obligations hereunder shall be resolved amicably. You also
                  acknowledge that it is in Your interest to have all matters
                  resolved by mutual agreement and subsequently agree to act
                  expeditiously, reasonably and in good faith to permit and
                  encourage the resolution of such dispute.
                </p>
                <p className="p-sm">
                  In the event of a dispute with an Independent Contractor
                  regarding the services provided via Our Platform, or regarding
                  this agreement, the parties to the dispute shall first attempt
                  to resolve the dispute by way of mutual settlement.
                  Notwithstanding the foregoing, if the parties fail to reach a
                  mutual agreement, either party may within seven(7) days of the
                  dispute submit the dispute to Us by way of written notice to
                  Our internal dispute resolution procedure.
                </p>
                <p className="p-sm">
                  We may accept to act as a Mediator to assist in resolving the
                  dispute at a charge to You. Either Party may however apply to
                  the Kenyan Courts for any interim reliefs.
                </p>
              </div>
              <div className="terms-box">
                <h5 className="h5-md">Notices</h5>
                <p className="p-sm">
                  We may change this Agreement from time to time by notifying
                  You of such changes using Our Platform or by sending a notice
                  to Your email or posting such notices on any digital medium of
                  Our Platform.
                </p>
                <p className="p-sm">
                  Your continued use of Our Services upon notification of such
                  changes shall be construed to mean Your acceptance of the said
                  changes.
                </p>
              </div>
              <div className="terms-box">
                <h5 className="h5-md">Force Majeure</h5>
                <p className="p-sm">
                  Any delay in or failure by any party in the performance of
                  this Agreement shall be excused if and to the extent that the
                  delay or failure is caused by a factor beyond the control of
                  the affected party (a force majeure event). Force Majeure
                  Events can include decrees or restraints of government, acts
                  of God, strikes, work stoppage or other labour disturbances,
                  war or sabotage.
                </p>
                <p className="p-sm">
                  The affected party must promptly notify the other party in
                  writing upon becoming aware that a force majeure event has
                  occurred or is likely to occur and the affected party must use
                  commercially reasonable efforts to minimise any resulting
                  delay in or interference with the performance of its
                  obligations under this Agreement.
                </p>
              </div>
              <div className="terms-box">
                <h5 className="h5-md">Entire Agreement</h5>
                <p className="p-sm">
                  This Contract includes and hereby incorporates by reference
                  the following important agreements, as they may be in effect
                  and modified by Us from time to time:
                </p>
                <ol className="simple-list" type="I">
                  <li className="list-item">
                    <p className="p-sm">
                      The Service Provider Operating Guidelines.
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-sm">The Schedule of Service Charges.</p>
                  </li>
                </ol>
                <p className="p-sm">
                  Except as set out in this contract, all warranties,
                  representations, conditions, terms and undertakings, express
                  or implied, whether by statute, common law, custom, trade
                  usage, course of dealings or otherwise (including without
                  limitation as to quality, performance or fitness or
                  suitability for purpose) in respect of Our Services and to the
                  Platform under this contract are excluded to the fullest
                  extent permitted by law.
                </p>
                <p className="p-sm">
                  The Parties acknowledge that by entering into this contract
                  they do not rely on any statement, representation, or warranty
                  other than those expressly set out in this contract.
                </p>
              </div>
              <div className="terms-box">
                <h5 className="h5-md">Severability</h5>
                <p className="p-sm">
                  In the event of any of the provisions of this Agreement is
                  determined to be unenforceable or invalid by a ruling of an
                  arbitrator or court of competent jurisdiction, the remainder
                  of this Agreement (and each of the remaining terms and
                  conditions contained herein) shall remain in full force and
                  effect and shall not be altered or removed.
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
