import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: '#333',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: '100%',
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} Mi-Thoughts</p>
      <p style={{color: "blueviolet"}}>Contact: kaninisimon79@example.com</p>
    </footer>
  );
}

export default Footer;
