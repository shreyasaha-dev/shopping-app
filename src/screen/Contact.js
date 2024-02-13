import ContactDetails from "../component/ContactDetails";
import "../style/Contact.css";
import { TfiEmail } from "react-icons/tfi";
import { FiMapPin } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";
const Contact = () => {
  const formSubmit = async (values, resetForm) => {
    alert("You request have been submitted");

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        { title: values.email, body: values.body, userId: 1 }
      );
      console.log(response);
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="contact-top">
        <h1>Contact</h1>
      </div>
      <div className="contact-bottom">
        <div className="contact-mid-section">
          <Formik
            initialValues={{ email: "", body: "" }}
            validationSchema={yup.object().shape({
              email: yup
                .string()
                .trim()
                .email("Must have to be a valid email")
                .required("This field is mandory"),
              body: yup
                .string()
                .trim()
                .max(400, "Maximum 400 words are allowed")
                .required("This field is mandory"),
            })}
            onSubmit={(values, { resetForm }) => {
              formSubmit(values, resetForm);
            }}
          >
            {({ values, handleBlur, handleChange, handleSubmit }) => {
              return (
                <form className="left-section">
                  <h1>Send Us A Message</h1>
                  <div className="input-section">
                    <TfiEmail className="email-icon" />
                    <input
                      type="email"
                      placeholder="Your Email Address"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="email"
                    />
                  </div>
                  <span className="error-message">
                    <ErrorMessage name="email" />
                  </span>
                  <textarea
                    placeholder="How Can We Help?"
                    value={values.body}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="body"
                  ></textarea>
                  <span className="error-message">
                    <ErrorMessage name="body" />
                  </span>
                  <button onClick={handleSubmit}>SUBMIT</button>
                </form>
              );
            }}
          </Formik>
          <div className="right-section">
            <ContactDetails
              Icon={<FiMapPin />}
              title="Address"
              description="Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018 US"
            />
            <ContactDetails
              Icon={<IoCallOutline />}
              title="Lets Talk"
              description="+1 800 1236879"
            />
            <ContactDetails
              Icon={<MdOutlineEmail />}
              title="Sale Support"
              description="contact@example.com"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
