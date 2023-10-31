import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';
export function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-light  nabar-dark">
        <a className="navbar-brand p-2" href="#">KOTHA VENKATA SATYA PRANAY</a>
        <div class="nav ms-auto">
            <Link to="/" class="nav-link"><b>Home</b></Link>
            <Link to="/Education" class="nav-link"><b>Education</b></Link>
            <Link to="/Project" class="nav-link"><b>Projects</b></Link>
            <Link to="/Skills" class="nav-link"><b>Skills</b></Link>
        </div>
      </nav>
    </div>
  );
}