import { useState } from "react";
import axios from "axios";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import SearchBar from "./components/SearchBar";
import ErrorMessage from "./components/ErrorMessage";
import ResultsPage from "./components/ResultsPage";
import AboutPage from "./components/AboutPage";

import "./App.scss";

function App() {
  const [urlResults, setUrlResults] = useState({});
  const [url, setUrl] = useState("");
  const [page, setPage] = useState("landing");
  const [displayError, setDisplayError] = useState(false);
  const [loadingSearch, setLoadingSearch] = useState(false);

  const getUrlResults = (event) => {
    event.preventDefault();
    setLoadingSearch(true);

    axios
      // replace with localhost:8000/calculate for localhost
      .post("https://bright-news-backend.herokuapp.com/api/calculate", {
        url: url,
      })
      .then((res) => {
        setLoadingSearch(false);
        if (res.data["success"] === true) {
          setUrlResults(res.data);
          setPage("results");
        } else {
          // if something broke, show the error message
          setDisplayError(true);
          setTimeout(() => setDisplayError(false), 3000);
        }
        setUrl("");
      });
  };

  return (
    <div className={page === "landing" ? "spa-layout" : ""}>
      <ErrorMessage
        displayError={displayError}
        setDisplayError={setDisplayError}
      />
      <NavBar
        page={page}
        navHandler={(event) => setPage(event.target.getAttribute("pagename"))}
      >
        <SearchBar
          submitHandler={getUrlResults}
          inputChangeHandler={(event) => setUrl(event.target.value)}
          inputValue={url}
          loadingSearch={loadingSearch}
          page={page}
        />
      </NavBar>
      {page === "landing" ? (
        <LandingPage>
          <SearchBar
            submitHandler={getUrlResults}
            inputChangeHandler={(event) => setUrl(event.target.value)}
            inputValue={url}
            loadingSearch={loadingSearch}
            page={page}
          />
        </LandingPage>
      ) : page === "results" ? (
        <ResultsPage results={urlResults} />
      ) : (
        <AboutPage />
      )}
      <Footer />
    </div>
  );
}

export default App;
