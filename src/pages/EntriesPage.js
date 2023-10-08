import React, { useState } from "react";
import Dashboard from "./Entriesdash";
import DiaryEntries from "./DiaryEntries"; // Import the new component

const EntriesPage = () => {
  const [textEntry, setTextEntry] = useState("");
  const [entries, setEntries] = useState([]); // State to manage diary entries

  const handleTextChange = (event) => {
    setTextEntry(event.target.value);
  };

  const handleSaveEntry = () => {
    // Handle saving the diary entry
    if (textEntry.trim() !== "") {
      setEntries([...entries, textEntry]); // Add the new entry to the list
      setTextEntry(""); // Clear the input field
    }
  };

  return (
    <div className="dashboard">
      <Dashboard />

      <div className="entries-page">
        <h1>
          Whats on your mind today, <figure id="happy"></figure>
        </h1>
        <textarea
          placeholder="Write your diary entry here..."
          value={textEntry}
          onChange={handleTextChange}
        />
        <button onClick={handleSaveEntry}>Save Entry</button>

        <input type="file" />
      </div>

      {/* Render the DiaryEntries component on the right */}
      <DiaryEntries entries={entries} />
    </div>
  );
};

export default EntriesPage;
