import "./ScoreGroup.scss";
import { shuffle, shortenStr } from "../../resources/resources.js";

const ScoreGroup = ({ websites, urlAnalyzed, scoregroup, index }) => {
  const pickedWebsites = (sitesNumber) => {
    let filteredSites = websites.filter(
      (website) =>
        website["score"] > scoregroup.lowerBound &&
        website["score"] <= scoregroup.upperBound &&
        website["url"] !== urlAnalyzed
    );

    if (sitesNumber >= filteredSites.length) {
      return filteredSites;
    }

    return shuffle(filteredSites).slice(0, sitesNumber);
  };

  return (
    <li className="score-group" key={index}>
      <h3>{scoregroup.name} sites:</h3>
      <ul>
        {pickedWebsites(3).map((site, index) => (
          <li key={index}>
            <a
              className={scoregroup.styleClass}
              href={"//" + site["url"]}
              target="_blank"
              rel="noreferrer"
            >
              {shortenStr(site["url"], 20) +
                " (" +
                Math.round(site["score"]).toString() +
                "%)"}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default ScoreGroup;
