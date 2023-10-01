import { useEffect, useState } from "react"
import HTTP from "../utils/http"
import Sidebar from "../components/Sidebar";

export default function Reports({ showSidebar, setShowSidebar }) {
  const [screenings, setScreenings] = useState([])

  function formatDate(inputDate) {
  const date = new Date(inputDate);
  
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Adding 1 to month because months are zero-based
  const day = String(date.getDate()).padStart(2, '0');
  
  return `${month}/${day}/${year}`;
}


  useEffect(() => {
    HTTP({
      url: "/screenings",
      method: "GET",
    })
      .then((res) => res.data)
      .then((data) => setScreenings(data));
  }, [])

  const formattedDate = formatDate(screenings.date)

  return(
    <>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
      <div className="row m-5">
        {screenings.map((screening, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card" style={{ width: "18em" }}>
              <div className="card-body">
                <h5 className="card-title">{screening.status.charAt(0).toUpperCase() + screening.status.slice(1)}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{formatDate(screening.date)}</h6>
                <p className="card-text">{screening.notes}</p>
                <a href={`/dashboard/${screening.user_id}`} className="card-link">See Profile</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}