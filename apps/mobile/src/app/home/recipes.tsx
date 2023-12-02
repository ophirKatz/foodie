import { StyleSheet, View } from 'react-native';
import RecipeList from '../recipes/RecipeList';
import { useRecipesEffects } from '../recipes/store/recipes.effects';
import {
  useFilteredRecipeList,
  useTags,
  useTagsList,
} from '../recipes/store/recipes.selectors';
import { SearchBar, TagList } from '@wndr.foodie/components';
import { useDispatch } from 'react-redux';
import { recipesActions } from '../recipes/store/recipes.slice';

function RecipesScreen() {
  const dispatch = useDispatch();

  const recipes = useFilteredRecipeList();
  const tags = useTags();
  const recipesEffects = useRecipesEffects();

  recipesEffects.reloadRecipesEffect();

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <SearchBar />
      </View>
      <View style={styles.tagListContainer}>
        <TagList
          tags={tags}
          onTagsSelectionChanged={(tags) =>
            dispatch(recipesActions.updateTags(tags))
          }
        />
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
    padding: 16,
  },
  tagListContainer: {
    marginTop: 8,
  },
});

export default RecipesScreen;
