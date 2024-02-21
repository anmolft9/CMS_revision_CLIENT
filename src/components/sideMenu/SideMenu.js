import Button from "react-bootstrap/Button";
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
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
