import "./SearchBar.scss";
import { ReactComponent as Loading } from "./Loading.svg";

const SearchBar = ({
  submitHandler,
  inputChangeHandler,
  inputValue,
  loadingSearch,
  page,
}: {
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  inputChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
  loadingSearch: boolean;
  page: string;
}) => {
  return (
    <form
      className={page === "landing" ? "landing-search-form" : "nav-search-form"}
      onSubmit={submitHandler}
      method="post"
    >
      <input
        onChange={inputChangeHandler}
        value={inputValue}
        type="text"
        placeholder="e.g. bbc.co.uk"
        required
      />
      {loadingSearch ? (
        <button className="loading-button">
          <Loading />
        </button>
      ) : (
        <button className="normal-button" type="submit">
          Analyse
        </button>
      )}
    </form>
  );
};

export default SearchBar;
