import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Ehomestyle.css";

// Import Swiper styles
import axios from "axios";
import { Button } from "react-bootstrap";
import { IoChevronBackCircle } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { animated, config, useSpring } from "react-spring";
import { toast } from "react-toastify";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Addtocart from "./Addtocart";
import Userid from "./Userid";
import ecommercep from "./ecommerce.jpg";
import fifth from "./photos/fifth.jpg";
import first from "./photos/first.jpg";
import fourth from "./photos/fourth.jpg";
import second from "./photos/second.jpg";
import sixth from "./photos/sixth.jpg";
import third from "./photos/third.jpg";

// const token = localStorage.getItem("token");
// const decodedToken = token ? atob(token.split(".")[1]) : null;
// const payload = JSON.parse(decodedToken);
// const { id, email } = payload;
// console.log(id, email, payload, "decode id and email");
import { FaStar, FaStarHalf } from "react-icons/fa";

const Ehome = (props) => {
  const navigate = useNavigate();

  const [datas, setdatas] = useState([]);
  const [tags, settags] = useState("shirt");
  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:9001/cartdata");
      console.log(response.data);
      setdatas(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const handleback = () => {
    navigate(-1);
  };

  const handletag = (tag) => {
    console.log(tag, "this  is tag pass as argumen qqqqqqqqqqqqqqqqq ");
    if (tag === "all") {
      //  tag=="shirt"
    }
    settags(tag);
  };
  const handleAddtocart = async (id) => {
    const response = await Addtocart(id);
    console.log(response.data, "ehome resonse wwwwwwwwwwwwww");
    if (response.data && response.data.success) {
      toast.success("Successfully added to cart");
    } else {
      toast.error("items already added add");
    }
    // console.log(datas.sort(), "sorttttttttttttttt");
  };
  const sortByPricei = (arr) => {
    return arr.sort((a, b) => a.price - b.price);
  };
  const sortByPriced = (arr) => {
    return arr.sort((a, b) => b.price - a.price);
  };
  const handleincreasing = () => {
    setdatas(sortByPricei(datas));
    // fetchProducts();
    settags(tags);
  };
  const handledecreasing = () => {
    setdatas(sortByPriced(datas));
    // fetchProducts();
    settags(tags);
  };
  // const props1 = useSpring({ opacity: 1, from: { opacity: 0 } });
  const props1 = useSpring({
    from: { opacity: 0 },
    to: async (next) => {
      await next({ opacity: 1, transform: "translateY(0px)" });
      await next({ opacity: 0.5, transform: "translateY(20px)" });
      await next({ opacity: 1, transform: "translateY(0px)" });
    },
    config: config.wobbly,
  });

  // return
  const id = Userid();
  // const vaerifytokenholder = Verifytoken();

  return !id ? (
    <div>{navigate("/signup")}</div>
  ) : (
    <animated.div style={props1}>
      {" "}
      <div className="container" style={{ backgroundColor: "" }}>
        <h2 onClick={handleback} style={{ top: "0px", left: "0px" }}>
          <IoChevronBackCircle />
        </h2>
        <div className="subcontainer">
          <div className="swipercontainer">
            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={first} alt="mm" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={second} alt="mm" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={third} alt="mm" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={fourth} alt="mm" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={fifth} alt="mm" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={sixth} alt="mm" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={ecommercep} alt="mm" />
              </SwiperSlide>

              {/* <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide> */}
            </Swiper>
          </div>
          <div className="d-flex justify-content-center ">
            <div className="buttontag">
              <Button
                onClick={() => handletag("shirt")}
                className="m-2 ehometagbtn"
                style={
                  {
                    // backgroundColor: "gray",
                    // color: "black",
                    // borderRadius: "50px",
                  }
                }
              >
                Shirt
              </Button>
              <Button
                style={
                  {
                    // backgroundColor: "gray",
                    // color: "black",
                    // borderRadius: "50px",
                  }
                }
                onClick={() => handletag("T-shirt")}
                className="m-2 ehometagbtn"
              >
                T-Shirt
              </Button>
              <Button
                style={
                  {
                    // backgroundColor: "gray",
                    // color: "black",
                    // borderRadius: "50px",
                  }
                }
                onClick={() => handletag("Denim")}
                className="m-2 ehometagbtn"
              >
                Denim
              </Button>
              <Button
                style={
                  {
                    // backgroundColor: "gray",
                    // color: "black",
                    // borderRadius: "50px",
                  }
                }
                onClick={() => handletag("jacket")}
                className="m-2 ehometagbtn"
              >
                Jacket
              </Button>
              <Button
                style={
                  {
                    // backgroundColor: "gray",
                    // color: "black",
                    // borderRadius: "50px",
                  }
                }
                onClick={() => handleincreasing()}
                className="m-2 ehometagbtn"
              >
                Increasing price
              </Button>
              <Button
                style={
                  {
                    // backgroundColor: "gray",
                    // color: "black",
                    // borderRadius: "50px",
                  }
                }
                onClick={() => handledecreasing()}
                className="m-2 ehometagbtn"
              >
                decreasing price
              </Button>
            </div>
          </div>

          <div className="d-flex flex-wrap justify-content-evenly ">
            {datas.map((product) =>
              tags === product.tag ? (
                // tags == "all" ? (
                <Link
                  style={{ textDecoration: "none " }}
                  to="/productdetail"
                  state={{ product }}
                >
                  <div
                    className="product-card m-3 p-2 "
                    style={{
                      height: "460px",
                      width: "300px",
                      // border: "2px solid red",
                      backgroundColor: "white",
                    }}
                  >
                    <img
                      src={product.image_src[0]}
                      alt={product.name}
                      className="product-image m-2"
                      style={{
                        height: "260px",
                        width: "270px",
                        // borderRadius: "10px",
                      }}
                    />
                    <div className="product-details">
                      <h4
                        className="product-tag m-2"
                        style={{
                          color: "black ",
                          fontWeight: "bold",
                          fontStyle: "oblique",
                        }}
                      >
                        {product.tag}
                      </h4>

                      <h6
                        className="product-name"
                        style={{ color: "rgb(150, 146, 146)" }}
                      >
                        {product.name}
                      </h6>
                      {/* <p className="product-vendor">Vendor: {product.vendor}</p> */}
                      <div className="d-flex ">
                        <FaStar fill="#ffd700 " />
                        <FaStar fill="#ffd700 " />
                        <FaStar fill="#ffd700 " />
                        <FaStar fill="#ffd700 " />
                        <FaStarHalf fill="#ffd700 " />
                        (3 Review)
                      </div>
                      <p
                        className="product-compare-price"
                        style={{
                          textDecorationLine: "line-through",
                          color: "red",
                        }}
                      >
                        Compare at: ${product.compare_at_price}
                      </p>
                      {/* <p className="product-tag">Tag: {product.tag}</p> */}

                      <div
                        className="d-flex justify-content-evenly"
                        style={{ bottom: "0" }}
                        // style={{ position: "sticky" }}
                      >
                        {/* <Link
                          to={{
                            pathname: "/productdetail",
                            // state: { product },
                          }}
                          className="product-link"
                        >
                          View Details
                        </Link> */}
                        <p className="product-price" style={{ color: "blue" }}>
                          Price: ${product.price}
                        </p>
                        <Link>
                          <h6
                            style={{
                              color: "white",
                              backgroundColor: "rgb(180, 63, 63)",
                              padding: "2px",
                              borderRadius: "20px",
                              textDecoration: "none",
                            }}
                            onClick={() => handleAddtocart(product._id)}
                          >
                            {" "}
                            Add to Cart
                          </h6>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Link>
              ) : // ) : null
              null
            )}
          </div>
        </div>
      </div>{" "}
    </animated.div>
  );
};

export default Ehome;
