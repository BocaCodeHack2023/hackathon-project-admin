import { useEffect, useState } from "react";
import HTTP from "../utils/http";
import Sidebar from "../components/Sidebar";

export default function Reports({ showSidebar, setShowSidebar }) {
  const [screenings, setScreenings] = useState([]);
  const [users, setUsers] = useState({});

  useEffect(() => {
    // Fetch user data and map to user ID
    HTTP({
      url: "/users",
      method: "GET",
    })
      .then((res) => res.data)
      .then((data) => {
        const userMap = {};
        data.forEach((user) => {
          userMap[user.employee_id] = `${user.name} ${user.last_name}`;
        });
        setUsers(userMap);
      });
  }, []);

  useEffect(() => {
    // Fetch screening data
    HTTP({
      url: "/screenings",
      method: "GET",
    })
      .then((res) => res.data)
      .then((data) => setScreenings(data));
  }, []);

  function formatDate(inputDate) {
    const date = new Date(inputDate);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${month}/${day}/${year}`;
  }

  // Filter completed screenings from the "Upcoming" section
  const upcomingScreenings = screenings.filter(
    (screening) => screening.status !== "completed"
  );

  return (
    <>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <h1>Reports</h1>

      {/* Upcoming Screenings */}
      <h2>Upcoming</h2>
      <div className="row m-5">
        {upcomingScreenings.map((screening, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card" style={{ width: "18em" }}>
              <div className="card-body">
                <h5 className="card-title">
                  {screening.status.charAt(0).toUpperCase() +
                    screening.status.slice(1)}
                </h5>
                <p className="card-text">{users[screening.user_id]}</p>
                <h6 className="card-subtitle mb-2 text-muted">
                  {formatDate(screening.date)}
                </h6>
                <a
                  href={`/dashboard/${screening.user_id}`}
                  className="card-link"
                >
                  See Profile
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Completed Screenings */}
      <h2>Completed</h2>
      <div className="row m-5">
        {screenings
          .filter((screening) => screening.status === "completed")
          .map((screening, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card" style={{ width: "18em" }}>
                <div className="card-body">
                  <h5 className="card-title">
                    {screening.status.charAt(0).toUpperCase() +
                      screening.status.slice(1)}
                  </h5>
                  <p className="card-text">{users[screening.user_id]}</p>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {formatDate(screening.date)}
                  </h6>
                  <a
                    href={`/dashboard/${screening.user_id}`}
                    className="card-link"
                  >
                    See Profile
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
