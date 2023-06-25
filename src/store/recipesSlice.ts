import { createSlice } from '@reduxjs/toolkit';

const recipesSlice = createSlice({
  name: 'recipes',
  initialState: [],
  reducers: {},
});

export const { actions, reducer } = recipesSlice;
