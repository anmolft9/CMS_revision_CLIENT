import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setshowSideMenu } from "../../pages/systemState/SystemSlice";
import { adminLogout } from "../../pages/login/userAction";

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleShow = () => dispatch(setshowSideMenu(true));
  const { user } = useSelector((state) => state.admin);

  const handleOnLogout = () => {
    dispatch(adminLogout());
    navigate("/");
  };

  return (
    <Navbar collapseOnSelect expand="md" className="bg-body-tertiary">
      <Container>
        <div>
          {user._id && (
            <button style={{ border: 0 }}>
              <i class="fa-solid fa-bars" onClick={handleShow}></i>
            </button>
          )}

          <Navbar.Brand href="/">AdminCMS</Navbar.Brand>
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user._id ? (
              <Link className="nav-link" to="" onClick={handleOnLogout}>
                Logout
              </Link>
            ) : (
              <>
                <Link className="nav-link" to="/">
                  Login
                </Link>
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
