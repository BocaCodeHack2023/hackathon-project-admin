import { useEffect, useState } from 'react';
import '../styles/dashboard.css'
import NewEmployeeModal from './NewEmployeeModal';

export default function EmployeeTable({ employeeList, setEmployeeList }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpen = () => { setOpen(true) };
  const handleClose = () => { setOpen(false) };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_ENDPOINT}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setEmployeeList(data));
  }, []);

  return (
    <> 
      <h1 className="dashboardTitle">Welcome, (admin name)</h1>
      <div className="d-flex justify-content-center mt-5">
        <div className="tableComplete">
          <div className="d-flex justify-content-between">
            <input className='searchBox' type='text' placeholder='Search' onChange={(e) => setSearchQuery(e.target.value)}/>
            <button className='addButton' onClick={handleOpen}>Add +</button>
          </div>
          <table className="table employeeTable">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Phone</th>
              </tr>
            </thead>
            <tbody>
              {/* Placeholder info
                <tr>
                    <th scope="row">1</th>
                    <td className='employeeTableRow'>Lorenzo</td>
                    <td className='employeeTableRow'>Mokwa</td>
                    <td className='employeeTableRow'>1234567</td>
                    <td className='employeeTableRow'><a href="/dashboard/1234">Details</a></td>
                  </tr> */}
              
              {/* Map through employeeList and display each employee as a row in the table */}
              {searchQuery === "" 
                ? (employeeList.map((employee, index) => (
                  <tr key={index}>
                    <th scope="row">{employee.employee_id}</th>
                    <td className='employeeTableRow'>{employee.name}</td>
                    <td className='employeeTableRow'>{employee.last_name}</td>
                    <td className='employeeTableRow'>{employee.phone}</td>
                    <td className='employeeTableRow'><a href={`/dashboard/${employee._id}`}>Details</a></td>
                  </tr>
                )))
                
                // If searchQuery is not empty, filter the employeeList and display the filtered list
                : (employeeList.filter(employee => employee.firstName.toLowerCase().includes(searchQuery.toLowerCase())).map((employee, index) => (
                  <tr key={index}>
                    {console.log(employee)}
                    <th scope="row">{employee.id}</th>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.phone}</td>
                    <td><a href={`/dashboard/${employee._id}`}>Details</a></td>
                  </tr>
                )))
                }
            </tbody>
          </table>
        </div>
      </div>
      {open && <NewEmployeeModal handleOpen={handleOpen} handleClose={handleClose}/> }
    </>
  )
}