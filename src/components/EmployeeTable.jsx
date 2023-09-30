import { useEffect, useState } from 'react';
import '../styles/employeeTable.css'

export default function EmployeeTable({ employeeList }) {
  const [searchQuery, setSearchQuery] = useState("");

    return (
      <>      
        <div className="d-flex justify-content-center">
          <div className="">
            <input type='text' placeholder='Search Employee' onChange={(e) => setSearchQuery(e.target.value)}/>
            <table className="table employeeTable mt-5">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Phone</th>
                </tr>
              </thead>
              <tbody>
                {searchQuery === "" 
                  ? (employeeList.map((employee, index) => (
                    <tr key={index}>
                      <th scope="row">{employee.id}</th>
                      <td>{employee.firstName}</td>
                      <td>{employee.lastName}</td>
                      <td>{employee.phone}</td>
                      <td><a href='/:employee'>Details</a></td>
                    </tr>
                  )))
                  : (employeeList.filter(employee => employee.firstName.toLowerCase().includes(searchQuery.toLowerCase())).map((employee, index) => (
                    <tr key={index}>
                      <th scope="row">{employee.id}</th>
                      <td>{employee.firstName}</td>
                      <td>{employee.lastName}</td>
                      <td>{employee.phone}</td>
                      <td><a href='/:employee'>Details</a></td>
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