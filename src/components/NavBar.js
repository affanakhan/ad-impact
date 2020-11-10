// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { NavLink } from 'react-router-dom';

import './navbar.css'


const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    // .. code removed for brevity
    <div>
      <ul id="nav">
    {/* NEW - add a link to the home and profile pages */}
    {isAuthenticated && (
      <span>
        <NavLink 
          exact
          activeClassName="navbar__link--active"
          className="navbar__link"
          to="/profile">Profile</NavLink>
        <NavLink 
          exact
          activeClassName="navbar__link--active"
          className="navbar__link"
          to="/surveyex">SurveyEx</NavLink>&nbsp;
        <NavLink 
          exact
          activeClassName="navbar__link--active"
          className="navbar__link"
          to="/surveysdone">SurveysDone</NavLink>
      </span>
    )}
   </ul>
</div>
  );
};

export default NavBar;

// const Navbar = () => (
//   <nav className="navbar">
//     <NavLink
//       exact
//       activeClassName="navbar__link--active"
//       className="navbar__link"
//       to="/"
//     >
//       Home
//     </NavLink>
//     <NavLink
//       activeClassName="navbar__link--active"
//       className="navbar__link"
//       to="/products"
//     >
//       Products
//     </NavLink>
//     <NavLink
//       activeClassName="navbar__link--active"
//       className="navbar__link"
//       to="/contacts"
//     >
//       Contacts
//     </NavLink>
//   </nav>
//);