import './style.css';

const BookListItem:React.FC<{book:any, key:number}> = ({book}) => {
  

  return (
    <div className='list-item'>
      {book.isbns[0].isbn10}
    </div>
  )
};

export default BookListItem;