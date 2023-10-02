import React, { useState } from 'react';

const EntriesPage = () => {
  // State to manage text entries
  const [textEntry, setTextEntry] = useState('');
  
  // State to manage photo uploads
  const [selectedImage, setSelectedImage] = useState(null);

  const handleTextChange = (event) => {
    setTextEntry(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle saving the text entry and photo upload
    console.log('Text Entry:', textEntry);
    console.log('Selected Image:', selectedImage);
    // You can send this data to a server or handle it as needed
  };

  return (
    <div className="entries-page">
      <h1>Entries</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Write your diary entry here..."
          value={textEntry}
          onChange={handleTextChange}
        />
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button type="submit">Save Entry</button>
      </form>
    </div>
  );
};

export default EntriesPage;
