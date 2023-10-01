import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/login';
import EmployeeProfile from './pages/EmployeeProfile';
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/App.css';


function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>} />
        <Route path="/dashboard/:employeeId" element={<EmployeeProfile showSidebar={showSidebar} setShowSidebar={setShowSidebar} />} />
        {/* <Route path="*" element={<Err404 />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
