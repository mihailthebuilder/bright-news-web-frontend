export const shuffle = (array: Array<any>) => {
  let newArray = array.slice();
  for (let i = newArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

    // swap elements array[i] and array[j]
    // we use "destructuring assignment" syntax to achieve that
    // you'll find more details about that syntax in later chapters
    // same can be written as:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export const SCORE_GROUP = [
  {
    group: "red",
    styleClass: "red-score",
    name: "Negative",
    lowerBound: -1,
    upperBound: 33,
  },
  {
    group: "yellow",
    styleClass: "yellow-score",
    name: "Average",
    lowerBound: 33,
    upperBound: 66,
  },
  {
    group: "green",
    styleClass: "green-score",
    name: "Positive",
    lowerBound: 66,
    upperBound: 100,
  },
];

export const shortenStr = (inputStr: string, charNumLimit: number) => {
  return inputStr.length > charNumLimit
    ? inputStr.slice(0, charNumLimit) + "..."
    : inputStr;
};

const backendPath = "/api/calculate";

export const requestUrl = () => {
  let url =
    window.location.hostname === "localhost"
      ? "http://localhost:8000"
      : "https://bright-news-backend.herokuapp.com";

  return url + backendPath;
};

export const BASE_PATH = "/bright-news-web-frontend";
