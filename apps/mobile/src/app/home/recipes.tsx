import RecipeList from '../recipes/RecipeList';
import { useRecipesEffects } from '../recipes/store/recipes.effects';
import { useRecipesList } from '../recipes/store/recipes.selectors';

function RecipesScreen() {
  const recipes = useRecipesList();
  const recipesEffects = useRecipesEffects();

  recipesEffects.reloadRecipes();

  return <RecipeList recipes={recipes} />;
}

export default RecipesScreen;
