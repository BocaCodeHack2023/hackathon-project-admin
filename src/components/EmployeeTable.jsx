import { useEffect, useState } from 'react';
import '../styles/dashboard.css';
import NewEmployeeModal from './NewEmployeeModal';

export default function EmployeeTable({ employeeList, setEmployeeList }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <h1 className="dashboardTitle">Welcome, Idan</h1>
      <div className="d-flex justify-content-center mt-5">
        <div className="tableComplete">
          <div className="d-flex justify-content-between tableHeader">
            <input
              className="searchBox"
              type="text"
              placeholder="Search"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="addButton" onClick={handleOpen}>
              Add +
            </button>
          </div>
          <div className="tableContainer">
            <table className="table employeeTable">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Phone</th>
                </tr>
              </thead>
              <tbody>
                {searchQuery === ''
                  ? employeeList.map((employee, index) => (
                      <tr key={index}>
                        <th scope="row">{employee.employee_id}</th>
                        <td className='employeeTableRow'>{employee.name}</td>
                        <td className='employeeTableRow'>{employee.last_name}</td>
                        <td className='employeeTableRow'>{employee.phone}</td>
                        <td className='employeeTableRow'>
                          <a href={`/dashboard/${employee._id}`}>Details</a>
                        </td>
                      </tr>
                    ))
                  : employeeList
                      .filter((employee) =>
                        employee.name.toLowerCase().includes(searchQuery.toLowerCase())
                      )
                      .map((employee, index) => (
                        <tr key={index}>
                          <th scope="row">{employee.employee_id}</th>
                          <td className='employeeTableRow'>{employee.name}</td>
                          <td className='employeeTableRow'>{employee.last_name}</td>
                          <td className='employeeTableRow'>{employee.phone}</td>
                          <td className='employeeTableRow'>
                            <a href={`/dashboard/${employee._id}`}>Details</a>
                          </td>
                        </tr>
                      ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {open && <NewEmployeeModal handleOpen={handleOpen} handleClose={handleClose} setEmployeeList={setEmployeeList} />}
    </>
  );
}
