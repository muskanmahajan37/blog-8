import React from "react";
import JobCard from "../../components/JobCard/JobCard";
import MyContext from "./MyContext";

const JobsData = () => (
  <MyContext.Consumer>
    {({ jobs }) => (
      <React.Fragment>
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </React.Fragment>
    )}
  </MyContext.Consumer>
);

export default JobsData;
