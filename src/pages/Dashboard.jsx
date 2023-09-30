import { useEffect, useState } from "react";
import EmployeeTable from "../components/EmployeeTable";
import Sidebar from "../components/Sidebar.jsx";
import "../styles/dashboard.css";

export default function Dashboard() {
  const [employeeList, setEmployeeList] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    fetch("https://harmless-cod-stirring.ngrok-free.app/api/v1/admin/users", {
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
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
      <div className={`${!showSidebar ? "marginHidden" : "marginShown" }`}>
        <EmployeeTable employeeList={employeeList} setEmployeeList={setEmployeeList}/>
      </div>
    </>
  );
}