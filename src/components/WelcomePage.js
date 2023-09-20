import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div>
      <h1>Welcome to Digital Diary</h1>
      <Link to="/entries">Go to Entries</Link>
    </div>
  );
};

export default WelcomePage;
