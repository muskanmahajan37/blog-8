import { useState } from "react";
import axios from "axios";

const GetJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  let url = "https://jobs.github.com/positions.json";
  console.log(`https://cors-anywhere.herokuapp.com/${url}`);
  setLoading(true);
  axios
    .get(`https://cors-anywhere.herokuapp.com/${url}`)
    .then((response) => {
      setJobs(response.data);
    })
    .then(setLoading(false));
  return {
    jobs,
    loading,
    // error: false,
  };
};

export default GetJobs;
