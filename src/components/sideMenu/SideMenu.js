import { ListGroup } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch, useSelector } from "react-redux";
import { setshowSideMenu } from "../../pages/systemState/SystemSlice";
import { Link } from "react-router-dom";

export const SideMenu = () => {
  const dispatch = useDispatch();
  const { showSideMenu } = useSelector((state) => state.system);
  //   const [show, setShow] = useState(false);

  const handleClose = () => dispatch(setshowSideMenu(false));

  return (
    <>
      <Offcanvas show={showSideMenu} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>CMS Admin Panel</Offcanvas.Title>
        </Offcanvas.Header>
        <hr />
        <Offcanvas.Body>
          <ListGroup variant="flush" className="fs-5">
            <ListGroup.Item>
              <Link to="/dashboard" onClick={handleClose} className="nav-link">
                <i class="fa-solid fa-chart-line"></i> Dashboard
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="" onClick={handleClose} className="nav-link">
                <i class="fa-solid fa-list"></i> Categories
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="/products" onClick={handleClose} className="nav-link">
                <i class="fa-solid fa-box"></i> Products
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="" onClick={handleClose} className="nav-link">
                <i class="fa-regular fa-credit-card"></i> Payment Method
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="" onClick={handleClose} className="nav-link">
                <i class="fa-solid fa-users"></i> Users
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="" onClick={handleClose} className="nav-link">
                <i class="fa-solid fa-table-list"></i> Orders
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="" onClick={handleClose} className="nav-link">
                <i class="fa-solid fa-comment-dots"></i> Reviews
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="" onClick={handleClose} className="nav-link">
                <i class="fa-solid fa-gears"></i> Settings
              </Link>
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
