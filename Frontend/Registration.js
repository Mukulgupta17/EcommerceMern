// import axios from "axios";
// import { ErrorMessage, Field, Form, Formik } from "formik";
// import React from "react";
// import * as Yup from "yup";
// import "./Signup.css";

// export default function Registration() {
//   const validate = Yup.object({
//     firstName: Yup.string().required("Firstname Required!"),
//     lastName: Yup.string(),
//     email: Yup.string().email("Email is invalid!").required("Email Required!"),
//     password: Yup.string()
//       .min(4, "Password must be minimum 4 digits!")
//       .required("Password Required!"),
//     confirmPassword: Yup.string()
//       .oneOf([Yup.ref("password"), null], "Password must match!")
//       .required("Confirm password is required!"),
//     age: Yup.number()
//       .min(14, "Age must be minimum 14 Years!")
//       .required("Age must be required!"),
//   });

//   const initialValues = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     age: "",
//   };

//   return (
//     <div>
//       <Formik
//         initialValues={initialValues}
//         validationSchema={validate}
//         onSubmit={async (values) => {
//           //   alert(JSON.stringify(values, null, 2));
//           console.log(values);
//           console.log("iuuuuuuuuuuuuuuuuuu");
//           try {
//             const response = await axios.post(
//               "http://localhost:9001/userssignin",
//               values
//             );
//             // console.log(response.data);
//             // if (response.success) {
//             //   toast.success("successfull");
//             // }
//           } catch (e) {
//             console.log(e);
//           }
//         }}
//       >
//         {(formik) => (
//           <div>
//             <div className="d-flex justify-content-center ">
//               <h1 className="" style={{ color: "white" }}>
//                 Signup
//               </h1>
//             </div>
//             <Form className="form p-3">
//               <div className="mb-2">
//                 <label htmlFor="firstName">Firstname</label>
//                 <Field
//                   type="text"
//                   name="firstName"
//                   placeholder="Lorem"
//                   className="form-control"
//                 />
//                 <ErrorMessage
//                   component="div"
//                   name="firstName"
//                   className="error"
//                 />
//               </div>

//               <div className="mb-2">
//                 <label htmlFor="lastName">Lastname</label>
//                 <Field
//                   type="text"
//                   name="lastName"
//                   placeholder="Ipsum"
//                   className="form-control"
//                 />
//                 <ErrorMessage
//                   component="div"
//                   name="lastName"
//                   className="error"
//                 />
//               </div>

//               <div className="mb-2">
//                 <label htmlFor="email">Email</label>
//                 <Field
//                   type="email"
//                   name="email"
//                   placeholder="loremipsum@gmail.com"
//                   className="form-control"
//                 />
//                 <ErrorMessage component="div" name="email" className="error" />
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
import { toast } from "react-toastify";
import * as Yup from "yup";
import "./Signup.css";

export default function Registration() {
  const validate = Yup.object({
    firstName: Yup.string().required("Firstname Required!"),
    lastName: Yup.string(),
    email: Yup.string().email("Email is invalid!").required("Email Required!"),
    password: Yup.string()
      .min(4, "Password must be minimum 4 digits!")
      .required("Password Required!"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match!")
      .required("Confirm password is required!"),
    // age: Yup.number()
    //   .min(14, "Age must be minimum 14 Years!")
    //   .required("Age must be required!"),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validate}
        onSubmit={async (values) => {
          // alert(JSON.stringify(values));
          console.log(values);
          // toast.success("ssssssssssssssssssssooooo");
          try {
            const response = await axios.post(
              "http://localhost:9001/userssignin",
              values
            );
            console.log(response.data);
            if (response.data.success) {
              // toast.error("Registration failed");

              toast.success("Registration successful");
            } else {
              toast.error("Registration failed");
            }
          } catch (error) {
            console.log("Error during registration:", error);
            // toast.error("An error occurred during registration");
          }
        }}
      >
        {(formik) => (
          <div>
            <div className="d-flex justify-content-center ">
              <h1 className="" style={{ color: "white" }}>
                Registration
              </h1>
            </div>
            <Form className="form p-3">
              <div className="mb-2">
                <label htmlFor="firstName">Firstname</label>
                <Field
                  type="text"
                  name="firstName"
                  placeholder="Lorem"
                  className="form-control"
                />
                <ErrorMessage
                  component="div"
                  name="firstName"
                  className="error"
                />
              </div>

              <div className="mb-2">
                <label htmlFor="lastName">Lastname</label>
                <Field
                  type="text"
                  name="lastName"
                  placeholder="Ipsum"
                  className="form-control"
                />
                <ErrorMessage
                  component="div"
                  name="lastName"
                  className="error"
                />
              </div>

              <div className="mb-2">
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  name="email"
                  placeholder="loremipsum@gmail.com"
                  className="form-control"
                />
                <ErrorMessage component="div" name="email" className="error" />
              </div>

              <div className="mb-2">
                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  name="password"
                  placeholder="qwert@123"
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
                  placeholder="confirm password..."
                  className="form-control"
                />
                <ErrorMessage
                  component="div"
                  name="confirmPassword"
                  className="error"
                />
              </div>

              <button className="btn btn-dark m-2" type="submit">
                Register
              </button>
              <button className="btn btn-primary m-2" type="reset">
                Reset
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}
