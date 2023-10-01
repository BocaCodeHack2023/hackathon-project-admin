import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import HTTP from '../utils/http';
import stateInitials from '../utils/us-states.json';
import '../styles/dashboard.css';


export default function NewEmployeeModal({ handleOpen, handleClose, setEmployeeList }) {
  const [formData, setFormData] = useState({
    company_id: "65187f25a4df9ce3628fc873",
  });

  const updateForm = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    HTTP({
      url: "/users",
      method: "POST",
      data: formData,
    })
      .then((res) => res.data)
      .then((data) => setEmployeeList(data));
      handleClose();
  }

  return (
      <Modal show={handleOpen} centered >
        <Modal.Header closeButton onHide={handleClose}>
          <Modal.Title>New Employee</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <form id='new-employee'>
          <div class="form-group">
            <label for="First Name">First Name</label>
            <input name="name" onChange={updateForm} type="text" class="form-control" aria-describedby="emailHelp" placeholder="First Name" />
          </div>
          <div class="form-group">
            <label>Last Name</label>
            <input name="last_name" onChange={updateForm} type="text" class="form-control" placeholder="Last Name" />
          </div>
          <div class="form-group">
            <label>Employee Id</label>
            <input name="employee_id" onChange={updateForm} type="password" class="form-control" placeholder="Id" />
          </div>
          <div class="form-group">
            <label>Email</label>
            <input name="email" onChange={updateForm} type="email" class="form-control" placeholder="Email" />
          </div>
          <div class="form-group">
            <label>Phone Number</label>
            <input name="phone" onChange={updateForm} type="text" class="form-control" placeholder="Phone" />
          </div>
          <div class="form-group">
            <label>Address</label>
            <input name="address_street" onChange={updateForm} type="text" class="form-control" placeholder="Phone" />
          </div>
          <div class="form-group">
            <label>City</label>
            <input name="address_street" onChange={updateForm} type="text" class="form-control" placeholder="Phone" />
          </div>
          <div class="form-group">
            <label>State</label>
            <select name='state' onChange={updateForm} class='form-control'>
              <option value="select" disabled>Select</option>
              {Object.entries(stateInitials).map(([stateName, stateAbbreviation]) => (
                <option value={stateAbbreviation}>{stateName}</option>
              ))}
            </select>
          </div>
          <div class="form-group">
            <label>Zip Code</label>
            <input name="address_street" onChange={updateForm} type="text" class="form-control" placeholder="Phone" />
          </div>
          <div class="form-group">
            <label>Date of Birth</label>
            <input name="dob" onChange={updateForm} type="date" class="form-control" placeholder="Date of Birth" />
          </div>
          <div class="form-group">
            <label>Sex</label>
            <select name='gender' onChange={updateForm} class="form-control" >
              <option value="select" disabled>Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div class="form-group">
            <label>Insurance Provider</label>
            <input name="insurance_provider" onChange={updateForm} type="password" class="form-control" placeholder="Insurance" />
          </div>
        </form>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={handleClose} variant="secondary">Close</Button>
          <Button variant="primary" onClick={handleSubmit} form='new-employee'>Add</Button>
        </Modal.Footer>
      </Modal>
  );
}