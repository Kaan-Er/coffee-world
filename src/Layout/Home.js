import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import Card from "../components/Card/Card";
import { getAllCoffees } from "../features/coffees/coffeesSlice";

function Home() {
  const dispatch = useDispatch();

  // We get coffees and search key from state if there is a search key
  const { coffees } = useSelector((state) => state.coffees);
  const { searchKey } = useSelector((state) => state.coffees);

  // To fetch all the coffees as soon as the component occurs
  useEffect(() => {
    dispatch(getAllCoffees());
  }, []);

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

export default Home;
