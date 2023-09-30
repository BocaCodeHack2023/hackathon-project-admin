import { useEffect, useState } from 'react';
import '../styles/employeeTable.css'

export default function EmployeeTable({ employeeList }) {
  const [searchQuery, setSearchQuery] = useState("");

    return (
      <> 
        <div className="d-flex justify-content-center">
          <div className="tableComplete">
            <div className="d-flex justify-content-between">
              <input className='searchBox' type='text' placeholder='Search' onChange={(e) => setSearchQuery(e.target.value)}/>
              <button className='btn btn-primary'>Add +</button>
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
                  <tr>
                      <th scope="row">1</th>
                      <td className='employeeTableRow'>Lorenzo</td>
                      <td className='employeeTableRow'>Mokwa</td>
                      <td className='employeeTableRow'>1234567</td>
                      <td className='employeeTableRow'><a href="">Details</a></td>
                    </tr>
                {searchQuery === "" 
                  ? (employeeList.map((employee, index) => (
                    <tr key={index}>
                      <th scope="row">{employee.id}</th>
                      <td className='employeeTableRow'>{employee.firstName}</td>
                      <td className='employeeTableRow'>{employee.lastName}</td>
                      <td className='employeeTableRow'>{employee.phone}</td>
                      <td className='employeeTableRow'><a href={`/dashboard/${employee.id}`}>Details</a></td>
                    </tr>
                  )))
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