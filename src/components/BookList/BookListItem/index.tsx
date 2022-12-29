import './style.css';
import { useState } from "react";
import Modal from '../../Modal';


const BookListItem:React.FC<{
  book:any, key:number, showModal:boolean, openModal: () => void, getUrl:(url:string) => void
}> = ({book, showModal, openModal, getUrl}) => {
  
  const {id} = book;
  const { title, subtitle, authors, previewLink } = book.volumeInfo;
  const thumbnail = book?.volumeInfo?.imageLinks?.smallThumbnail;



  return (
    <div className='list-item'
    onClick={
      ()=> {
        openModal();
        getUrl(previewLink);
      }
    }
    >

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