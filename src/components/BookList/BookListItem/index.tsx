import './style.css';

const BookListItem:React.FC<{book:string, key:number}> = ({book}) => {
  return (
    <div className='list-item'>
      {book}
    </div>
  )
};

export default BookListItem;