import React, { useEffect, useState } from "react";

const Filters = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  let [inputVal, setInputVal] = useState("");

  const elems = ["About me", "About my friend", "About my dog", "Room tur"];

  return (
    <div className="container mt-3 mb-3 d-flex justify-content-between">
      <div>
        {elems.map((elem, i) => (
          <span
            onClick={() => setSelectedTag(elem)}
            className={selectedTag === elem ? "btn btn-dark" : "btn btn-light"}
            key={i}
          >
            {elem}
          </span>
        ))}
      </div>
      <input
        style={{ width: "20%" }}
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        type="text"
        placeholder="search"
      />
    </div>
  );
};

export default Filters;
