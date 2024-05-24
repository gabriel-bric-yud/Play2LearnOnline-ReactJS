import React from "react";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="cointainer-fluid">
         <button className = "navbar-toggler" type = "button"
          data-bs-toggle= "collapse" data-bs-target = "#navbarText">
            <span className ="navbar-toggler-icon"> </span>
          </button>
          <div className = "collapse navbar-collapse" id = "navbarText">
            <ul className = "navbar-nav mr-auto text-left">
              <li className = "nav-item active">
                <a className= "nav-link" href= "/">Home</a>
              </li>
            </ul>
          </div>
          <a className = "navbar-brand m-1" href = "/">Final Project - JavaScript Developer (ed2go)</a>
        </div>
      </nav>
    </header>
  )
}

export default Header;