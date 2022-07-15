import { useState } from "react";
import { useForm } from "react-hook-form";
import PreLoader from "../layout/PreLoader";

const ServiceForm = () => {
  const [loading, setLoading] = useState(false);

  const [step, setStep] = useState(1);

  const [service, setService] = useState("");

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setService(data.service);
      reset();

      setTimeout(() => {
        setStep(1);
      }, 12000);
    }, 2000);
  };

  return (
    <>
      {loading ? (
        <div id="loader_two"></div>
      ) : (
        <>
          {step === 2 && (
            <div>
              <h4 className="h4-xs">Thank you for requesting {service}.</h4>
              <p>
                One of our estemeed customer care members will get in touch with
                you to confirm your details and assign a professional to you.
              </p>
              {/* <Link
                href="/"
                onClick={() => {
                  setStep(1);
                }}
              >
                Back to form
              </Link> */}
            </div>
          )}
          {step === 1 && (
            <div>
              <h4 className="h4-xs">What service are you looking for?</h4>
              <form
                name="requestForm"
                className="row request-form"
                onSubmit={handleSubmit(onSubmit)}
              >
                {/* Form Input */}
                <div className="col-md-12">
                  <select
                    name="service"
                    className="form-control form-select name"
                    aria-label="Default select example"
                    ref={register({
                      required: "Kindly select service",
                    })}
                  >
                    <option value="">Select your preferred service</option>
                    <option value="Plumbing services">Plumbing services</option>
                    <option value="Electrical services">
                      Electrical services
                    </option>
                    <option value="Masonry services">Masonry services</option>
                  </select>
                  <input
                    type="text"
                    name="name"
                    className="form-control name"
                    placeholder="Enter your full name*"
                    autoComplete="off"
                    //   required
                    ref={register({
                      required: "Enter full name",
                    })}
                  />
                </div>
                {/* Form Input */}
                <div className="col-md-12">
                  <input
                    type="text"
                    name="email"
                    className="form-control name"
                    placeholder="Enter your email*"
                    autoComplete="off"
                    //   required
                    ref={register({
                      required: "Email field cannot be empty",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Enter a valid email address",
                      },
                    })}
                  />
                </div>
                {/* Form Input */}
                <div className="col-md-12">
                  <input
                    type="number"
                    name="mobile_no"
                    className="form-control email"
                    placeholder="Enter your mobile no.*"
                    autoComplete="off"
                    //   required
                    ref={register({
                      required: "Enter phone number",
                    })}
                  />
                </div>
                {/* Form Button */}
                <div className="col-md-12 form-btn mt-10">
                  <button
                    type="submit"
                    className="btn btn-md btn-pink tra-grey-hover submit"
                  >
                    Send request
                  </button>
                </div>
                {/* Form Message */}
                <div className="col-md-12 request-form-msg text-center">
                  <span className="loading" />
                </div>
              </form>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ServiceForm;
