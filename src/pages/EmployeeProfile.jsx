import { Col, Container, Row } from "react-bootstrap"

export default function EmployeeProfile() {
  const employee = {
    fName: "Sam",
    lName: "Holmes",
    number: "329847927",
    phoneNumber: "954-777-7777",
    email: "hackForHumanit@cityFurnature.com",
    insurance: {
      DOB: {
        month: "06",
        day: "19",
        year: "1982"
      },
      gender: "male",
      provider: "Sunshine Health",
      memberID: "xyz462372513",
      groupNumber: "7482692",
      BIN: "324897",
      benefitPlan: "Staying Alive",
      effectiveDate: {
        month: "7",
        day: "24",
        year: "2023"
      },
    },
    screenings: 
    [
      {
        location: "Saint Jude's Hospital", 
        address: {
          streetNumber: "262 Danny Thomas Place",
          city: "Memphis", 
          state: "TN",  
          Zip: "38105"
        },
        date: {
          month: "09",
          day: "26",
          year: "2022"
        },
      }
    ]


  }

  return (

    <>
      <div className="d-flex flex-row mb-4">
        <h2 className="w-50 m-4">Name: {employee.fName} {employee.lName}</h2>
        <h2 className="w-50 text-end m-4">Employee ID: {employee.number}</h2>
      </div>
      <h1>Contact</h1>
      <div >
        <h2 className="w-50 m-4">Phone Number: {employee.phoneNumber}</h2>
        <h2 className="w-50 m-4">Email: {employee.email}</h2>
      </div>
      <Container className="border border-black border-4"
      style={{
        backgroundColor: "#f6f8ff"
      }}>
      <h1>Medical Information </h1>
        <Row className="border border-black ">
          <Col className="border border-black"><h2 className=" m-4">Date of Birth: {employee.insurance.DOB.month}/{employee.insurance.DOB.day}/{employee.insurance.DOB.year}</h2></Col>
          <Col className="border border-black"><h2 className="w-50 m-4">Gender: {employee.insurance.gender}</h2></Col>
        </Row>
        <Row className="border border-black ">

          <Col className="border-top border-black"><h2 className="w-50 m-4">Insurance Provider: {employee.insurance.provider}</h2></Col>
          <Col className="border border-black"><h2 className="m-4">Insurance Member ID: {employee.insurance.memberID}</h2></Col>
        </Row>
        <Row className="border border-black ">

          <Col className="border border-black"><h2 className="m-4">Insurance Group Number: {employee.insurance.groupNumber}</h2></Col>
          <Col className="border border-black"><h2 className="m-4">Insurance BIN: {employee.insurance.BIN}</h2></Col>
          <Col className="border border-black"><h2 className="m-4">Insurance Benefit Plan: {employee.insurance.benefitPlan}</h2></Col>
        </Row>

      </Container>

    </>
  )
}
