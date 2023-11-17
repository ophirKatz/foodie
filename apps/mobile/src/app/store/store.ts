import { configureStore } from '@reduxjs/toolkit';

import recipesReducer from '../recipes/store/recipes.slice';

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
  },
});
