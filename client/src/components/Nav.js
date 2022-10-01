import React from 'react';
import { Link } from "react-router-dom";


const Nav = () => {
  return (
        <div className="container-fluid border">
          <ul className="nav container">
          <li className="nav-item">
            <Link className="nav-link" to="/" >Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login" >Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register" >Register</Link>
          </li>
        </ul>
        </div>
  )
}

export default Nav
