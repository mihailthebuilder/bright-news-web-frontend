import "./NavBar.scss";

import { Link, useLocation } from "react-router-dom";
import SearchBar from "../SearchBar";

const NavBar = ({
  setUrlResults,
}: {
  setUrlResults: StateSetter<ApiResponseState>;
}) => {
  let location = useLocation();

  return (
    <header>
      <nav>
        <Link to="/" className="left-nav-wrapper nav-wrapper">
          Bright News
        </Link>
        {location.pathname.match(/results|about/) && (
          <div className="search-nav-wrapper nav-wrapper">
            <SearchBar setUrlResults={setUrlResults} />
          </div>
        )}
        <Link to="/about" className="right-nav-wrapper nav-wrapper">
          About...
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
