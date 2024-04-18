import React from "react";
import "../topbar/style.scss";

const SearchUsers = ({ setSearchInput, searchInput }) => {
  return (
    <div className="serachBar">
      <input
        type="text"
        placeholder="Search ..."
        onChange={(event) => setSearchInput(event.target.value)}
        value={searchInput}
      />
    </div>
  );
};

export default SearchUsers;
