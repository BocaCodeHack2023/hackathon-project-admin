import { useState } from "react";
import EmployeeTable from "../components/EmployeeTable";
import { employeeList } from "../data";

export default function Dashboard() {
  // const [employeeList, setEmployeeList] = useState([]);

  return (
    <>
      <h1 className="dashboardTitle">Welcome, (admin name)</h1>
      <EmployeeTable employeeList={employeeList}/>
    </>
  );
}