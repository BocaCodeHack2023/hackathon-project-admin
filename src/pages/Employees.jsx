import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import HTTP from "../utils/http";

export default function Employees({ showSidebar, setShowSidebar }) {
  const [employeeList, setEmployeeList] = useState([]);
  const [users, setUsers] = useState({}); // State for user data

  useEffect(() => {
    HTTP({
      url: "/users",
      method: "GET",
    })
      .then((res) => res.data)
      .then((data) => {
        setEmployeeList(data);

        // Assuming user data has an ID and Name, you can create a user dictionary
        const userDict = {};
        data.forEach((user) => {
          userDict[user.id] = user;
        });
        setUsers(userDict);
      });
  }, []);

  return (
    <>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div className="page-title mt-5">Profiles</div>
      <div className="row card-grid">
        {employeeList.map((employee, index) => (
          <div className="col-md-4 mb-4" key={employee.id}>
            <div className="card" style={{ width: "18em" }}>
              <div className="card-body">
                <h5 className="card-title">
                  {employee.name} {employee.last_name}
                </h5>
                <p className="card-text">{users[employee.user_id]?.name}</p>
                <p className="card-subtitle mb-2 text-muted">
                  Id: {employee.employee_id}
                </p>
                <p>Phone Number: {employee.phone}</p>
                <p>Email: {employee.email}</p>
                <a href={`/employees/${employee._id}`} className="card-link">
                  See Profile
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
