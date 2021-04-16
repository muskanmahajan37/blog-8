import React from "react";
import './searchbar.css'

function SearchBar(props) {
  return (
    <div class="search-container">
      <form>
        <input type="text" placeholder="Search.." name="search" />
        <button type="submit">
          <i class="fa fa-search"></i>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
