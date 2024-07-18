// import axios from "axios";
// import { ErrorMessage, Field, Form, Formik } from "formik";
// import React from "react";
// import { useLocation } from "react-router-dom";
// import { toast } from "react-toastify";
// import * as Yup from "yup";
// import "./Signup.css";

// export default function Verifyotp() {
//   const validate = Yup.object({
//     // otp: Yup.string("otp is required"),
//     password: Yup.string()
//       .min(4, "Password must be minimum 4 digits!")
//       .required("Password Required!"),
//     confirmPassword: Yup.string()
//       .oneOf([Yup.ref("password"), null], "Password must match!")
//       .required("Confirm password is required!"),
//     // age: Yup.number()
//     //   .min(14, "Age must be minimum 14 Years!")
//     //   .required("Age must be required!"),
//   });

//   const initialValues = {
//     otp: "",
//     password: "",
//     confirmPassword: "",
//   };
//   const location = useLocation();
//   const { id } = location.state;
//   return (
//     <div>
//       <Formik
//         initialValues={initialValues}
//         validationSchema={validate}
//         onSubmit={async (values) => {
//           console.log(values);
//           // toast.success("ssssssssssssssssssssooooo");
//           try {
//             const response = await axios.put(
//               `http://localhost:9001/update/updatepassword/${id}`,
//               values
//             );
//             console.log(response.data);
//             if (response.data.success) {
//               // toast.error("Registration failed");

//               toast.success("Registration successful");
//             } else {
//               toast.error("Registration failed");
//             }
//           } catch (error) {
//             console.log("Error during registration:", error);
//             // toast.error("An error occurred during registration");
//           }
//         }}
//       >
//         {(formik) => (
//           <div>
//             <div className="d-flex justify-content-center ">
//               <h1 className="" style={{ color: "white" }}>
//                 Registration
//               </h1>
//             </div>
//             <Form className="form p-3">
//               <div className="mb-2">
//                 <label htmlFor="email">Otp</label>
//                 <Field
//                   type="text"
//                   name="otp"
//                   placeholder="12345"
//                   className="form-control"
//                 />
//                 <ErrorMessage component="div" name="otp" className="error" />
//               </div>

//               <div className="mb-2">
//                 <label htmlFor="password">Password</label>
//                 <Field
//                   type="password"
//                   name="password"
//                   placeholder="qwert@123"
//                   className="form-control"
//                 />
//                 <ErrorMessage
//                   component="div"
//                   name="password"
//                   className="error"
//                 />
//               </div>

//               <div className="mb-2">
//                 <label htmlFor="confirmPassword">Confirm Password</label>
//                 <Field
//                   type="password"
//                   name="confirmPassword"
//                   placeholder="confirm password..."
//                   className="form-control"
//                 />
//                 <ErrorMessage
//                   component="div"
//                   name="confirmPassword"
//                   className="error"
//                 />
//               </div>

//               <button className="btn btn-dark m-2" type="submit">
//                 Register
//               </button>
//               <button className="btn btn-primary m-2" type="reset">
//                 Reset
//               </button>
//             </Form>
//           </div>
//         )}
//       </Formik>
//     </div>
//   );
// }

import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import "./Signup.css";

export default function Verifyotp() {
  const validate = Yup.object({
    password: Yup.string()
      .min(4, "Password must be minimum 4 characters!")
      .required("Password is required!"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match!")
      .required("Confirm password is required!"),
  });

  const initialValues = {
    otp: "",
    password: "",
    confirmPassword: "",
  };

  const location = useLocation();
  const { id } = location.state;
  // const navigate = useNavigation();
  const navigate = useNavigate();

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validate}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const response = await axios.put(
              `http://localhost:9001/update/updatepassword/${id}`,
              values
            );
            console.log(response.data);
            if (response.data.success) {
              navigate("/ehome");
              toast.success("Password updated successfully");
            } else {
              toast.error("Password update failed");
            }
          } catch (error) {
            console.error("Error during password update:", error);
            toast.error("An error occurred during password update");
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {(formik) => (
          <div>
            <div className="d-flex justify-content-center ">
              <h1 className="" style={{ color: "white" }}>
                Reset Password
              </h1>
            </div>
            <Form className="form p-3">
              <div className="mb-2">
                <label htmlFor="otp">OTP</label>
                <Field
                  type="text"
                  name="otp"
                  placeholder="Enter OTP"
                  className="form-control"
                />
                <ErrorMessage component="div" name="otp" className="error" />
              </div>

              <div className="mb-2">
                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter new password"
                  className="form-control"
                />
                <ErrorMessage
                  component="div"
                  name="password"
                  className="error"
                />
              </div>

              <div className="mb-2">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm new password"
                  className="form-control"
                />
                <ErrorMessage
                  component="div"
                  name="confirmPassword"
                  className="error"
                />
              </div>

              <button
                className="btn btn-dark m-2"
                type="submit"
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting ? "Submitting..." : "Reset Password"}
              </button>
              <button
                className="btn btn-primary m-2"
                type="reset"
                disabled={formik.isSubmitting}
              >
                Reset
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}
