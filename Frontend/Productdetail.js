import React from "react";
import { Button } from "react-bootstrap";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Addtocart from "./Addtocart";
import "./Ehomestyle.css";

const Productdetail = () => {
  // useEffect(() => {
  //   anime({
  //     targets: '.anime-js-element',
  //     translateX: 250,
  //     duration: 800,
  //   });
  // }, []);
  const location = useLocation();
  //   const datas = location.state.datas;
  const { state } = location;
  const { product } = state;
  console.log(product, "ppppppppppppppppppppppppppppppp");
  const handleAddtocart = async (id) => {
    const response = await Addtocart(id);
    console.log(response.data.message, "ehome resonse wwwwwwwwwwwwww");
    if (response.success) {
      toast.success("successfully added to cart");
    } else {
      toast.error("Cant be added");
    }
  };
  return (
    // <CSSTransition timeout={300} classNames="fade">
    <div className="d-flex justify-content-center anime-js-element">
      <div style={{ backgroundColor: "white" }} className="m-3 d-flex ">
        <div className="d-flex justify-content-center align-items-center m-2">
          <img
            src={product.image_src[0]}
            alt={product.name}
            style={{ height: "300px", width: "300px" }}
            className="product-image"
          />
        </div>
        <div className="d-flex justify-content-center flex-column  align-items-center m-2">
          <h4 style={{ color: "rgb(224,38,106)" }}>{product.name}</h4>

          <p>Vendor: {product.vendor}</p>
          <p style={{ color: "blue" }}>Price: ${product.price}</p>
          <p style={{ color: "red", textDecorationLine: "line-through" }}>
            Compare at Price: ${product.compare_at_price}
          </p>
          <p>Tag: {product.tag}</p>
          <div>
            <div className="d-flex ">
              <FaStar fill="#ffd700 " />
              <FaStar fill="#ffd700 " />
              <FaStar fill="#ffd700 " />
              <FaStar fill="#ffd700 " />
              <FaStarHalf fill="#ffd700 " />
              (3 Review)
            </div>
            <h3>Options:</h3>
            <ul>
              {product.options.map((option) => (
                <li key={option.id}>
                  {option.name}: {option.value}
                </li>
              ))}
            </ul>
          </div>
          <Button className="m-2" onClick={() => handleAddtocart(product._id)}>
            Add To Cart
          </Button>
        </div>
      </div>
    </div>
    // </CSSTransition>
  );
};

export default Productdetail;
