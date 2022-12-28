import axios from "redaxios";

const GOOGLE_API_BASE_URL:string = 'https://www.googleapis.com/books/v1/volumes';
const GOOGLE_API_KEY:string = "AIzaSyBDY0oG5HPL6BQ5YdyWXy-MI6UdTV4LSr8";

const art = "art";


export const googleAPI = axios.get(`${GOOGLE_API_BASE_URL}`, {
  params: { 
    key: GOOGLE_API_KEY,
    q : `subject:${art}`,
    maxResults : 15,
    startIndex : 0,
  }
});

//https://www.googleapis.com/books/v1/volumes?q=isbn:038554734X&key=AIzaSyBDY0oG5HPL6BQ5YdyWXy-MI6UdTV4LSr8

//https://www.googleapis.com/books/v1/volumes?q=search+terms