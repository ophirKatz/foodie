import { FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { GradientBorder } from './GradientBorder';
import { ListSeparator } from './ListSeparator';
import { rootStyles } from './styles';

export type TagItem = {
  data: string;
  isSelected: boolean;
};

export type Tags = {
  [tag: string]: boolean;
};

export type TagsSelection = {
  [tag: string]: boolean;
};

interface TagProps {
  tag: TagItem;
  onSelectionChanged: (tag: TagItem) => void;
}

const Tag = (props: TagProps) => {
  const onPress = () => {
    props.onSelectionChanged({
      ...props.tag,
      isSelected: !props.tag.isSelected,
    });
  };

  const tagStyles = StyleSheet.create({
    tagText: {
      color: props.tag.isSelected ? 'white' : 'black',
    },
  });

  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <GradientBorder
        colors={[rootStyles.primaryColorLight.color, rootStyles.primaryColor.color, rootStyles.primaryColorDark.color]}
        borderWidth={2}
        borderRadius={16}
        backgroundColor={props.tag.isSelected ? 'transparent' : 'white'}
      >
        <Text style={tagStyles.tagText}>{props.tag.data}</Text>
      </GradientBorder>
    </TouchableOpacity>
  );
};

export interface TagListProps {
  tags: Tags;
  onTagsSelectionChanged: (tagsSelection: TagsSelection) => void;
}

export const TagList = (props: TagListProps) => {
  const tagItems: TagItem[] = Object.keys(props.tags).map((x) => ({
    data: x,
    isSelected: props.tags[x],
  }));

  const onTagSelectionChanged = (tag: TagItem) => {
    const newTags = {
      ...props.tags,
      [tag.data]: tag.isSelected,
    };
    props.onTagsSelectionChanged(newTags);
  };

  return (
    <FlatList
      horizontal
      data={tagItems}
      keyExtractor={(item) => item.data}
      renderItem={({ item }) => (
        <Tag
          tag={item}
          onSelectionChanged={(tagItem) => onTagSelectionChanged(tagItem)}
        />
      )}
      ItemSeparatorComponent={() => <ListSeparator width={8} />}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  tagContainer: {
    borderRadius: 16,
  },
  buttonContainer: {
    height: 32,
    minWidth: 80,
  },
});
