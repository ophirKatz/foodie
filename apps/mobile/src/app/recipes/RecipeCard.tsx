import { Recipe } from '@wndr.foodie/models';
import { rootStyles } from '@wndr.foodie/components';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Button, Icon, MD3Colors } from 'react-native-paper';
import { Image } from 'expo-image';

/* eslint-disable-next-line */

interface RecipeInfoItemProps {
  icon: string;
  data?: string;
}

function RecipeInfoItem(props: RecipeInfoItemProps) {
  return (
    <View style={styles.recipeInfoItemContainer}>
      <View style={styles.iconContainer}>
        <Icon
          source={props.icon}
          size={16}
          color={rootStyles.primaryTextColor.color}
        />
      </View>
      {props.data ? <Text>{props.data}</Text> : <View></View>}
    </View>
  );
}

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
      <View style={styles.contentOuterContainer}>
        <View style={styles.leftGhost} />
        <View style={styles.rightGhost} />
        <View style={styles.bottomGhost} />
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
          <View style={styles.recipeInfoItemsContainer}>
            <RecipeInfoItem icon="food" data={props.recipe.servings} />
            <RecipeInfoItem icon="leaf" />
            <RecipeInfoItem icon="chili-hot" />
          </View>
          {/* <View style={styles.recipeTagsContainer}></View> */}
        </View>
      </View>
    </View>
  );
}

export default RecipeCard;

const styles = StyleSheet.create({
  cardContainer: {
    height: 360,
    borderRadius: 12,
    // borderWidth: 1,
    // borderColor: rootStyles.primaryTextColor.color,
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
  contentOuterContainer: {
    height: 120,
    display: 'flex',
  },
  cardContent: {
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
  recipeInfoItemsContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  cardTitleBar: {},
  recipeTagsContainer: {
    width: '100%',
  },

  leftGhost: {
    alignSelf: 'flex-start',
    height: 72,
    width: 36,
    position: 'absolute',
    borderStartWidth: 1,
    borderBottomWidth: 1,
    // borderColor: rootStyles.primaryTextColor.color,
    borderColor: `linear-gradient(to right ${rootStyles.primaryColor.color}, ${rootStyles.primaryTextColor.color})`,
    zIndex: 5,
    marginTop: 48,
    borderBottomStartRadius: 12,
  },
  rightGhost: {
    alignSelf: 'flex-end',
    height: 72,
    width: 36,
    position: 'absolute',
    borderEndWidth: 1,
    borderBottomWidth: 1,
    borderColor: rootStyles.primaryTextColor.color,
    zIndex: 5,
    marginTop: 48,
    borderBottomEndRadius: 12,
  },
  bottomGhost: {},
});
