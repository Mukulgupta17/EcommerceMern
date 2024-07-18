import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { FiMinusSquare } from "react-icons/fi";
import { MdDelete, MdOutlineAddBox } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Ehomestyle.css";

import { IoChevronBackCircle } from "react-icons/io5";
import Userid from "./Userid";

// const token = localStorage.getItem("token");
// const decodedToken = token ? atob(token.split(".")[1]) : null;
// const payload = JSON.parse(decodedToken);
// const { id, email } = payload;
// console.log(id, email, payload, "decode id and email");
const Cart = (props) => {
  const [cartdata, setcartdata] = useState([]);
  const [totalvalue, settotalvalue] = useState(0);
  // useEffect(() => {

  //   const fetchProducts = async () => {
  //     try {
  //       const response = await axios.post("http://localhost:9001/cartlist", {
  //         id,
  //       });
  //       setcartdata(response.data);
  //       console.log(response, "llllllllllllllllllllll");
  //       // setdatas(response.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   fetchProducts();
  // }, []);
  const navigate = useNavigate();

  const handleback = () => {
    navigate(-1);
  };

  const fetchProducts = async () => {
    const id = Userid();

    try {
      const response = await axios.post("http://localhost:9001/cartlist", {
        id,
      });
      props.setcartlength(response.data.length);
      const totalSum = response.data.reduce(
        (acc, product) => acc + product.price * product.quantity,
        0
      );
      settotalvalue(totalSum);

      console.log(response.data.length, "rrrrrrrttttttttttttt");
      setcartdata(response.data);
      console.log(response, "llllllllllllllllllllll");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handlequantity = async (quant, ids) => {
    const id = Userid();

    console.log(quant, "quantityyyyyyyyyyyyyyyyyy");
    if (quant < 1) {
      alert("quantity cant be less than one ");
    } else {
      try {
        const response = await axios.put(
          `http://localhost:9001/quantity/${ids}`,
          {
            quant,
            id,
          }
        );
        console.log(response, "quantitybackendddddd");
      } catch (E) {
        console.log(E);
      }
    }

    fetchProducts();
  };
  const handledelete = async (ids) => {
    const id = Userid();

    // console.log(ids, id, "idas & id object and user");
    try {
      const response = await axios.delete(
        `http://localhost:9001/deletecartitem/${ids}`,
        {
          data: { id },
        }
      );
      console.log(response, "deleteitems");
      if (response.data.success) {
        toast.success("successfully Deleted");
      } else {
        toast.error("Some issues are there");
      }
    } catch (e) {
      console.log(e);
    }
    fetchProducts();
  };
  // console.log(cartdata[0], "oooooooooooooooooo");
  let sum = 0;
  console.log(totalvalue, "sumoftotalllllllllll");
  const id = Userid();

  return !id ? (
    <div>(navigate("/signup"))</div>
  ) : (
    <div style={{ background: "" }} className="m-2">
      <h2 onClick={handleback} style={{ top: "0px", left: "0px" }}>
        <IoChevronBackCircle />
      </h2>
      {cartdata.map((carts) => {
        return (
          <div>
            <div
              className="d-flex justify-content-evenly m-2 cartlistcontainer"
              style={{ backgroundColor: "white" }}
            >
              <div className="m-2">
                <img
                  src={carts.image_src}
                  alt={carts.name}
                  style={{
                    height: "200px",
                    width: "200px",
                    borderRadius: "20px",
                  }}
                />
              </div>
              <div className="m-2 d-flex flex-column justify-content-center  ">
                <h5
                  style={{
                    width: "200px",
                    overflow: "hidden",
                    color: "rgb(224,38,106)",
                  }}
                  className="cartlistname"
                >
                  {carts.name}{" "}
                </h5>
                <div className="d-flex cartlistquantity">
                  <div
                    className="d-flex "
                    style={{ border: "2px solid black" }}
                  >
                    <h1 className="m-2">
                      <FiMinusSquare
                        onClick={() =>
                          handlequantity(carts.quantity - 1, carts._id)
                        }
                      />
                    </h1>
                    <h1 className="m-2">{carts.quantity}</h1>

                    <h1 className="m-2">
                      <MdOutlineAddBox
                        onClick={() =>
                          handlequantity(carts.quantity + 1, carts._id)
                        }
                      />
                    </h1>
                  </div>
                  <div className="">
                    <h3
                      style={{
                        marginTop: "1.0rem",
                        color: "blue",
                        // marginLeft: "1.3rem",
                      }}
                    >
                      Rs.{carts.price}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="m-2 d-flex flex-column justify-content-center  cartlistdeleteprice">
                <p>
                  <MdDelete
                    style={{ height: "30px", width: "30px" }}
                    fill="red"
                    onClick={() => handledelete(carts._id)}
                  />{" "}
                </p>
                <h3 style={{ color: "green" }}>
                  Rs. {carts.price * carts.quantity}
                </h3>
              </div>
            </div>
          </div>
        );
      })}
      <div
        className="d-flex justify-content-center justify-content-evenly"
        style={{ backgroundColor: "white", color: "red" }}
      >
        {" "}
        <h1 className="d-flex justify-content-center align-content-center">
          {" "}
          Total Rs. <span style={{ color: "black" }}>{totalvalue}</span>
        </h1>
        <Button style={{ backgroundColor: "yellow" }}>Proceed</Button>
      </div>
    </div>
  );
};

export default Cart;
