import { StyleSheet, View } from 'react-native';

export interface ListSeparatorProps {
  height?: number;
  width?: number;
}

export const ListSeparator = (props: ListSeparatorProps) => {
  const styles = StyleSheet.create({
    separator: {
      height: props.height ?? 0,
      width: props.width ?? 0,
    },
  });

  return <View style={styles.separator} />;
};
