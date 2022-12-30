import './style.css';

const BookListItem:React.FC<{
  book:any, key:number, showModal:boolean, openModal: () => void, getUrl:(url:string) => void
}> = ({book, showModal, openModal, getUrl}) => {
  
  const { title, authors, previewLink, description } = book.volumeInfo;
  const thumbnail = book?.volumeInfo?.imageLinks?.smallThumbnail;

  return (
    <div className='list-item'
    onClick={
      ()=> {
        if(!showModal) {
          openModal();
          getUrl(previewLink);
        }
      }
    }
    >
      <div className='list-book-cover'>
        <img
        src={thumbnail}
        alt={`${title} Cover`}
      />
      </div>
      <div className='list-book-info' >
        <h3 className='list-book-title' >{`${title} (${authors})`}</h3>
        <div className='description' >
          <p>{`${description}`}</p>
        </div>
      </div>
    </div>
  )
};

export default BookListItem;