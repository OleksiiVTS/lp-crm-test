import { createSelector } from '@reduxjs/toolkit';
import { filter } from '../constants';

export const selectCars = state => state.cars.dataCars;
export const selectFavoriteCars = state => state.cars.favoriteCars;
export const selectFilters = state => state.filters.initialState;

export const selectVisibleCars = createSelector(
  [selectCars, selectFilters],
  (cars, filters) => {
    return filter(cars, filters);
  }
);

export const selectVisibleFavoriteCars = createSelector(
  [selectFavoriteCars, selectFilters],
  (favoriteCars, filters) => {
    return filter(favoriteCars, filters);
  }
);
