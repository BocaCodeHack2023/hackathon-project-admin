import { useEffect, useState } from "react";
import EmployeeTable from "../components/EmployeeTable";
import Sidebar from "../components/Sidebar.jsx";
import "../styles/dashboard.css";
import HTTP from "../utils/http.js";
import ScreeningChart from "../components/ScreeningChart";

export default function Dashboard({ showSidebar, setShowSidebar }) {
  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    HTTP({ 
      url: "/users",
      method: "GET",
    })
      .then((res) => res.data)
      .then((data) => setEmployeeList(data));
  }, []);

  return (
    <>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
      <div className={`${!showSidebar ? "marginHidden" : "marginShown" } mt-5`}>
        <EmployeeTable employeeList={employeeList} setEmployeeList={setEmployeeList}/>
        <ScreeningChart />
      </div>
    </>
  );
}
