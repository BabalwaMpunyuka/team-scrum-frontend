import { Modal } from "react-bootstrap";
import Button from "../form/button/Button";

function ModalMessage({ title, dismissible = true, onHide, children, show, rest }) {
  return (
    <Modal show={show} aria-labelledby="contained-modal-title-vcenter" size="lg" centered>
      {/*Modal header  */}
      {dismissible ? (
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
          <Button
            type={"button"}
            onClick={onHide}
          >X</Button>
        </Modal.Header>
      ) : (
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
        </Modal.Header>
      )}

      {/* Modal body */}
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
}

export default ModalMessage;
