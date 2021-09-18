import { useDispatch } from "react-redux";
import { setSearchKey } from "../../features/coffees/coffeesSlice";

const SearchInput = ({ placeholder }) => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setSearchKey(event.target.value));
  };

  return (
    <input
      className="inputStyle"
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default SearchInput;
