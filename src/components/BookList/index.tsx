import { ListBookType } from '../../redux/actions/getCategoryBooks';
import BookListItem from './BookListItem';
import './style.css';
import { useState } from "react";
import Modal from '../Modal';
import MessageModal from './MessageModal';

const BookList: React.FC<{ books: ListBookType[] }> = ({ books }) => {
  const [showModal, setShowModal] = useState(false);
  const [previewLink, setPreviewLink] = useState("");

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const getBookUrl = (url: string) => {
    setPreviewLink(url);
  };

  return (
    <div className="book-list">
      {books.length > 0 &&
        books.map((book, index) => {
          return (
            <BookListItem
              book={book}
              key={index}
              showModal={showModal}
              openModal={openModal}
              getUrl={getBookUrl}
            />
          );
        })}

      {showModal ? (
        <Modal>
          <MessageModal previewLink={previewLink} closeModal={closeModal} />
        </Modal>
      ) : null}
    </div>
  );
};

export default BookList;