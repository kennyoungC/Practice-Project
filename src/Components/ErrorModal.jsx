import { Modal, Button } from "react-bootstrap"

const ErrorModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="bg-warning">
        <Modal.Title id="contained-modal-title-vcenter">
          Invalid Input
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{props.message}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Okay</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ErrorModal
