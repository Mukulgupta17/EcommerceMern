import axios from "axios";

const Verifytoken = async () => {
  const localtoken = localStorage.getItem("token");

  try {
    const response = await axios.post(`http://localhost:9001/verifytoken`, {
      localtoken: localtoken,
    });
    console.log(response);
    if (response.data && response.data.success) {
      //   alert("token is vaerified");
      console.log("verified", response);
      return response;
    }
    return null;
  } catch (e) {
    console.log(e);
  }
};

export default Verifytoken;
