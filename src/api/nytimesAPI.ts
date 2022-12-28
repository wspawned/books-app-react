import axios from "redaxios";

const NYT_API_BASE_URL:string = 'https://api.nytimes.com/svc/books/v3/lists.json?';
const NYT_API_KEY:string = "gDIHYGDXjtgkNpu5EkcnAvvnboGHDkcK";

export const nytAPI = axios.get(`${NYT_API_BASE_URL}list-name=hardcover-fiction&api-key=${NYT_API_KEY}`);

//https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=gDIHYGDXjtgkNpu5EkcnAvvnboGHDkcK