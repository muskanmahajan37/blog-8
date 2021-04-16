import React from "react";
import Pagination from "react-js-pagination";

function PaginationComponent() {
  const [activePage, setactivePage] = React.useState(15);

  const handlePageChange = (pageNumber) => {
    setactivePage(pageNumber);
  };

  return (
    <div>
      <Pagination
        activePage={activePage}
        itemsCountPerPage={10}
        totalItemsCount={450}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
      />
    </div>
  );
}

export default PaginationComponent;
