import '../styles/employeeTable.css'

export default function EmployeeTable({ employeeList }) {
    return (
      <div className="d-flex justify-content-center">
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
            <tr>
              <th scope="row">1</th>
              <td>First Name</td>
              <td>Last Name</td>
              <td>(123) 456-789</td>
              <td><a href='/:employee'>Details</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
}