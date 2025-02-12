"use client";
import React, { useState } from "react";

const Home = () => {
  const initialList = [
    { name: "Manish", age: 27 },
    { name: "Mrinal", age: 24 },
    { name: "Sajjad", age: 21 },
    { name: "Amit", age: 23 },
  ];

  const [list, setList] = useState(initialList);
  const [isAscending, setIsAscending] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  // Sorting function
  const handleSorting = () => {
    const sortedList = [...list].sort((a, b) =>
      isAscending ? a.age - b.age : b.age - a.age
    );
    setList(sortedList);
    setIsAscending(!isAscending);
  };

  // Filtering function based on search input
  const filteredList = list.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="sorting">
        <button onClick={handleSorting}>
          Sort by Age ({isAscending ? "Ascending" : "Descending"})
        </button>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {filteredList.length > 0 ? (
        <ul>
          {filteredList.map((e, index) => (
            <li key={index}>
              {e.name} - {e.age}
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default Home;
