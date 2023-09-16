import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "lightgreen" , borderRadius: '8px'}}
      >
        <div className="container-fluid">
          <Link className="navbar-brand fs-1" to="/" style={{ fontFamily: 'cursive', fontWeight: 'bold', color: 'black' }}>
            GoFood
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            
              <li className="nav-item">
                <Link
                  className="nav-Link  fs-4"
                  to="/login"
                  style={{ marginLeft: "20px", textDecoration: "none",fontFamily: 'cursive',color:'black' }}
                >
                  Login
                </Link>
                <Link
                  className="nav-Link  fs-4"
                  to="/createuser"
                  style={{ marginLeft: "20px", textDecoration: "none" ,fontFamily: 'cursive',color:'black'}}
                >
                  SignUp
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
