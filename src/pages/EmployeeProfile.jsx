import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap"
import Sidebar from "../components/Sidebar";

export default function EmployeeProfile({ showSidebar, setShowSidebar }) {
  const { employeeId } = useParams();
  const [employee, setEmployee] = useState([]);
  
  useEffect(() => {
    fetch(`${process.env.REACT_APP_ENDPOINT}/users/${employeeId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setEmployee(data));
  }, [employeeId]);

  const originalDateString = employee.dob;
  const date = new Date(originalDateString);

  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 to the month since it's zero-based
  const day = date.getDate().toString().padStart(2, '0');
  const year = date.getFullYear().toString();

  const formattedDate = `${month}/${day}/${year}`;

  console.log(formattedDate);
  return (

    <>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
      <div className="d-flex flex-row mb-4">
        <h2 className="w-50 m-4">Name: {employee.name} {employee.last_name}</h2>
        <h2 className="w-50 text-end m-4">Employee ID: {employee.employee_id}</h2>
      </div>
      <h1>Contact</h1>
      <div >
        <h2 className=" m-4">Phone Number: {employee.phone}</h2>
        <h2 className=" m-4">Email: {employee.email}</h2>
        <h2 className=" m-4">Address: {employee.address_street} {employee.address_city} {employee.address_zip}</h2>
      </div>

      <Container className="border border-black border-4"
        style={{
          backgroundColor: "#f6f8ff"
        }}>
        <h1>Medical Information </h1>
        <Row className="border border-black ">
          <Col className="border border-black"><h2 className=" m-4">Date of Birth: {formattedDate}</h2></Col>
          <Col className="border border-black"><h2 className="w-50 m-4">Gender: {employee.gender}</h2></Col>
        </Row>
        <Row className="border border-black ">

          <Col className="border-top border-black"><h2 className="w-50 m-4">Insurance Provider: {employee.insurance_provider}</h2></Col>
        </Row>


      </Container>

    </>
  )
}
