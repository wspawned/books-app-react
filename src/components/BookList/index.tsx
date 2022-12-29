
import { useEffect } from 'react';
import { getCategoryBooks, ListBookType } from '../../redux/actions/getCategoryBooks';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import BookListItem from './BookListItem';
import './style.css';
import { useState } from "react";
import Modal from '../Modal';

const BookList:React.FC<{books:ListBookType[]}> = ({books}) => {

  const [showModal, setShowModal] = useState(false);
  const [previewLink, setPreviewLink] = useState("");

  const openModal = () => {setShowModal(true)};
  const closeModal = () => {setShowModal(false)};
  const getBookUrl = (url:string) => {setPreviewLink(url)};

  return (
    <div className="book-list">
      {books.length > 0 &&
        books.map((book, index) => {
          return <BookListItem book={book} key={index} showModal={showModal} openModal={openModal} getUrl={getBookUrl} />;
        })}

      {showModal ? (
        <Modal>
          <div>
            <h1>Would you like to see the book on Google Books?</h1>
            <div className="buttons">
              <button onClick={() => {
                window.open(previewLink, '_blank');
                closeModal();
              }}>Yes</button>
              <button onClick={() => closeModal()}>No</button>
            </div>
          </div>
        </Modal>
      ) : null}

    </div>
  );
};

export default BookList;