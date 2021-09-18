import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterCoffeesByCategory } from "../features/coffees/coffeesSlice";
import Card from "../components/Card/Card";

function Category({ match }) {
  const dispatch = useDispatch();

  // We get coffees and search key from state if there is a search key
  const { coffees } = useSelector((state) => state.coffees);
  const { searchKey } = useSelector((state) => state.coffees);

  // We get coffees from the state according to categories
  useEffect(() => {
    dispatch(filterCoffeesByCategory(match.params.type));
  }, [match.params.type]);

  return (
    <div className="main">
      {coffees.map(
        (coffee) =>
          coffee.title.toLowerCase().includes(searchKey.toLowerCase()) && (
            <Card key={coffee.id} coffee={coffee} />
          )
      )}
    </div>
  );
}

export default Category;
