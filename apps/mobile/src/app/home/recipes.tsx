import RecipeList from '../recipes/RecipeList';
import { useRecipesList } from '../recipes/store/recipes.selectors';

function RecipesScreen() {
  const recipes = useRecipesList();

  return <RecipeList recipes={recipes} />;
}

export default RecipesScreen;
