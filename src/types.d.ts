type ApiUrl = { url: string };

type OkResponse = {
  url_analyzed: string;
  website_li: Array<{
    url: string;
    score: number;
  }>;
  website_raw_data: Array<{
    text: string;
    combined_score: number;
    model1_score: number;
    model2_score: number;
  }>;
} & ApiUrl;

type BadResponse = {
  message: string;
} & ApiUrl;

type ApiResponse = OkResponse | BadResponse;