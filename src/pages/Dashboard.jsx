import { useEffect, useState } from "react";
import EmployeeTable from "../components/EmployeeTable";
import Sidebar from "../components/Sidebar.jsx";
import "../styles/dashboard.css";
import HTTP from "../utils/http.js";

export default function Dashboard({ showSidebar, setShowSidebar }) {
  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    HTTP({ 
      url: "/users",
      method: "GET",
    })
      .then((res) => res.data)
      .then((data) => setEmployeeList(data));
  }, [employeeList]);

  return (
    <>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
      <div className={`${!showSidebar ? "marginHidden" : "marginShown" }`}>
        <EmployeeTable employeeList={employeeList} setEmployeeList={setEmployeeList}/>
      </div>
    </>
  );
}
