import "./ResultsPage.scss";
import ScoreGroup from "../ScoreGroup";
import { SCORE_GROUP, shortenStr } from "../../resources/resources";

import ScoreDetails from "../ScoreDetails";
import { useState, useEffect } from "react";

const ResultsPage = ({ results }: { results: OkResponse }) => {
  // useEffect based on score -> class of font -> colors

  const [urlScore, setUrlScore] = useState(0);
  const [scoreComparisonHtml, setScoreComparisonHtml] = useState(<span></span>);
  useEffect(() => {
    const scoredUrl = results["website_li"].find(
      (website_elem) => website_elem["url"] === results["url_analyzed"]
    );

    if (scoredUrl) {
      setUrlScore(scoredUrl["score"]);
    }

    setScoreComparisonHtml(
      <ul className="score-group-comparison">
        {SCORE_GROUP.map((scoregroup, index) => (
          <ScoreGroup
            websites={results["website_li"]}
            urlAnalyzed={results["url_analyzed"]}
            scoregroup={scoregroup}
            key={index}
            index={index}
          />
        ))}
      </ul>
    );
  }, [results]);

  const [resultsColorClass, setResultsColorClass] = useState("yellow");

  useEffect(() => {
    for (let i = 0; i < SCORE_GROUP.length; i++) {
      if (
        urlScore > SCORE_GROUP[i].lowerBound &&
        urlScore <= SCORE_GROUP[i].upperBound
      ) {
        setResultsColorClass(SCORE_GROUP[i].styleClass);
        break;
      }
    }
  }, [urlScore]);

  return (
    <section className="results-section">
      <div>
        <h2 className="result-headline">
          <span className="score-text">
            <a
              href={"//" + results["url_analyzed"]}
              className={"url " + resultsColorClass}
              target="_blank"
              rel="noreferrer"
            >
              {shortenStr(results["url"], 15)}
            </a>
            's positivity score:
          </span>
          <span className={"score " + resultsColorClass}>{urlScore}%</span>
        </h2>
      </div>
      {scoreComparisonHtml}
      <div>
        <h2 className="analysis-details-headline">Analysis details</h2>
        <ul className="analysis-details">
          <ScoreDetails type="negative" results={results} />
          <ScoreDetails type="positive" results={results} />
        </ul>
      </div>
    </section>
  );
};

export default ResultsPage;
