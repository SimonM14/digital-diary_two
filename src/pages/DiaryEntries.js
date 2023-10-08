import React from "react";

const DiaryEntries = ({ entries }) => {
  return (
    <div className="diary-entries">
      <h2 style={{textAlign: "center"}}>My Entries</h2>
      <ul>
        {entries.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    </div>
  );
};

export default DiaryEntries;
