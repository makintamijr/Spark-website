import React from "react";
import Button from "../Button/Button";
import "./SearchInput.scss";

const SearchInput = ({ ...props }) => {
  return (
    <>
      <div className="search-input">
        <input {...props} />
        <Button variant={"outlined"}>Search</Button>
      </div>
    </>
  );
};

export default SearchInput;
