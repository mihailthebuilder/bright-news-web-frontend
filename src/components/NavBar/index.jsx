import "./NavBar.scss";

import { Link } from "react-router-dom";

const NavBar = ({ children }) => {
  return (
    <header>
      <nav>
        <Link to="/" className="left-nav-wrapper nav-wrapper">
          Bright News
        </Link>
        {children && (
          <div className="search-nav-wrapper nav-wrapper">{children}</div>
        )}
        <Link to="/about" className="right-nav-wrapper nav-wrapper">
          About...
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
