import { useState, FormEvent, ChangeEvent } from "react";
import axios from "axios";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import SearchBar from "./components/SearchBar";
import ErrorMessage from "./components/ErrorMessage";
import ResultsPage from "./components/ResultsPage";
import AboutPage from "./components/AboutPage";

import { requestUrl } from "./resources/resources";

import "./App.scss";

function App() {
  const [urlResults, setUrlResults] = useState<ApiResponse | null>(null);
  const [url, setUrl] = useState("");
  const [page, setPage] = useState("landing");
  const [displayError, setDisplayError] = useState(false);
  const [loadingSearch, setLoadingSearch] = useState(false);

  const getUrlResults = (event: FormEvent) => {
    event.preventDefault();
    setLoadingSearch(true);

    console.log(requestUrl());

    axios
      .post(requestUrl(), {
        url: url,
      })
      .then((res) => {
        if (res.status !== 200) throw new Error("Bad request");
        console.log(res.data);

        setUrlResults(res.data);
        setPage("results");
      })
      .catch((err) => {
        // if something broke, show the error message
        setDisplayError(true);
        setTimeout(() => setDisplayError(false), 3000);
      })
      .finally(() => {
        setLoadingSearch(false);
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
        navHandler={(event: {
          target: { getAttribute(attr: string): string };
        }) => setPage(event.target.getAttribute("pagename"))}
      >
        <SearchBar
          submitHandler={getUrlResults}
          inputChangeHandler={(event: ChangeEvent<HTMLInputElement>) =>
            setUrl(event.target.value)
          }
          inputValue={url}
          loadingSearch={loadingSearch}
          page={page}
        />
      </NavBar>
      {page === "landing" ? (
        <LandingPage>
          <SearchBar
            submitHandler={getUrlResults}
            inputChangeHandler={(event: ChangeEvent<HTMLInputElement>) =>
              setUrl(event.target.value)
            }
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
