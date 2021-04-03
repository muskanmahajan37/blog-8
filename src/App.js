import React from "react";
import "./styles/app.css";

import MyProvider from "./services/jobsData/MyProvider";
import JobsData from "./services/jobsData/JobsScreen";

// import GetJobs from "./services/GetJobs";

function App(props) {
  // const [darkTheme, setDarkTheme] = useState(getDefaultTheme());

  // function getDefaultTheme() {
  //   const selectedTheme = JSON.parse(localStorage.getItem("dark"));
  //   return selectedTheme || false;
  // }

  // const isDarkTheme = () => {
  //   localStorage.setItem("dark", JSON.stringify(darkTheme));
  // };

  return (
    <MyProvider>
      <div>
        {/* <button
        className={darkTheme ? "dark-theme" : "light-theme"}
        onClick={setDarkTheme(!darkTheme)}
      >
        Dark
      </button> */}
        <JobsData />
      </div>
    </MyProvider>
  );
}

export default App;
