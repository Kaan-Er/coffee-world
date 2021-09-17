import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../app/data";

const initialState = {
  coffees: data,
};

export const coffeesSlice = createSlice({
  name: "coffees",
  initialState,
  reducers: {
    getAllCoffees: (state, action) => {
      state.coffees = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getAllCoffees } = coffeesSlice.actions;

export default coffeesSlice.reducer;
