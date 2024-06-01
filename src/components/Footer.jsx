import React from 'react';

function Footer() {
  return ( 
    <footer className="navbar fixed-bottom bg-primary">
      <div className="container-fluid">
        <a href="https://github.com/gbabyblue" className="nav-link text-light">
          {new Date().getFullYear()} <a className="text-light" href = "https://www.ed2go.com">ed2go</a> - Gabriel (github)
        </a>
      </div>
    </footer>
  )
}

export default Footer;