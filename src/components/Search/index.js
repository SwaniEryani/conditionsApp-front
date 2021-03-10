import React, { useState } from "react";
import "./index.css";
import SearchResult from "./SearchResult";

export default function Search(props) {
  const [name, setName] = useState("");
  const [searchContent, setSearchContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setName(searchContent);
  };
  return (
    <div className="Search-container">
      <h2>Enter Condition name:</h2>

      <form onSubmit={handleSubmit}>
        <div className="Search-row">
          <div className="Search-col">
            <input
              name="name"
              type="search"
              value={searchContent}
              onChange={(event) => setSearchContent(event.target.value)}
            />
          </div>
          <div className="Search-col">
            <button className="Search-btn" type="submit" value="Search">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        {name && <SearchResult name={name} state={props.state} />}
      </form>
    </div>
  );
}
