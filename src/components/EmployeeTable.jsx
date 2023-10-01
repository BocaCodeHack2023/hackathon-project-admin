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

  function formatDate(inputDate) {
    const date = new Date(inputDate);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${month}/${day}/${year}`;
  }

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
                  <th scope="col">Name</th>
                  <th scope="col">Last Screening</th>
                </tr>
              </thead>
              <tbody>
                {searchQuery === ''
                  ? employeeList.map((employee, index) => (
                      <tr key={index}>
                        <th scope="row">{employee.employee_id}</th>
                        <td className='employeeTableRow'>{employee.name} {employee.last_name}</td>
                        <td className='employeeTableRow'>{formatDate(employee.last_screening)}</td>
                        <td className='employeeTableRow'>
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
                          <td className='employeeTableRow'>{formatDate(employee.last_screening)}</td>
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
