import axios from "redaxios";

const GOOGLE_API_BASE_URL:string = 'https://www.googleapis.com/books/v1/volumes';
const GOOGLE_API_KEY:string = "AIzaSyBDY0oG5HPL6BQ5YdyWXy-MI6UdTV4LSr8";

export const googleAPI = axios.create({
  baseURL: GOOGLE_API_BASE_URL,
  params: { 
    key: GOOGLE_API_KEY,   
  }
});
