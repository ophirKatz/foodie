import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Tags } from '@wndr.foodie/components';
import { Recipe } from '@wndr.foodie/models';

export interface RecipesState {
  isLoading: boolean;
  recipes: Recipe[];
  tags: Tags;
}

const tags = [
  'Asian',
  'Sweet',
  'Italian',
  'Mediterranean',
  'Beef',
  'Chicken',
  'Baking',
  'Dumplings',
];

const initialState: RecipesState = {
  isLoading: true,
  recipes: [],
  tags: Object.fromEntries(tags.map((key) => [key, false])),
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
    updateTags: (state: RecipesState, action: PayloadAction<Tags>) => {
      state.tags = action.payload;
    },
  },
});

export const recipesActions = recipesSlice.actions;

export default recipesSlice.reducer;
