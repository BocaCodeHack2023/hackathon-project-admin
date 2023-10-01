import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/login';
import 'bootstrap/dist/css/bootstrap.min.css'
import { createContext, useState } from 'react';
import EmployeeProfile from './pages/EmployeeProfile';


function App() {
  const [ user, setUserState ] = useState()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/:employeeId" element={<EmployeeProfile />} />
        {/* <Route path="*" element={<Err404 />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
