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
        import.meta.env.VITE_MAIL_SERVICE_KEY,
        import.meta.env.VITE_MAIL_TEMPLATE_KEY,
        formElement,
        import.meta.env.VITE_MAIL_USER_KEY
      )
      .then(
        () => {
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
    <div className="z-10 bg-slate-800 w-3/6 ">
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
          <Form
            className="z-10 flex flex-col items-center bg-gray-700"
            id="contactForm"
          >
            {showBanner && (
              <Banner
                message="Form submitted successfully!"
                onClose={() => setShowBanner(false)}
              />
            )}
            <h1 className="font-extrabold text-4xl text-gray-50">
              Please feel free to contact me!
            </h1>
            <br />
            <label htmlFor="name" className="text-gray-50 text-xl">
              May i have your name?
            </label>
            <Field name="name" className="w-2/5 bg-gray-500" />
            {errors.name && touched.name && <div>{errors.name}</div>}
            <br />
            <label htmlFor="email" className="text-gray-50 text-xl">
              May i have your email address?
            </label>
            <Field
              name="email"
              validate={validateEmail}
              className="w-2/5 bg-gray-500"
            />
            {errors.email && touched.email && <div>{errors.email}</div>}
            <br />
            <label htmlFor="message" className="text-gray-50 text-xl">
              Any message?
            </label>
            <Field
              name="message"
              className="mb-2 w-2/5 min-h-30 bg-gray-500"
              component="textarea"
            />
            {errors.message && touched.message && <div>{errors.message}</div>}

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactPage;
