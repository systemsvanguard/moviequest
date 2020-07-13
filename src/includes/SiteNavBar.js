import React from 'react'
import { NavLink } from 'react-router-dom'
import NavLogo from "../app/images/moviequest_logo.png";
import "./NavBarJS";


const SiteNavBar = () => {
  return (
    <div>
      <nav className="navbar is-link" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <NavLink to="/" className="navbar-item">
            <img src={NavLogo} alt="MovieQuest" title="MovieQuest" />
          </NavLink>

          <button className="navbar-burger burger button is-link" aria-label="menu" aria-expanded="false" data-target="navMenu">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div id="navMenu" className="navbar-menu">
          <div className="navbar-end">
            <NavLink to="/" className="navbar-item">
              Home
            </NavLink>
            <NavLink to="/about" className="navbar-item">About</NavLink>	<NavLink to="/resources" className="navbar-item">Resources</NavLink>
            <NavLink to="/contact" className="navbar-item">Contact</NavLink>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default SiteNavBar