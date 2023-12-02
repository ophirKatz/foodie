import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export interface GradientBorderProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
  colors?: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  borderRadius: number;
  borderWidth: number;
  backgroundColor: string;
}

export const GradientBorder = (props: GradientBorderProps) => {
  const styles = StyleSheet.create({
    gradient: {
      borderRadius: props.borderRadius,
      flex: 1,
      display: 'flex',
    },
    container: {
      margin: props.borderWidth,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: props.backgroundColor,
      borderRadius: props.borderRadius,
      paddingStart: 16,
      paddingEnd: 16,
    },
  });
  const colors = props.colors ?? [];

  // Only supports horizontal gradient
  return (
    <LinearGradient
      colors={colors}
      style={styles.gradient}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <View style={styles.container}>{props.children}</View>
    </LinearGradient>
  );
};
