
import { useEffect } from 'react';
import { getCategoryBooks } from '../../redux/actions/getCategoryBooks';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import BookListItem from './BookListItem';
import './style.css';

const BookList = ({books}) => {


  return (
    <div className="book-list">
    
    { books.length>0 && books.map((book, index) => {
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