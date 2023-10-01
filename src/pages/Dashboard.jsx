import { useEffect, useState } from "react";
import EmployeeTable from "../components/EmployeeTable";
import Sidebar from "../components/Sidebar.jsx";
import "../styles/dashboard.css";
// import { employeeList } from "../data";


export default function Dashboard({ showSidebar, setShowSidebar }) {
  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_ENDPOINT}/users`, {
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
