import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import HTTP from '../utils/http';
import stateInitials from '../utils/us-states.json';
import '../styles/dashboard.css';


export default function NewEmployeeModal({ handleOpen, handleClose, setEmployeeList }) {
  const [formData, setFormData] = useState({
    company_id: "65187f25a4df9ce3628fc873"
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
      handleClose();
  }

  return (
      <Modal show={handleOpen} centered >
        <Modal.Header closeButton onHide={handleClose}>
          <Modal.Title>New Employee</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <form id='new-employee'>
          <div>
            <div className="form-group">
              <label for="First Name">First Name</label>
              <input id="name" onChange={updateForm} type="text" className="form-control" aria-describedby="emailHelp" placeholder="First Name" />
            </div>
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input id="last_name" onChange={updateForm} type="text" className="form-control" placeholder="Last Name" />
          </div>
          <div className="form-group">
            <label>Employee Id</label>
            <input id="employee_id" onChange={updateForm} type="text" className="form-control" placeholder="Employee Id" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input id="email" onChange={updateForm} type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input id="phone" onChange={updateForm} type="text" className="form-control" placeholder="Phone" />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input id="address_street" onChange={updateForm} type="text" className="form-control" placeholder="Address" />
          </div>
          <div className="form-group">
            <label>City</label>
            <input id="address_city" onChange={updateForm} type="text" className="form-control" placeholder="City" />
          </div>
          <div className="form-group">
            <label>State</label>
            <select id='address_state' onChange={updateForm} className='form-control'>
              <option value="select" disabled>Select</option>
              {Object.entries(stateInitials).map(([stateName, stateAbbreviation]) => (
                <option value={stateAbbreviation}>{stateName}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Zip Code</label>
            <input id="address_zip" onChange={updateForm} type="text" className="form-control" placeholder="Phone" />
          </div>
          <div className="form-group">
            <label>Date of Birth</label>
            <input id="dob" onChange={updateForm} type="date" className="form-control" placeholder="Date of Birth" />
          </div>
          <div className="form-group">
            <label>Sex</label>
            <select id='gender' onChange={updateForm} className="form-control" >
              <option value="select">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="form-group">
            <label>Insurance Provider</label>
            <input id="insurance_provider" onChange={updateForm} type="text" className="form-control" placeholder="Insurance Provider" />
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

