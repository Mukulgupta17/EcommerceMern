import axios from "axios";
import Userid from "./Userid";
// import Userid from "./Userid";
const token = localStorage.getItem("token");
// const decodedToken = token ? atob(token.split(".")[1]) : null;
// const payload = JSON.parse(decodedToken);
// const { id, email } = payload;
// console.log(id, email, payload, "decode id and email");

// addtocartfunctionality
const Addtocart = async (ids) => {
  const id = Userid();

  try {
    const response = await axios.post(`http://localhost:9001/addcart/${ids}`, {
      id: id,
      token: token,
    });
    // console.log(id, "userididddddddddddddddddddddddddddddddd", ids);
    // console.log(response, "addcartttttttttttt");
    return response;
  } catch (e) {
    console.log(e);
    return e;
  }
  //   return response
};

export default Addtocart;
