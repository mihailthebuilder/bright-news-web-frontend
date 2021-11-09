type ApiUrl = { url: string };

type Website = {
  url: string;
  score: number;
};

type OkResponse = {
  url_analyzed: string;
  website_li: Array<Website>;
  website_raw_data: Array<{
    text: string;
    combined_score: number;
    model1_score: number;
    model2_score: number;
  }>;
} & ApiUrl;

type ApiResponseState = OkResponse | null;

type ScoreGroup = {
  group: string;
  styleClass: string;
  name: string;
  lowerBound: number;
  upperBound: number;
};

type StateSetter<T> = React.Dispatch<React.SetStateAction<T>>;
