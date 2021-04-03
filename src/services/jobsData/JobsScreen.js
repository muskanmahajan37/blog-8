import React from "react";
import MyContext from "./MyContext";

const JobsData = () => (
  <MyContext.Consumer>
    {(context) => <React.Fragment>{console.log(context)}</React.Fragment>}
  </MyContext.Consumer>
);

export default JobsData;
