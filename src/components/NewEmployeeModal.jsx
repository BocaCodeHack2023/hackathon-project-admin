import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../styles/dashboard.css';

export default function NewEmployeeModal({ handleOpen, handleClose }) {

  return (
      <Modal show={handleOpen} centered >
        <Modal.Header closeButton onHide={handleClose}>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
          <h1>
            hi
          </h1>

          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={handleClose} variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal>
  );
}