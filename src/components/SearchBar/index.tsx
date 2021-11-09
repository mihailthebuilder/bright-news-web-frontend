import "./SearchBar.scss";
import { ReactComponent as Loading } from "./Loading.svg";
import { useLocation, useHistory } from "react-router-dom";
import { useState, FormEvent } from "react";
import axios from "axios";
import { requestUrl } from "../../resources/resources";
import ErrorMessage from "../ErrorMessage";

const SearchBar = ({
  setUrlResults,
}: {
  setUrlResults: StateSetter<ApiResponseState>;
}) => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  let location = useLocation();
  let history = useHistory();

  const getUrlResults = (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);

    axios
      .post(requestUrl(), {
        url: url,
      })
      .then((res) => {
        if (res.status !== 200) throw new Error("Bad request");
        setUrlResults(res.data);

        setLoading(false);
        setUrl("");

        history.push("/results");
      })
      .catch((err) => {
        // if something broke, show the error message
        setError(true);
        setTimeout(() => setError(false), 3000);

        setLoading(false);
        setUrl("");
      });
  };

  return (
    <>
      {/* TODO: Error message should be conditional rendering*/}
      <ErrorMessage displayError={error} setDisplayError={setError} />
      <form
        className={
          location.pathname === "/" ? "landing-search-form" : "nav-search-form"
        }
        onSubmit={getUrlResults}
        method="post"
      >
        <input
          onChange={(event) => {
            setUrl(event.target.value);
          }}
          value={url}
          type="text"
          placeholder="e.g. bbc.co.uk"
          required
        />
        {loading ? (
          <button className="loading-button">
            <Loading />
          </button>
        ) : (
          <button className="normal-button" type="submit">
            Analyse
          </button>
        )}
      </form>
    </>
  );
};

export default SearchBar;
