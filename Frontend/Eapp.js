import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./Cartlist";
import Ehome from "./Ehome";
import Enavbar from "./Enavbar";
import "./Estyle.css";
import Forgotpassword from "./Forgotpassword";
import Productdetail from "./Productdetail";
import Registration from "./Registration";
import SignupForm from "./SignupForm";
import Verifyotp from "./Verifyotp";

const Eapp = () => {
  const [cartmessage, setcartmessage] = useState("");
  const [cartlength, setcartlength] = useState();

  return (
    <div>
      {/* <Registration /> */}
      {/* <SignupForm /> */}
      <Enavbar cartlength={cartlength} />
      <ToastContainer />
      <Routes>
        <Route path="registration" element={<Registration />} />
        <Route path="signup" element={<SignupForm />} />
        <Route
          path="ehome"
          element={
            <Ehome setcartmessage={setcartmessage} cartmessage={cartmessage} />
          }
        />
        <Route
          path="productdetail"
          element={
            <Productdetail
              setcartmessage={setcartmessage}
              cartmessage={cartmessage}
            />
          }
        />
        <Route path="cart" element={<Cart setcartlength={setcartlength} />} />
        <Route path="forgotpassword" element={<Forgotpassword />} />
        <Route path="verifyotp" element={<Verifyotp />} />
      </Routes>
    </div>
  );
};

export default Eapp;
