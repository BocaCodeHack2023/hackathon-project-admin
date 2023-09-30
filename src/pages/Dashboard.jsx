import { useState } from "react";
import EmployeeTable from "../components/EmployeeTable";
import Sidebar from "../components/Sidebar.jsx";

export default function Dashboard() {
  const [employeeList, setEmployeeList] = useState([]);

  return (
    <>
      <Sidebar />
      <h1 className="dashboardTitle">Welcome, (admin name)</h1>
      <EmployeeTable employeeList={employeeList}/>
    </>
  );
}