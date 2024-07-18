import axios from "axios";
import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import "./Signup.css";

// Creating schema
const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string().required("Password is a required field"),
});

// const token = localStorage.getItem("token");
// const decodedToken = token ? atob(token.split(".")[1]) : null;
// const payload = JSON.parse(decodedToken);
// const { id, email } = payload;
// console.log(id, email, payload, "decode id and email");

function SignupForm() {
  const token1 = localStorage.getItem("token");

  const navigate = useNavigate();

  return (
    <>
      {" "}
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values) => {
          console.log(
            values,
            "lallllllllllaaaaaaaaaaaalaaaaaaaaaalaaaaaaaaaaaaaaaaaavalues"
          );
          if (!token1) {
            try {
              const response = await axios.post(
                "http://localhost:9001/signup",
                values
              );
              const token = response.data.token;
              console.log(
                response.data,
                "ooooooooooooooollllllllllllllllaaaaaaaaaaaaaallllllllllllllaaaaaaaaaaa"
              );
              console.log(
                // response.data.data._id,
                "backend fetch id",
                // response.data.token,
                "token"
              );
              if (response.data.success) {
                localStorage.setItem("token", token);
                navigate("/ehome");
                toast.success("succedssfull");
              } else {
                toast.error("it Seems like be  an error ");
              }
            } catch (e) {
              console.log(e);
            }
          } else {
            alert("already logged in");
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
                <span>Login</span>
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
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter password"
                  className="form-control"
                />
                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>
                <button type="submit">Login</button>
                <p className="m-2">
                  Forgot password <Link to="/forgotpassword">click here</Link>{" "}
                </p>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
}

export default SignupForm;
