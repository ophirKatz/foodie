import { useSelector } from 'react-redux';
import { State } from '../../store/store';
import { Recipe } from '@wndr.foodie/models';

export const useRecipesList = () =>
  useSelector<State, Recipe[]>((state) => state.recipes.recipes);
