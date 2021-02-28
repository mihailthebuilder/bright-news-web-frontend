import "./ScoreDetails.scss";
import { shuffle, SCORE_GROUP } from "../../resources/resources.js";
import { useState, useEffect } from "react";

const ScoreDetails = ({ type, results }) => {
  const [colorStyle, setColorStyle] = useState("no-style");
  const [title, setTitle] = useState("");

  useEffect(() => {
    const scoreGroupIndex = type === "negative" ? 0 : 2;
    setColorStyle(SCORE_GROUP[scoreGroupIndex].styleClass);
    setTitle(SCORE_GROUP[scoreGroupIndex].name);
  }, [type]);

  const [totalTextPieces, setTotalTextPieces] = useState([]);

  useEffect(() => {
    setTotalTextPieces(
      results["website_raw_data"].filter(
        type === "negative"
          ? (text) => text["combined_score"] < 0
          : (text) => text["combined_score"] > 0
      )
    );
  }, [type, results]);

  const [exampleTextPieces, setExampleTextPieces] = useState([]);

  useEffect(() => {
    if (totalTextPieces.length > 4) {
      setExampleTextPieces(shuffle(totalTextPieces).slice(0, 4));
    } else {
      setExampleTextPieces(totalTextPieces);
    }
  }, [totalTextPieces]);

  return (
    <li className="analysis-group">
      <h3>
        {totalTextPieces.length} pieces of{" "}
        <span className={colorStyle}>{title}</span> content
      </h3>
      <ul>
        {exampleTextPieces.map((text, index) => (
          <li key={index}>
            <a
              className={colorStyle}
              href={`https://www.google.com/search?q="${text["text"]}"`}
              target="_blank"
              rel="noreferrer"
            >
              <i>"{text["text"]}"</i>
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default ScoreDetails;
