import { CircularProgress, Typography } from "@mui/material";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SIDEBAR_ITEMS } from "../../constants";
import { getCategoryBooks } from "../../redux/actions/getCategoryBooks";
import { getSearchedBooks } from "../../redux/actions/getSearchedBooks";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import BookList from "../BookList";
import PageButtons from "../PageButtons";
import SearchBox from "../SearchBox";
import './style.css';

const Home:React.FC = () => {

  const bookList = useAppSelector(state => state.general.bookList.items );
  const totalItems = useAppSelector(state => state.general.bookList.totalItems);
  const Search = useAppSelector(state=> state.general.searchedWords);
  const maxResults = useAppSelector(state=> state.general.pageSize);
  const totalPages = Math.ceil(totalItems/maxResults);
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const paramsPage = Number(searchParams.get("page")) || 1;
  const paramsCategory = searchParams.get("category") || SIDEBAR_ITEMS[0].path;
  
  useEffect( () => {
    (Search) ?
    dispatch(getSearchedBooks( {paramsCategory, paramsPage, maxResults} )) :
    dispatch(getCategoryBooks( {paramsCategory, paramsPage, maxResults} ));
  }, [searchParams, dispatch ] )

  return(
    bookList[0]?.volumeInfo?.imageLinks?.smallThumbnail?
    <div className="home" >
      <SearchBox/>
      <BookList
      books={bookList}
      />
      <PageButtons
      paramsPage={paramsPage}
      totalPages={totalPages}
      paramsCategory={paramsCategory}
      />
    </div> :
    <div className="loader">
      <CircularProgress color="secondary" />
      <Typography variant="h6" color="primary">Loading ...</Typography>
    </div>
  )
};

export default Home;