import { FlatList } from 'react-native';
import { Recipe } from '@wndr.foodie/models';
import RecipeCard from './RecipeCard';
import { ListSeparator } from '@wndr.foodie/components';

/* eslint-disable-next-line */
export interface RecipeListProps {
  recipes: Recipe[];
}

export function RecipeList(props: RecipeListProps) {
  return (
    <FlatList
      data={props.recipes}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => <RecipeCard recipe={item} />}
      ItemSeparatorComponent={() => <ListSeparator height={16} />}
      showsVerticalScrollIndicator={false}
    />
  );
}

export default RecipeList;
