import MyContext from "./MyContext";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function MyProvider({ children }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const GetJobs = () => {
    // let url = "https://jobs.github.com/positions.json";
    // setLoading(true);
    // axios.get(`https://cors-anywhere.herokuapp.com/${url}`).then((response) => {
    //   console.log(response.data[0]);
    //   setJobs(response.data);
    // });
    // setLoading(false);
  };

  useEffect(() => {
    // GetJobs();
    let url = "https://jobs.github.com/positions.json";
    setLoading(true);
    axios.get(`https://cors-anywhere.herokuapp.com/${url}`).then((response) => {
      console.log(response.data[0]);
      setJobs(response.data);
    });
    setLoading(false);
  }, []);

  return (
    <MyContext.Provider
      value={{
        jobs,
        loading,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
