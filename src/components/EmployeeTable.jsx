import { useEffect, useState } from 'react';
import '../styles/dashboard.css'

export default function EmployeeTable({ employeeList }) {
  const [searchQuery, setSearchQuery] = useState("");

    return (
      <> 
        <h1 className="dashboardTitle">Welcome, (admin name)</h1>
        <div className="d-flex justify-content-center mt-5">
          <div className="tableComplete">
            <div className="d-flex justify-content-between">
              <input className='searchBox' type='text' placeholder='Search' onChange={(e) => setSearchQuery(e.target.value)}/>
              <button className='addButton'>Add +</button>
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
                      <td className='employeeTableRow'><a href={`/dashboard/${employee.employee_id}`}>Details</a></td>
                    </tr>
                  )))
                  
                  // If searchQuery is not empty, filter the employeeList and display the filtered list
                  : (employeeList.filter(employee => employee.firstName.toLowerCase().includes(searchQuery.toLowerCase())).map((employee, index) => (
                    <tr key={index}>
                      <th scope="row">{employee.id}</th>
                      <td>{employee.firstName}</td>
                      <td>{employee.lastName}</td>
                      <td>{employee.phone}</td>
                      <td><a href={`/dashboard/${employee.id}`}>Details</a></td>
                    </tr>
                  )))
                  }
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
}