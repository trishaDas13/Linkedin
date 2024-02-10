import React from "react";
import '../topbar/style.scss'

const SearchUsers = ({setSearchInput}) => {
  return (
    <div className="serachBar">
      <input type="text" placeholder="Search ..."  onChange={(event) => setSearchInput(event.target.value)} />
    </div>
  );
};

export default SearchUsers;
