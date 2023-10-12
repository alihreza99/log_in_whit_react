import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Form } from "react-bootstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
const schema = yup.object().shape({
  firstname: yup.string().required("Please enter a your first name"),
  lastname: yup.string().required("Please enter a your last name"),
  county: yup.string().required("Please enter a your county"),
  phonenumber: yup.number().required("Please enter a your phone numer"),
  personalid: yup.number().required("Please enter a your personal id"),
  email: yup.string().email().required("please enter email"),
  radio: yup.string().required("choose your gender"),
});

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    toast("Successfully created", {
      duration: 1000,
      position: "top-center",
      style: { background: "black", color: "white" },
      className: "",
      iconTheme: {
        primary: "#000",
        secondary: "#fff",
      },

      ariaProps: {
        role: "status",
        "aria-live": "polite",
      },
    });
    reset();
  };
  return (
    <>
      <div className="Log_form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label>
              First name<sup>*</sup>
            </label>
            <input
              {...register("firstname")}
              placeholder="firstname"
              type="text"
            />
            <p>{errors.firstname?.message}</p>
          </div>
          <div className="form-control">
            <label>
              Last name<sup>*</sup>
            </label>
            <input
              {...register("lastname")}
              placeholder="lastname"
              type="text"
            />
            <p>{errors.lastname?.message}</p>
          </div>
          <div className="form-control">
            <label>
              County<sup>*</sup>
            </label>
            <input {...register("county")} placeholder="county" type="text" />
            <p>{errors.county?.message}</p>
          </div>
          <div className="form-control">
            <label>
              Phone number<sup>*</sup>
            </label>
            <input
              {...register("phonenumber")}
              placeholder="phonenumber"
              type="number"
            />
            <p>{errors.phonenumber?.message}</p>
          </div>
          <div className="form-control">
            <label>
              Personal id<sup>*</sup>
            </label>
            <input
              {...register("personalid")}
              placeholder="personalid"
              type="number"
            />
            <p>{errors.personalid?.message}</p>
          </div>
          <div className="form-control">
            <label>
              Email<sup>*</sup>
            </label>
            <input {...register("email")} placeholder="email" type="email" />
            <p>{errors.email?.message}</p>
          </div>
          <div key={`default-radio`} className="mb-3 radio-parent">
            <Form.Check
              type="radio"
              id={`default-$radio`}
              label={"Male"}
              {...register("radio")}
              value="A"
            />
            <Form.Check
              type="radio"
              id={"Female"}
              label={"Female"}
              {...register("radio")}
              value="B"
            />
            <p>{errors.radio?.message}</p>
          </div>
          <div className="form-control">
            <label></label>
            <button className="log-button" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
