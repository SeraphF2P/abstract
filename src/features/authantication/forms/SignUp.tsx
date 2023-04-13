"use client";
import { FormikControl, Form, Formik } from "@/components/myFormik";
import axios from "axios";
import { FC } from "react";

const SignUp: FC = () => {
  const submitHandeler = async ({}: any, values: any) => {
    try {
      const res = await axios.post("/api/signup", values);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Formik
      onSubmit={submitHandeler}
      initialValues={{
        name: "",
      }}
    >
      {() => {
        return (
          <>
            <Form className="flex flex-col items-center justify-center gap-4">
              <FormikControl
                control="checkbox"
                label={"form"}
                name={"form"}
                options={[
                  { key: "option1", value: "blue" },
                  { key: "option2", value: "red" },
                ]}
              />

              <FormikControl control="input" label={"form"} name={"form"} />
            </Form>
          </>
        );
      }}
    </Formik>
  );
};

export default SignUp;
