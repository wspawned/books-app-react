import './style.css';

const BookListItem:React.FC<{book:any, key:number}> = ({book}) => {
  
  const {id} = book;
  const { title, subtitle, authors, } = book.volumeInfo;
  const thumbnail = book.volumeInfo.imageLinks.smallThumbnail;

  return (
    <div className='list-item'>

      <span className='list-book-title' >
        {title}
      </span>

      <img
      className='list-book-cover'
      src={thumbnail}
      alt={`${title} Cover`}
      />
    </div>
  )
};

export default BookListItem;