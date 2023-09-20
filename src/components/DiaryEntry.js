import React from 'react';

const DiaryEntry = ({ entry }) => {
  return (
    <div className="diary-entry">
      <h2>{entry.title}</h2>
      <p>{entry.content}</p>
    </div>
  );
};

export default DiaryEntry;
