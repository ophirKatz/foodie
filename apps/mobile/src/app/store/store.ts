import { configureStore } from '@reduxjs/toolkit';

import recipesReducer, { RecipesState } from '../recipes/store/recipes.slice';

export interface State {
  recipes: RecipesState;
}

export const store = configureStore<State>({
  reducer: {
    recipes: recipesReducer,
  },
});
