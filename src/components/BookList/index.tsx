import BookListItem from './BookListItem';
import './style.css';

const BookList = ( ) => {

  const books = ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X",]

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