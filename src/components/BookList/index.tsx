import { useEffect } from 'react';
import { getBestSellers } from '../../redux/actions/getBestSellers';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import BookListItem from './BookListItem';
import './style.css';

const BookList = ( ) => {

  const dispatch = useAppDispatch();

  useEffect(()=> {
    dispatch(getBestSellers())
  },[])

  const books = useAppSelector(state=> state.general.bestSellerBooks.results)

  return (
    <div className="book-list">
    
    {books.map((book, index) => {
      return (
          
          <BookListItem
          
          book = {book}
          key = {index}
          />

        
      );
    })}
  </div>
  )
};

export default BookList;