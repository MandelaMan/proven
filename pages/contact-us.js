import Layout from "../src/layout/Layout";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const ContactUs = () => {
  const contactsValidationSchema = Yup.object().shape({
    topic: Yup.string().required("Please select a topic"),
    name: Yup.string().required("Please enter your name"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    description: Yup.string().required(
      "Please remember to include a description"
    ),
    // password: Yup.string()
    //   .min(6, "Password must be at least 6 characters")
    //   .required("Password is required"),
    // confirmPassword: Yup.string()
    //   .oneOf([Yup.ref("password"), null], "Passwords must match")
    //   .required("Confirm Password is required"),
    // acceptTerms: Yup.bool().oneOf([true], "Accept Ts & Cs is required"),
  });

  const contactFormOptions = {
    resolver: yupResolver(contactsValidationSchema),
  };

  const { register, handleSubmit, reset, formState } =
    useForm(contactFormOptions);

  const { errors } = formState;

  const onSubmit = async (data) => {
    console.log(data);

    // const response = await fetch("/api/send-question", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // });
  };

  return (
    <Layout
      btnCustomHover="btn btn-skyblue tra-grey-hover last-link"
      singlePage
    >
      <section
        id="contacts-2"
        className="bg-snow wide-50 inner-page-hero contacts-section division"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8">
              <div className="section-title title-02 mb-80">
                <h2 className="h2-xs">{`Have a question?`}</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <div className="form-holder">
                <form
                  name="contactform"
                  className="row contact-form"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="col-md-12 input-subject">
                    <p className="p-lg">This question is about: </p>
                    <span>
                      Choose a topic, so we know who to send your request to:{" "}
                    </span>
                    <span className="err-red">{errors.topic?.message}</span>
                    <select
                      className="form-select subject"
                      aria-label="Default select example"
                      name="topic"
                      {...register("topic")}
                    >
                      <option value="">Select a topic</option>
                      <option value="Problem with service provider">
                        Problem with service provider
                      </option>
                      <option value="Problem with quotation">
                        Problem with quotation
                      </option>
                      <option value="Problem with service">
                        Problem with service
                      </option>
                      <option value="Did not receive a callback">
                        Did not receive a callback
                      </option>
                      <option value="Need more information on service">
                        Need more information on service
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="col-md-12">
                    <p className="p-lg">Your Name: </p>
                    <span>Please enter your full name: </span>
                    <span className="err-red">{errors.name?.message}</span>
                    <input
                      type="text"
                      name="name"
                      {...register("name")}
                      className="form-control name"
                      placeholder="Your Name*"
                    />
                  </div>
                  <div className="col-md-12">
                    <p className="p-lg">Your Email Address: </p>
                    <span>
                      Please carefully check your email address for accuracy
                    </span>
                    <span className="err-red">{errors.email?.message}</span>
                    <input
                      type="text"
                      name="email"
                      {...register("email")}
                      className="form-control email"
                      placeholder="Email Address*"
                    />
                  </div>
                  <div className="col-md-12">
                    <p className="p-lg">Explain your question in details: </p>
                    <span>
                      Kindly elaborate on what problems you are facing &amp; Be
                      VERY precise!
                    </span>
                    <span className="err-red">
                      {errors.description?.message}
                    </span>
                    <textarea
                      className="form-control message"
                      name="description"
                      {...register("description")}
                      rows={6}
                      placeholder="I have a problem with..."
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-md-12 mt-15 form-btn text-right">
                    <button
                      type="submit"
                      className="btn btn-skyblue tra-grey-hover submit"
                    >
                      Submit Request
                    </button>
                  </div>
                  <div className="col-lg-12 contact-form-msg">
                    <span className="loading" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactUs;
