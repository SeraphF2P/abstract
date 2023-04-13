import { Field, ErrorMessage, InputProps } from "formik";
import TextError from "./TextError";

function Textarea({ label, name, ...rest }: InputProps) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field  className="form-textarea" as="textarea" id={name} name={name} {...rest} />
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

export default Textarea;
