import { Recipe } from '@wndr.foodie/models';
import { rootStyles } from '@wndr.foodie/components';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Button, Icon, MD3Colors } from 'react-native-paper';
import { Image } from 'expo-image';

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
    <View style={styles.cardContainer}>
      <View style={styles.cardCover}>
        <Image
          style={styles.image}
          source={props.recipe.coverPhotoUrl}
          contentFit="cover"
          transition={1000}
        />
      </View>
      <View style={styles.cardContent}>
        <View style={rootStyles.flexRow}>
          <Text style={styles.title}>{props.recipe.name}</Text>
          <Icon
            source="star"
            size={16}
            color={rootStyles.primaryTextColorDark.color}
          />
          <Text style={styles.title}>{props.recipe.rating}</Text>
        </View>
        <View style={styles.recipeInfoContainer}>
          <View style={styles.recipeInfoItemContainer}>
            <View style={styles.iconContainer}>
              <Icon
                source="food"
                size={16}
                color={rootStyles.primaryTextColor.color}
              />
            </View>
            <Text>{props.recipe.servings}</Text>
          </View>
          <View style={styles.recipeInfoItemContainer}>
            <View style={styles.iconContainer}>
              <Icon
                source="leaf"
                size={16}
                color={rootStyles.primaryTextColor.color}
              />
            </View>
          </View>
          <View style={styles.recipeInfoItemContainer}>
            <View style={styles.iconContainer}>
              <Icon
                source="chili-hot"
                size={16}
                color={rootStyles.primaryTextColor.color}
              />
            </View>
          </View>
        </View>

        {/* <View style={styles.recipeTagsContainer}></View> */}
      </View>
    </View>
  );
}

export default RecipeCard;

const styles = StyleSheet.create({
  cardContainer: {
    height: 360,
    borderRadius: 12,
  },
  cardCover: {
    height: 240,
    borderRadius: 12,
  },
  image: {
    width: '100%',
    flex: 1,
    borderRadius: 12,
  },
  cardContent: {
    height: 120,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },
  title: {
    fontWeight: '500',
  },
  recipeInfoItemContainer: { display: 'flex', flexDirection: 'row' },
  iconContainer: {
    marginEnd: 2,
  },
  recipeInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  cardTitleBar: {},
  recipeTagsContainer: {
    width: '100%',
  },
});
