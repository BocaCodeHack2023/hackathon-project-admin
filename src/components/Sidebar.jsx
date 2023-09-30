import { useState } from 'react';
import '../styles/sidebar.css';

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  return(
    <>      
      <div className="sidebar">
        <button className="sidebarButton" onClick={() => setShowSidebar(!showSidebar)}>Hide</button>
        <div className='d-flex flex-column'>
          <h1>ACS Logo</h1> 
          <a href="/dashboard">Dashboard</a>
          <a href="/screenings">Screenings</a>
          <a href="/employees">Employees</a>
        </div>
      </div>
    </>
  )
}
