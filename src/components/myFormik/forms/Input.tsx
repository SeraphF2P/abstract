"use client";
import { ErrorMessage, Field, InputProps } from "formik";
import TextError from "./TextError";

function Input({ label, name, ...rest }: InputProps) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field className="form-input " id={name} name={name} {...rest} />
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

export default Input;
