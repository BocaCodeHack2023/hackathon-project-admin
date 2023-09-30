import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/login';
import 'bootstrap/dist/css/bootstrap.min.css'
import { createContext, useState } from 'react';

export const UserContext = createContext({})

function App() {
  const [ user, setUserState ] = useState()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="*" element={<Err404 />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
