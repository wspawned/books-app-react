import './style.css';

const Portfolio:React.FC = () => {
  return (
    <div className="about">
      <div className="about-text">
        <h2>OUR WORKS</h2>
        <ul>
          {PORTFOLIO_CONTENTS.map((content) => {
            return <li>{content}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

const PORTFOLIO_CONTENTS = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Rhoncus dolor purus non enim praesent elementum facilisis leo vel.",
  "Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.",
  "Convallis convallis tellus id interdum velit laoreet id donec ultrices.",
  "Odio morbi quis commodo odio aenean sed adipiscing. ",
  "Amet nisl suscipit adipiscing bibendum est ultricies integer quis."
];

export default Portfolio;