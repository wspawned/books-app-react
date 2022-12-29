import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { setSearchedWords } from "../../redux/slices/generalSlice";

const SearchBox = () => {

  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();


  return (
    <form
    onSubmit={(e) => {
        e.preventDefault();
        navigate(`/?category=${search}`);
        dispatch(setSearchedWords(search));
        setSearch("");
    }}
    >
      <input
        id="search"
        value={search}
        placeholder="Search book"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
      className="submit"
      type="submit">Submit</button>
    </form>
  )
};

export default SearchBox;