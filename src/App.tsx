import { useState } from "react";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import SearchBar from "./components/SearchBar";
import ResultsPage from "./components/ResultsPage";
import AboutPage from "./components/AboutPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";

function App() {
  const [urlResults, setUrlResults] = useState<ApiResponseState>(null);

  return (
    <Router basename="/bright-news-web-frontend">
      <div className="app">
        <NavBar setUrlResults={setUrlResults} />

        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/results">
            <ResultsPage results={urlResults} />
          </Route>
          <Route path="/">
            <LandingPage>
              <SearchBar setUrlResults={setUrlResults} />
            </LandingPage>
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
