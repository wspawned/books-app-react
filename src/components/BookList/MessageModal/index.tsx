import './style.css';

const MessageModal:React.FC<{previewLink:string, closeModal: ()=>void }> = ({previewLink, closeModal}) => {
  return (
    <div className='message' >
    <h2>Would you like to see the book on Google Books?</h2>
    <div className="message-buttons">
      <button onClick={() => {
        window.open(previewLink, '_blank');
        closeModal();
      }}>Yes</button>
      <button onClick={() => closeModal()}>No</button>
    </div>
  </div>
  )
};

export default MessageModal;