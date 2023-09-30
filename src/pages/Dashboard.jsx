import { useState } from "react";
import EmployeeTable from "../components/EmployeeTable";

export default function Dashboard() {
  const [employeeList, setEmployeeList] = useState([]);

  return (
    <>
      <h1>Welcome</h1>
      <EmployeeTable employeeList={employeeList}/>
    </>
  );
}