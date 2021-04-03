import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles/app.css";

// import GetJobs from "./services/GetJobs";

function App(props) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [darkTheme, setDarkTheme] = useState(getDefaultTheme());

  function getDefaultTheme() {
    const selectedTheme = JSON.parse(localStorage.getItem("dark"));
    return selectedTheme || false;
  }

  const GetJobs = () => {
    let url = "https://jobs.github.com/positions.json";
    setLoading(true);
    axios.get(`https://cors-anywhere.herokuapp.com/${url}`).then((response) => {
      console.log(response.data[0]);
      setJobs(response.data);
    });
    setLoading(false);
  };

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkTheme));
    GetJobs();
  }, [darkTheme]);

  return (
    <div>
      <div
        className={darkTheme ? "dark-theme" : "light-theme"}
        onClick={setDarkTheme(!darkTheme)}
      ></div>
      {loading && <h1>Loading...</h1>}
      {/* {error && <h1>Error</h1>} */}
      {jobs.map((job) => (
        <h1 key={job.id}>{job.title}</h1>
      ))}
    </div>
  );
}

export default App;
