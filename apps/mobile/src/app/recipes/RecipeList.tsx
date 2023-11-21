import { FlatList, Text } from 'react-native';
import { Recipe } from '@wndr.foodie/models';

/* eslint-disable-next-line */
export interface RecipeListProps {
  recipes: Recipe[];
}

export function RecipeList(props: RecipeListProps) {
  return (
    <FlatList
      data={props.recipes}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => (
        <Text>
          {item.name}, {item.description}
        </Text>
      )}
    />
  );
}

export default RecipeList;
