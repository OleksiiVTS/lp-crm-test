import { createSlice } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: {},
  reducers: {
    setStatusFilter(state, action) {
      return (state = action.payload);
    },
    addDataFilter(state, action) {
      state.initialState = action.payload;
    },
  },
});

export const { setStatusFilter, addDataFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
