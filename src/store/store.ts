import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./recipesSlice";

const store = configureStore({
  reducer: {
    recipes: reducer,
  },
});

export default store;
