import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Login, Dashboard, EmployeeProfile, Reports, Employees } from '../src/utils/Pages.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/App.css';


function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>} />
        <Route path="/dashboard/:employeeId" element={<EmployeeProfile showSidebar={showSidebar} setShowSidebar={setShowSidebar} />} />

        <Route path="/reports" element={<Reports showSidebar={showSidebar} setShowSidebar={setShowSidebar} />} />

        <Route path="/employees" element={<Employees showSidebar={showSidebar} setShowSidebar={setShowSidebar} />} />
        <Route path="/employees/:employeeId" element={<EmployeeProfile showSidebar={showSidebar} setShowSidebar={setShowSidebar} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
