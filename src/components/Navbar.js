import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo" style={{ marginLeft: 20 }}>
            Book Self
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Cart</a>
            </li>
            <li>
              <a href="badges.html">Profile</a>
            </li>
            <li>
              <a href="collapsible.html">About</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
