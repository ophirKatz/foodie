import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Recipe } from '@wndr.foodie/models';
import RecipeCard from './RecipeCard';

/* eslint-disable-next-line */
export interface RecipeListProps {
  recipes: Recipe[];
}

export function RecipeList(props: RecipeListProps) {
  console.log(props.recipes.map((x) => x.name));
  return (
    <FlatList
      style={styles.listContainer}
      data={props.recipes}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => (
        <View style={styles.listItem}>
          <RecipeCard recipe={item} />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    display: 'flex',
    gap: 4,
    padding: 16,
  },
  listItem: {
    marginBottom: 32,
  },
});

export default RecipeList;
