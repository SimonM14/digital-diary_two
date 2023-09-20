import React, { useState } from "react";
import DiaryList from "./components/DiaryList";

function App() {
  const [entries, setEntries] = useState([]);

  const addEntry = (title, content) => {
    const newEntry = { title, content };
    setEntries([...entries, newEntry]);
  };

  return (
    <div className="App">
      <h1>Digital Diary</h1>
      <DiaryList entries={entries} />
      <button
        onClick={() => addEntry("New Entry", "This is a new diary entry.")}
      >
        Add Entry
      </button>
    </div>
  );
}

export default App;
