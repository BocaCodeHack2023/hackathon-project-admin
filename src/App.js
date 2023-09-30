import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useState } from 'react';

export const UserContext = createContext({})

function App() {
  const [ user, setUserState ] = useState()

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
