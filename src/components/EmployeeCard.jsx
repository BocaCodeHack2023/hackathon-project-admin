export default function EmployeeCard({ employee }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{employee.name}</h5>
        <p className="card-text">{employee.email}</p>
        <p className="card-text">{employee.phone}</p>
        <p className="card-text">{employee.department}</p>
        <p className="card-text">{employee.role}</p>
        <p className="card-text">{employee.manager}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
}