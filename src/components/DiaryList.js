import React from "react";
import DiaryEntry from "./DiaryEntry";

const DiaryList = ({ entries }) => {
  return (
    <div className="diary-list">
      {entries.map((entry, index) => (
        <DiaryEntry key={index} entry={entry} />
      ))}
    </div>
  );
};

export default DiaryList;
