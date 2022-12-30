import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SIDEBAR_ITEMS } from "../../constants";
import { getCategoryBooks, ListBookType } from "../../redux/actions/getCategoryBooks";
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
  const navigate = useNavigate();
  
  const [searchParams, setSearchParams] = useSearchParams();
  const paramsPage = Number(searchParams.get("page")) || 1;
  const paramsCategory = searchParams.get("category") || SIDEBAR_ITEMS[0].path;
  
  useEffect( () => {
    (Search) ?
    dispatch(getSearchedBooks( {paramsCategory, paramsPage, maxResults} )) :
    dispatch(getCategoryBooks( {paramsCategory, paramsPage, maxResults} ));
  }, [searchParams, dispatch ] )



  return(
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

    </div>
    
  )
};

export default Home;