import "./NavBar.scss";

import { Link } from "react-router-dom";
import { BASE_PATH } from "../../resources/resources";

const NavBar = ({ children }) => {
  return (
    <header>
      <nav>
        <Link to={BASE_PATH} className="left-nav-wrapper nav-wrapper">
          Bright News
        </Link>
        {children && (
          <div className="search-nav-wrapper nav-wrapper">{children}</div>
        )}
        <Link
          to={`${BASE_PATH}/about`}
          className="right-nav-wrapper nav-wrapper"
        >
          About...
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
