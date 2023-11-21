import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { recipesActions } from './recipes.slice';

export function useRecipesEffects() {
  const dispatch = useDispatch();

  const getRecipesAsync = async () => {
    try {
      const response = await fetch('http://192.168.1.102:3000/api/recipes');
      const json = await response.json();
      dispatch(recipesActions.loadRecipesSuccess(json));
    } catch (error) {
      console.error('Error fetching recipes', error);
    }
  };

  useEffect(() => {
    getRecipesAsync();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
