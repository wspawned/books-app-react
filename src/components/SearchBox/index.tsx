import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { setSearchedWords } from "../../redux/slices/generalSlice";
import './style.css';

const SearchBox = () => {

  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();


  return (
    <div className="search-box" >
      <form
        className="search-form"
        onSubmit={(e) => {
          e.preventDefault();
          navigate(`/?category=${search}`);
          dispatch(setSearchedWords(search));
          setSearch("");
        }}
      >
        <input
          className="search-input"
          id="search"
          value={search}
          placeholder="Search book"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="search-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SearchBox;