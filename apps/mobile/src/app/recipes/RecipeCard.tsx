import { Recipe } from '@wndr.foodie/models';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';

/* eslint-disable-next-line */
export interface RecipeCardProps {
  recipe: Recipe;
  isSaved: boolean;
}

export function RecipeCard(props: RecipeCardProps) {
  const CardActions = () => {
    const [isSaved, setIsSaved] = useState(props.isSaved);
    const icon = isSaved ? 'bookmark' : 'bookmark-outline';
    return (
      <TouchableOpacity onPress={() => setIsSaved(!isSaved)}>
        <Button icon={icon} />
      </TouchableOpacity>
    );
  };

  return (
    <Card type="elevated">
      <Card.Cover source={{ uri: props.recipe.coverPhotoUrl }} />
      <Card.Title title={props.recipe.name} right={CardActions} />
      <Card.Content>
        <Text variant="bodyMedium">{props.recipe.description}</Text>
      </Card.Content>
    </Card>
  );
}

export default RecipeCard;
