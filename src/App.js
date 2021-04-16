import React from "react";
import "./styles/app.css";

import MyProvider from "./services/jobsData/MyProvider";
import JobsData from "./services/jobsData/JobsScreen";
import SearchBar from "./components/Searchbar/SearchBar";

import PaginationComponent from "./components/PaginationComponent";

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

  // const [currentPage, setcurrentPage] = useState(1);
  // const [postsPerPage, setpostsPerPage] = useState(20)

  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <MyProvider>
      <div>
        <SearchBar />
        {/* <button
        className={darkTheme ? "dark-theme" : "light-theme"}
        onClick={setDarkTheme(!darkTheme)}
      >
        Dark
      </button> */}
        <JobsData />
        <PaginationComponent />
      </div>
    </MyProvider>
  );
}

export default App;

// function Pagination(props) {
//   return (
//     <div>

//     </div>
//   );
// }

// export default Pagination;
