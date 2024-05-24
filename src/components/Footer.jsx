import React from 'react';

function Footer() {
  return ( 
    <footer className="navbar fixed-bottom bg-primary">
      <div className="container-fluid">
        <a href="https://github.com/gbabyblue" className="nav-link text-light">
          {new Date().getFullYear()} - Gabriel Yudken
        </a>
      </div>
    </footer>
  )
}

export default Footer;