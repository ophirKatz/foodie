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
  listItem: {
    marginBottom: 32,
  },
});

export default RecipeList;
