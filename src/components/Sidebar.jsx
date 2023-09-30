import { useState } from 'react';
import '../styles/sidebar.css';

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  return(
    <>      
      <div className={`${!showSidebar ? "hiddenSidebar" : "sidebar"}`}>
        <button className="sidebarButton" onClick={() => setShowSidebar(!showSidebar)}>{!showSidebar ? "show" : "hide"}</button>
        <div className='d-flex flex-column'>
          {showSidebar === true 
            ? (
              <>
                <div className="sidebarItem">
                  <span className="sidebarTitle">Dashboard</span>
                </div>
                <div className="sidebarItem">
                  <span className="sidebarTitle">Employees</span>
                </div>
                <div className="sidebarItem">
                  <span className="sidebarTitle">Reports</span>
                </div>
                <div className="sidebarItem">
                  <span className="sidebarTitle">Settings</span>
                </div>
              </>
              )
            : (
              <>
                <div className="sidebarItem">
                  <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm320 96c0-26.9-16.5-49.9-40-59.3V88c0-13.3-10.7-24-24-24s-24 10.7-24 24V292.7c-23.5 9.5-40 32.5-40 59.3c0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>
                </div>
                <div className="sidebarItem">
                  <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 640 512"><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"/></svg>
                </div>
                <div className="sidebarItem">
                <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 384 512"><path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"/></svg>
                </div>
                <div className="sidebarItem">
                  <span className="sidebarTitle">Settings Icon</span>
                </div>
              </>
            )
          }
        </div>
      </div>
    </>
  )
}
