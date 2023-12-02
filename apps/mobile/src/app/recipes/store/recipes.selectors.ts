import { useSelector } from 'react-redux';
import { State } from '../../store/store';
import { Recipe } from '@wndr.foodie/models';
import { createSelector } from '@reduxjs/toolkit';
import { Tags } from '@wndr.foodie/components';

export const useRecipesList = () =>
  useSelector<State, Recipe[]>((state) => state.recipes.recipes);

const recipesListSelector = createSelector(
  [(state: State) => state.recipes],
  (state) => state.recipes
);

const tagsSelector = createSelector(
  [(state: State) => state.recipes],
  (state) => state.tags
);

const tagsListSelector = createSelector([tagsSelector], (tags) =>
  Object.keys(tags)
);

const selectedTagsSelector = createSelector([tagsSelector], (tags) => {
  return Object.keys(tags).filter((tag) => tags[tag]);
});

const filteredRecipesListSelector = createSelector(
  [recipesListSelector, selectedTagsSelector],
  (recipes, selectedTags) => {
    console.log('recipes', recipes, 'selectedTags', selectedTags);
    return recipes.filter((x) =>
      x.tags.some((tag) => selectedTags.includes(tag))
    );
  }
);

export const useFilteredRecipeList = () =>
  useSelector<State, Recipe[]>(filteredRecipesListSelector);

export const useTags = () => useSelector<State, Tags>(tagsSelector);
export const useTagsList = () => useSelector<State, string[]>(tagsListSelector);
