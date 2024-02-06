import React from "react";
import "./SearchComponent.css";
import SearchUserCard from "./SearchUserCard";

const SearchComponents = () => {
  return (
    <div className="searchContainer">
      <div className="px-3 pb-5">
        <h1 className="text-2xl pb-5 text-start">Search</h1>
        <input type="text" placeholder="Search...." className="searchInput " />
      </div>
      <hr />
      <div className="px-3 pt-5">
        {[1, 1, 1, 1, 1, 1].map((item) => (
          <SearchUserCard />
        ))}
      </div>
    </div>
  );
};

export default SearchComponents;
