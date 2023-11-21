import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Recipe } from '@wndr.foodie/models';

export interface RecipesState {
  isLoading: boolean;
  recipes: Recipe[];
}

const initialState: RecipesState = {
  isLoading: true,
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
      state.isLoading = false;
    },
  },
});

export const recipesActions = recipesSlice.actions;

export default recipesSlice.reducer;
