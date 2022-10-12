import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import PreLoader from "../layout/PreLoader";
import _ from "lodash";

const ServiceForm = () => {
  const [loading, setLoading] = useState(false);

  const [step, setStep] = useState(1);

  const [service, setService] = useState("");

  const [subCategory, setSubCategory] = useState(undefined);

  const serviceValidationSchema = Yup.object().shape({
    service: Yup.string().required("Please select a service"),
    sub_category_service: Yup.string().required("Please select a sub category"),
    name: Yup.string().required("Please enter your name"),
    email: Yup.string()
      .required("Please provide an email address")
      .email("Email is invalid"),
    mobile_no: Yup.string()
      .min(10, "Mobile number must be at least 10 characters")
      .required("Please provide a mobile number"),
    acceptTerms: Yup.bool().oneOf([true], "Please read and accept Ts & Cs"),
    // password: Yup.string()
    //   .min(6, "Password must be at least 6 characters")
    //   .required("Password is required"),
    // confirmPassword: Yup.string()
    //   .oneOf([Yup.ref("password"), null], "Passwords must match")
    //   .required("Confirm Password is required"),
    //
  });

  const serviceFormOptions = { resolver: yupResolver(serviceValidationSchema) };

  const { register, handleSubmit, reset, formState } =
    useForm(serviceFormOptions);

  const { errors } = formState;

  const services = [
    {
      id: "SERV-001",
      name: "Electrical",
      sub_categories: [
        "Fix Appliance",
        "Inspection of Electricity consumption",
        "Internal and external lightings",
        "Home security-CCTV Installations",
        "Wiring",
        "Doorbell Installation",
        "Other",
      ],
    },
    {
      id: "SERV-002",
      name: "Plumbing",
      sub_categories: [
        "Sewer Systems",
        "Pipes",
        "Water Heater",
        "Gutters",
        "Tanks",
        "Sinks",
        "Drains",
        "Toilets",
        "Plumbing Inspection",
      ],
    },
    { id: "SERV-003", name: "Masonry", sub_categories: [] },
  ];

  const subCategoryList = () => {
    if (!_.isUndefined(subCategory)) {
      let filtered = services.filter((item) => item.id === subCategory)[0];

      filtered = filtered.sub_categories;

      if (filtered.length > 0) {
        return (
          <>
            <span className="err-red">
              {errors.sub_category_service?.message}
            </span>
            <select
              name="sub_category_service"
              className="form-control form-select name"
              aria-label="Default select example"
              {...register("sub_category_service")}
            >
              <option value="General services">General Services</option>
              {filtered.map((s, i) => (
                <option value={`${s}`}>{s}</option>
              ))}
            </select>
            <span className="err-red">
              {errors.sub_category_service &&
                errors.sub_category_service.message}
            </span>
          </>
        );
      }
    }
  };

  useEffect(() => {
    setSubCategory(undefined);

    return () => {
      // second
    };
  }, []);

  const onSubmit = async (data) => {
    data["service"] = data.service.split("|")[1];

    const response = await fetch("/api/request-service", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log(response);

    // if (!response.ok) {
    //   throw new Error(`Error: ${response.status}`);
    // }

    // const response = await response.json();

    // console.log("POST: ", data);

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setService(data.service.split("|")[1]);
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
              <h5 className="h5-xl">
                <strong>What service are you looking for?</strong>
              </h5>
              <form
                name="requestForm"
                className="row request-form"
                onSubmit={handleSubmit(onSubmit)}
              >
                {/* Form Input */}
                <div className="col-md-12">
                  <span className="err-red">{errors.service?.message}</span>
                  <select
                    name="service"
                    className="form-control form-select name"
                    aria-label="Default select example"
                    {...register("service")}
                    onChange={(e) => {
                      !_.isEmpty(e.target.value)
                        ? setSubCategory(e.target.value.split("|")[0])
                        : setSubCategory(undefined);
                    }}
                  >
                    <option value="">Select your preferred service</option>
                    {services.map((s, i) => (
                      <option value={`${s.id}|${s.name}`} key={i}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-12">{subCategoryList()}</div>
                <div className="col-md-12">
                  <span className="err-red">{errors.name?.message}</span>
                  <input
                    type="text"
                    name="name"
                    className="form-control name"
                    placeholder="Enter your full name*"
                    autoComplete="off"
                    {...register("name")}
                  />
                </div>

                <div className="col-md-12">
                  <span className="err-red">{errors.email?.message}</span>
                  <input
                    type="text"
                    name="email"
                    className="form-control name"
                    placeholder="Enter your email*"
                    autoComplete="off"
                    {...register("email")}
                  />
                </div>

                <div className="col-md-12">
                  <span className="err-red">{errors.mobile_no?.message}</span>
                  <input
                    type="number"
                    name="mobile_no"
                    className="form-control email"
                    placeholder="Enter your mobile no.*"
                    autoComplete="off"
                    {...register("mobile_no")}
                  />
                </div>

                <div className="col-md-12">
                  <span className="err-red">{errors.acceptTerms?.message}</span>
                  {errors.acceptTerms && (
                    <>
                      <br />
                    </>
                  )}
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="acceptTerms"
                    {...register("acceptTerms")}
                  />
                  <label className="form-check-label" for="acceptTerms">
                    &nbsp;&nbsp;I agree to&nbsp;
                    <a href="/terms">Terms & Conditions</a>
                  </label>
                </div>

                {/* Form Button */}
                <div className="col-md-12 form-btn mt-10">
                  <button
                    type="submit"
                    className="btn btn-md btn-proven-blue tra-grey-hover submit"
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
