import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SIDEBAR_ITEMS } from "../../constants";
import { getCategoryBooks, ListBookType } from "../../redux/actions/getCategoryBooks";
import { getSearchedBooks } from "../../redux/actions/getSearchedBooks";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import BookList from "../BookList";
import SearchBox from "../SearchBox";
import './style.css';


const Home:React.FC = () => {

  const bookList = useAppSelector(state => state.general.bookList.items );
  const totalItems = useAppSelector(state => state.general.bookList.totalItems);
  const totalPages = Math.ceil(totalItems/15);
  const Search = useAppSelector(state=> state.general.searchedWords);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  
  const [searchParams, setSearchParams] = useSearchParams();
  const paramsPage = Number(searchParams.get("page")) || 1;
  const paramsCategory = searchParams.get("category") || SIDEBAR_ITEMS[0].path;
  
  useEffect( () => {
    (Search) ?
    dispatch(getSearchedBooks( {paramsCategory, paramsPage} )) :
    dispatch(getCategoryBooks( {paramsCategory, paramsPage} ));
  }, [searchParams, dispatch ] )

  return(
    <>
      <SearchBox/>
      <BookList
      books={bookList}
      />

        <div className='page-buttons'>
          {paramsPage>1 && (<button
          onClick={()=> {
            const newPageNumber =  Number(paramsPage) -1 ;
            navigate(`/?category=${paramsCategory}&page=${newPageNumber}`);
          } }
          >{`${paramsPage -1} <= ${paramsPage}`}</button>)}

          {paramsPage<totalPages && (<button
          onClick={()=> {
            const newPageNumber =  Number(paramsPage) +1 ;
            navigate(`/?category=${paramsCategory}&page=${newPageNumber}`);
          } }
          >{`${paramsPage} => ${paramsPage +1}`}</button>)}  
        </div>

    </>
  )
};

export default Home;