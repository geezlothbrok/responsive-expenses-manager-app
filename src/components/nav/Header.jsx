import React, { useState } from "react";
import "./Header.css";
import { HiMenuAlt2, HiUserCircle } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

function Header() {

  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  const hideMenu = () => {
    setShowMenu(false)
  }
  return (
    <nav className="container navbar">
      <div className="logo">
        <p className="logo-text">Expenses Manager</p>
      </div>

      <menu>
        <ul className="nav-links" id={showMenu ? "mobile-nav-links" : "hide-mobile-nav-links"}>
          <li className="user-icon"  onClick={hideMenu}>
            <HiUserCircle color="white" size={25} />
            {/* <span>Hi, User</span> */}
          </li>

          <li onClick={hideMenu}>
            <Link to="/login">Login</Link>
          </li>
          <li className="nav-btn" onClick={hideMenu}>
            <Link to ="/addExpense" className="btn btn-orange">Add Expense</Link>
          </li>
        </ul>
      </menu>

      <div className="menu-icons" onClick={toggleMenu}>
        {showMenu ? (
          <RxCross1 color="white" size={23} />
        ) : (
          <HiMenuAlt2 color="white" size={23} />
        )}
        
      </div>
    </nav>
  );
}

export default Header;
