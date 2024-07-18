import axios from "axios";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import "./Signup.css";

// Creating schema
const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
});

function Forgotpassword() {
  const token1 = localStorage.getItem("token");

  const navigate = useNavigate();

  return (
    <Formik
      validationSchema={schema}
      initialValues={{ email: "" }}
      onSubmit={async (values) => {
        console.log(values, "Submitted values");
        // if (!token1) {
        try {
          const response = await axios.post(
            "http://localhost:9001/update/forgotpassword",
            values
          );
          //   setidforverify(response.data.data._id);
          console.log(
            response.data.data._id,
            "response from forgortpassowerd otp "
          );
          if (response.data.success) {
            toast.success("Successful emailedd");
            navigate("/verifyotp", { state: { id: response.data.data._id } });
          } else {
            toast.error("It seems like there is an error");
          }
        } catch (e) {
          console.log(e);
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <div className="login">
          <div className="form">
            <form noValidate onSubmit={handleSubmit}>
              <span>Forgot Password</span>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Enter email id / username"
                className="form-control inp_text"
                id="email"
              />
              <p className="error">
                {errors.email && touched.email && errors.email}
              </p>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </Formik>
  );
}

export default Forgotpassword;
