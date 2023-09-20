import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';

const EntriesPage = () => {
  const [entries, setEntries] = useState([]);
  const [entryText, setEntryText] = useState('');
  const [entryImages, setEntryImages] = useState([]);

  const onDrop = (acceptedFiles) => {
    setEntryImages([...entryImages, ...acceptedFiles]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = { text: entryText, images: entryImages };
    setEntries([...entries, newEntry]);
    setEntryText('');
    setEntryImages([]);
  };

  return (
    <div>
      <h1>Entries</h1>
      <Link to="/">Back to Welcome Page</Link>
      <form onSubmit={handleSubmit}>
        <textarea
          value={entryText}
          onChange={(e) => setEntryText(e.target.value)}
          placeholder="Write your entry..."
        />
        <div {...getRootProps()} className="dropzone">
          <input {...getInputProps()} />
          <p>Drag 'n' drop some images here, or click to select files</p>
        </div>
        <button type="submit">Add Entry</button>
      </form>
      <div className="entry-list">
        {entries.map((entry, index) => (
          <div key={index}>
            <p>{entry.text}</p>
            <div className="image-list">
              {entry.images.map((image, imageIndex) => (
                <img key={imageIndex} src={URL.createObjectURL(image)} alt={`Entry ${index} Image ${imageIndex}`} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EntriesPage;
