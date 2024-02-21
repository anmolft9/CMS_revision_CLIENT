import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setshowSideMenu } from "../../pages/systemState/SystemSlice";

export const Header = () => {
  const dispatch = useDispatch();
  const handleShow = () => dispatch(setshowSideMenu(true));

  return (
    <Navbar collapseOnSelect expand="md" className="bg-body-tertiary">
      <Container>
        <div>
          <button style={{ border: 0 }}>
            <i class="fa-solid fa-bars" onClick={handleShow}></i>
          </button>{" "}
          <Navbar.Brand href="/">AdminCMS</Navbar.Brand>
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/">
              Login
            </Link>
            <Link className="nav-link" to="/register">
              Register
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
