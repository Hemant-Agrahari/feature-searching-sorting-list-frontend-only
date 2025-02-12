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

  const handleSorting = () => {
    const sortedList = [...list].sort((a, b) =>
      isAscending ? a.age - b.age : b.age - a.age
    );
    setList(sortedList);
    setIsAscending(!isAscending);
  };

  return (
    <div>
      <div className="sorting">
        <button onClick={handleSorting}>
          Sort by Age ({isAscending ? "Ascending" : "Descending"})
        </button>
      </div>
      <ul>
        {list.map((e, index) => (
          <li key={index}>
            {e.name} - {e.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
