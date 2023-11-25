import { StyleSheet, View } from 'react-native';
import RecipeList from '../recipes/RecipeList';
import { useRecipesEffects } from '../recipes/store/recipes.effects';
import { useRecipesList } from '../recipes/store/recipes.selectors';
import { SearchBar } from '@wndr.foodie/components';

function RecipesScreen() {
  const recipes = useRecipesList();
  const recipesEffects = useRecipesEffects();

  recipesEffects.reloadRecipesEffect();

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <SearchBar />
      </View>
      <View style={styles.listContainer}>
        <RecipeList recipes={recipes} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    display: 'flex',
  },
  searchBarContainer: {},
  listContainer: {
    display: 'flex',
    gap: 4,
    padding: 16,
  },
});

export default RecipesScreen;
