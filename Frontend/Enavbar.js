import axios from "axios";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./Ehomestyle.css";

import CartIcon from "./carticon";
function Enavbar(props) {
  const handlelogout = async () => {
    const token = localStorage.getItem("token");
    localStorage.removeItem("token");
    toast.success("logged out");
    try {
      const response = await axios.delete(`http://localhost:9001/deletetoken`, {
        token,
      });
      console.log(response, "loggedout");
      if (response.data && response.data.sucess) {
        toast.success("successfully looged out");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {/* <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
            <Nav.Link>
              {" "}
              <Link
                to="signup"
                className="navbarelement "
                style={{ fontStyle: "none" }}
              >
                Signup{" "}
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="registration"
                className="navbarelement"
                style={{ fontStyle: "none" }}
              >
                Registartion
              </Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link
                to="ehome"
                className="navbarelement "
                style={{ fontStyle: "none" }}
              >
                Home{" "}
              </Link>
            </Nav.Link>

            <h4
              onClick={handlelogout}
              style={{
                border: "2px solid gray",
                backgroundColor: "rgb(180,120,120)",
                borderRadius: "50px",
              }}
            >
              <RiLogoutCircleRLine /> Log-Out
            </h4>
          </Nav>
          <Form className="d-flex enavbarsearch">
            <Nav.Link>
              {" "}
              <Link
                to="cart"
                className="navbarelement "
                style={{ fontStyle: "none" }}
              >
                {/* <MdShoppingCart style={{ height: "30px", width: "30px", margin: "5px" }}/> */}
                <div className="d-flex ">
                  <CartIcon />
                  <h4
                    style={{
                      color: "red",
                      marginTop: "-0.7rem",
                      // fontStyle: "none",
                      textDecorationLine: "none",
                    }}
                  >
                    {props.cartlength}
                  </h4>
                </div>
              </Link>
            </Nav.Link>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Enavbar;
