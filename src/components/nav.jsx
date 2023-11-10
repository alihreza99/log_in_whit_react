import react from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
export default function App() {
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      style={{ width: "100%", display: "flex", position: "absolute" }}
    >
      <Container className="navparent">
        <Navbar.Brand>فروشگاه آنلاین</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link className="navlink">
            <Link style={{ color: "white", textDecoration: "none" }} to={"/"}>
              خانه
            </Link>
          </Nav.Link>
          <Nav.Link className="navlink">
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to={"/log"}
            >
              ورود
            </Link>
          </Nav.Link>
          <Nav.Link className="navlink">
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to={"/kharid"}
            >
              فروشگاه
            </Link>
          </Nav.Link>
        </Nav>
        <Nav.Link className="navlink">
          <Link style={{ color: "white", textDecoration: "none" }} to={"/shop"}>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <i
                  className="fa-solid fa-cart-shopping"
                  style={{ color: " #d3d7df", position: "relative" }}
                  >
                </i>
              </Navbar.Text>
            </Navbar.Collapse>
          </Link>
        </Nav.Link>
        <Navbar.Toggle />
      </Container>
    </Navbar>
  );
}
