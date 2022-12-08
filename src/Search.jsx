import React, { useState } from 'react';

export default function Search( {wordsList} ) {
  const [searchInput, setSearchInput] = useState("");

  function onChange(e) {
    e.preventDefault();
    setSearchInput(e.target.value);
  }

  return (
    <div>
      <input
        type="search"
        className="searchField"
        placeholder="Search for a word"
        onChange={onChange}
        value={searchInput}
      />
      <div>
        {wordsList.filter((word) => {
          return searchInput.toLowerCase() === "" ? word : word.toLowerCase().includes(searchInput)
            }).map((word) => {
              return (
                <div key={word.toString()}>
                  <ul className = "listOfWords">{word}</ul>
                </div>
              );
            })}
      </div>
    </div>
  );
}
