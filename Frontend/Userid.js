const Userid = () => {
  const token = localStorage.getItem("token");
  const decodedToken = token ? atob(token.split(".")[1]) : null;
  if (decodedToken) {
    const payload = JSON.parse(decodedToken);
    const { id, email } = payload;
    return id;
  }
  return null;
};

export default Userid;
