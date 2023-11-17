import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Recipe } from '@wndr.foodie/models';

export interface RecipesState {
  recipes: Recipe[];
}

const initialState: RecipesState = {
  recipes: [],
};

export const recipesSlice = createSlice({
  name: 'Recipes',
  initialState,
  reducers: {
    loadRecipesSuccess: (
      state: RecipesState,
      action: PayloadAction<Recipe[]>
    ) => {
      state.recipes = action.payload;
    },
  },
});

export const recipesActions = recipesSlice.actions;

export default recipesSlice.reducer;
