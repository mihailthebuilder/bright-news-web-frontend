import { useState } from "react";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import SearchBar from "./components/SearchBar";
import ResultsPage from "./components/ResultsPage";
import AboutPage from "./components/AboutPage";

import { BrowserRouter as Router } from "react-router-dom";

import "./App.scss";

function App() {
  const [urlResults, setUrlResults] = useState<ApiResponseState>(null);
  const [page, setPage] = useState("landing");

  return (
    <Router basename="/bright-news-web-frontend">
      <div className="app">
        <NavBar>
          <SearchBar setUrlResults={setUrlResults} />
        </NavBar>
        {page === "landing" ? (
          <LandingPage>
            <SearchBar setUrlResults={setUrlResults} />
          </LandingPage>
        ) : page === "results" ? (
          <ResultsPage results={urlResults} />
        ) : (
          <AboutPage />
        )}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
