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
      <Container>
        <Navbar.Brand>Links</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link className="navlink">
            <Link style={{ color: "white", textDecoration: "none" }} to={"/"}>
              Home
            </Link>
          </Nav.Link>
          <Nav.Link className="navlink">
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to={"/log"}
            >
              Log In
            </Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
