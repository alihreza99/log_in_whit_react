import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Form } from "react-bootstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
const schema = yup.object().shape({
  firstname: yup.string().required("لطفا نام خود را وارد کنید"),
  lastname: yup.string().required("لطفا نام خانوادگی خود را وارد کنید"),
  county: yup.string().required("لطفا شهر خود را وارد کنید"),
  phonenumber: yup.string().required("لطفا شماره تلفن خود را وارد کنید"),
  personalid: yup.string().required("لطفا کد ملی خود را وارد کنید"),
  email: yup.string().email().required("لطفا ایمیل خود را وارد کنید"),
  radio: yup.string().required("جنسیت خود را انتخاب کنید"),
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
            <label className="label">
              نام<sup>*</sup>
            </label>
            <input {...register("firstname")} placeholder="نام" type="text" />
            <p className="errortext">{errors.firstname?.message}</p>
          </div>
          <div className="form-control">
            <label>
              نام خانوادگی<sup>*</sup>
            </label>
            <input
              {...register("lastname")}
              placeholder="نام خانوادگی"
              type="text"
            />
            <p className="errortext">{errors.lastname?.message}</p>
          </div>
          <div className="form-control">
            <label>
              شهر<sup>*</sup>
            </label>
            <input {...register("county")} placeholder="شهر" type="text" />
            <p className="errortext">{errors.county?.message}</p>
          </div>
          <div className="form-control">
            <label>
              شماره تلفن<sup>*</sup>
            </label>
            <input
              {...register("phonenumber")}
              placeholder="شماره تلفن"
              type="number"
            />
            <p className="errortext">{errors.phonenumber?.message}</p>
          </div>
          <div className="form-control">
            <label>
              کد ملی<sup>*</sup>
            </label>
            <input
              {...register("personalid")}
              placeholder="کد ملی"
              type="number"
            />
            <p className="errortext">{errors.personalid?.message}</p>
          </div>
          <div className="form-control">
            <label>
              ایمیل<sup>*</sup>
            </label>
            <input {...register("email")} placeholder="ایمیل" type="email" />
            <p className="errortext">{errors.email?.message}</p>
          </div>
          <div key={`default-radio`} id="check" className="mb-3 radio-parent">
            <Form.Check
              type="radio"
              id={`default-$radio`}
              label={"مرد"}
              {...register("radio")}
              value="A"
            />
            <Form.Check
              type="radio"
              id={"Female"}
              label={"زن"}
              {...register("radio")}
              value="B"
            />
            <p className="errortext">{errors.radio?.message}</p>
          </div>
          <div className="form-control">
            <label></label>
            <button className="log-button" type="submit">
              ورود
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
