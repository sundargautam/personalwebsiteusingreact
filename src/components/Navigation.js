import React from 'react';
import {Link} from 'react-router-dom';
import '../componentscss/navigation.css';
export const Navigation = () => {
    return (
        <div className="navigation">
            <nav id="navigationbar"  className="navbar navbar-expand-md justify-content-right">
        <button
          className="navbar-toggler menu-bar-on-small-devices"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/project" className="nav-link" href="#projects">
                <div className="menu-item">
                  <i className="fas fa-project-diagram"></i>Projects
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                <div className="menu-item">
                <Link to="/skills" className="nav-link" href="#projects">
                  <i className="fas fa-user-graduate"></i>Skills
                  </Link>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                <div className="menu-item">
                  <i className="fas fa-address-card"></i>
                  About
                </div>
              </a>
            </li>
          </ul>
        </div>
      </nav>
        </div>
    );
}

