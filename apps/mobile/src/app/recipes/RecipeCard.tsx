import { Recipe } from '@wndr.foodie/models';
import { Card, Text } from 'react-native-paper';

/* eslint-disable-next-line */
export interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard(props: RecipeCardProps) {
  return (
    <Card type="elevated">
      <Card.Cover source={{ uri: props.recipe.coverPhotoUrl }} height={30} />
      <Card.Title title={props.recipe.name} />
      <Card.Content>
        <Text variant="bodyMedium">{props.recipe.description}</Text>
      </Card.Content>
    </Card>
  );
}

export default RecipeCard;
