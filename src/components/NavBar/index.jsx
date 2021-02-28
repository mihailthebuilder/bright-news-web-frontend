import "./NavBar.scss";

const NavBar = ({ page, navHandler, children }) => {
  return (
    <header>
      <nav>
        <div
          className="left-nav-wrapper nav-wrapper"
          pagename="landing"
          onClick={navHandler}
        >
          Bright News
        </div>
        {page !== "landing" && (
          <div className="search-nav-wrapper nav-wrapper">{children}</div>
        )}
        <div
          className="right-nav-wrapper nav-wrapper"
          pagename="about"
          onClick={navHandler}
        >
          About...
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
