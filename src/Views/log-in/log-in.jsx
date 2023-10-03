import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Form } from "react-bootstrap";
import toast, { Toaster, useToaster } from 'react-hot-toast';
const schema = yup.object().shape({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  county: yup.string().required(),
  phonenumber: yup.number().required(),
  personalid: yup.number().required(),
  email: yup.string().email(),
  gender: yup.boolean().required().oneOf([0 , 1], 'Selecting the gender field is required'),
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

  const onSubmit = () => {toast('Successfully created', {
    duration: 1000,
    position: 'top-center',
    style: {background:"black",color:"white"},
    className: '',
    iconTheme: {
      primary: '#000',
      secondary: '#fff',
    },
  
    ariaProps: {
      role: 'status',
      'aria-live': 'polite',
    },
    reset
  });}
  return (
    <>
    
    <div className="Log_form">
    <Toaster/>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label>First name</label>
          <input
            {...register("firstname")}
            placeholder="firstname"
            type="text"
            required
          />
        </div>
        <div className="form-control">
          <label>Last name</label>
          <input
            {...register("lastname")}
            placeholder="lastname"
            type="text"
            required
          />
        </div>
        <div className="form-control">
          <label>County</label>
          <input
            {...register("county")}
            placeholder="county"
            type="text"
            required
          />
        </div>
        <div className="form-control">
          <label>Phone number</label>
          <input
            {...register("phonenumber")}
            placeholder="phonenumber"
            type="number"
            required
          />
        </div>
        <div className="check">
          <Form.Check
            type="radio"
            label="Male"
            value="male"
            name="radio"
            {...register("gender")}
            required
          />
          <Form.Check
            type="radio"
            label="Female"
            value="female"
            name="radio"
            {...register("gender")}
            required
          />
        </div>
        <div className="form-control">
          <label>Personal id</label>
          <input
            {...register("personalid")}
            placeholder="personalid"
            type="number"
            required
          />
        </div>
        <div className="form-control">
          <label>Email</label>
          <input
            {...register("email")}
            placeholder="email"
            type="email"
            required
          />
          <p>{errors.email?.message}</p>
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
