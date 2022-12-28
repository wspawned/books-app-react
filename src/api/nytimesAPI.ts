import axios from "redaxios";

const NYT_API_BASE_URL:string = 'https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction';
const NYT_API_KEY:string = "gDIHYGDXjtgkNpu5EkcnAvvnboGHDkcK";

export const tmdbAPI = axios.create({
  baseURL: NYT_API_BASE_URL,
  params: {
    api_key: NYT_API_KEY,
  }
});

//https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=gDIHYGDXjtgkNpu5EkcnAvvnboGHDkcK