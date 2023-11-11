import { Formik, Field, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import Banner from "../components/banner";
import { useState } from "react";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const ContactPage = () => {
  const [showBanner, setShowBanner] = useState(false);

  function validateEmail(value: string) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(2, "Too Short!")
      .max(50, "Too Long!"),
    email: Yup.string().email("Invalid email").required("Required"),
    message: Yup.string()
      .required("Please enter your message")
      .min(5, "Mininum 5 charactors!"),
  });

  const onSubmit = (
    values: FormValues,
    { setValues }: FormikHelpers<FormValues>
  ) => {
    // Manually set the form values
    setValues(values);

    // Get the HTMLFormElement
    const formElement = document.getElementById(
      "contactForm"
    ) as HTMLFormElement;

    emailjs
      .sendForm(
        "service_38htnoj",
        "template_pzzh79j",
        formElement,
        "yi1eag8ZFMBluU_F3"
      )
      .then(
        (result) => {
          // Reset the form after successful submission
          setValues({
            name: "",
            email: "",
            message: "",
          });

          console.log("Setting showBanner to true...");
          setShowBanner(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form className="z-10 flex flex-col" id="contactForm">
          {showBanner && (
            <Banner
              message="Form submitted successfully!"
              onClose={() => setShowBanner(false)}
            />
          )}
          <h1>Please feel free to contact me!</h1>
          <br />
          <label htmlFor="name">May i have your name?</label>
          <Field name="name" />
          {errors.name && touched.name && <div>{errors.name}</div>}
          <br />
          <label htmlFor="email">May i have your email address?</label>
          <Field name="email" validate={validateEmail} />
          {errors.email && touched.email && <div>{errors.email}</div>}
          <br />
          <label htmlFor="message">Any message?</label>
          <Field name="message" />
          {errors.message && touched.message && <div>{errors.message}</div>}

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactPage;
