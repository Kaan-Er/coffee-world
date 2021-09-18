import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../app/data";

const initialState = {
  coffees: [],
  searchKey: "",
};

export const coffeesSlice = createSlice({
  name: "coffees",
  initialState,
  reducers: {
    getAllCoffees: (state) => {
      state.coffees = data;
    },
    filterCoffeesByCategory: (state, action) => {
      state.coffees = data.filter(
        (coffee) => coffee.category == action.payload
      );
    },
    setSearchKey: (state, action) => {
      state.searchKey = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getAllCoffees, filterCoffeesByCategory, setSearchKey } =
  coffeesSlice.actions;

export default coffeesSlice.reducer;
