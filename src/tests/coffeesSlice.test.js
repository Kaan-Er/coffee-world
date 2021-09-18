import reducer, {
  getAllCoffees,
  filterCoffeesByCategory,
  setSearchKey,
} from "../features/coffees/coffeesSlice";
import { data } from "../app/data";

test("should return the initial state", () => {
  expect(reducer(undefined, {})).toEqual({
    coffees: [],
    searchKey: "",
  });
});

test("should return all coffees", () => {
  const previousState = {
    coffees: [],
    searchKey: "",
  };

  expect(reducer(previousState, getAllCoffees())).toEqual({
    coffees: data,
    searchKey: "",
  });
});

test("should return coffees by hot category", () => {
  const previousState = {
    coffees: [],
    searchKey: "",
  };
  const hotCoffees = data.filter((coffee) => coffee.category == "hot");
  expect(reducer(previousState, filterCoffeesByCategory("hot"))).toEqual({
    coffees: hotCoffees,
    searchKey: "",
  });
});

test("should return coffees by iced category", () => {
  const previousState = {
    coffees: [],
    searchKey: "",
  };
  const icedCoffees = data.filter((coffee) => coffee.category == "iced");
  expect(reducer(previousState, filterCoffeesByCategory("iced"))).toEqual({
    coffees: icedCoffees,
    searchKey: "",
  });
});

test("state should record what the user is looking for", () => {
  const previousState = {
    coffees: [],
    searchKey: "",
  };
  expect(reducer(previousState, setSearchKey("black"))).toEqual({
    coffees: [],
    searchKey: "black",
  });
});
