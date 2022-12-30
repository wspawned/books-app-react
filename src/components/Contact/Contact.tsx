import './style.css';

const Contact:React.FC = () => {

  return(
    <div className='contact' >
      <div className='contact-text' >
        <h2>CONTACT US</h2>
        <ul>
        {CONTACT_INFO.map((info)=>{
          return(<li>{info}</li>)
        })}
      </ul>
      </div>

    </div>
  )
};

const CONTACT_INFO = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Rhoncus dolor purus non enim praesent elementum facilisis leo vel.",
];

export default Contact;