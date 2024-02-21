import { ListGroup } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch, useSelector } from "react-redux";
import { setshowSideMenu } from "../../pages/systemState/SystemSlice";

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
              <i class="fa-solid fa-chart-line"></i> Dashboard
            </ListGroup.Item>
            <ListGroup.Item>
              <i class="fa-solid fa-list"></i> Categories
            </ListGroup.Item>
            <ListGroup.Item>
              <i class="fa-solid fa-box"></i> Products
            </ListGroup.Item>
            <ListGroup.Item>
              <i class="fa-regular fa-credit-card"></i> Payment Method
            </ListGroup.Item>
            <ListGroup.Item>
              <i class="fa-solid fa-users"></i> Users
            </ListGroup.Item>
            <ListGroup.Item>
              <i class="fa-solid fa-table-list"></i> Orders
            </ListGroup.Item>
            <ListGroup.Item>
              <i class="fa-solid fa-comment-dots"></i> Reviews
            </ListGroup.Item>
            <ListGroup.Item>
              <i class="fa-solid fa-gears"></i> Settings
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
