import { rootStyles } from '@wndr.foodie/components';
import { Tabs } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeLayout() {
  const insets = useSafeAreaInsets();

  const styles = StyleSheet.create({
    fullScreen: {
      flex: 1,
      paddingTop: insets.top,
      // backgroundColor: 'red',
    },
  });

  return (
    <View style={styles.fullScreen}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarIconStyle: {
            color: rootStyles.primaryColorDark.color,
          },
          tabBarLabelStyle: {
            color: rootStyles.primaryColorDark.color,
          },
        }}
      >
        <Tabs.Screen name="recipes" />
        <Tabs.Screen name="saved" />
        <Tabs.Screen name="discover" />
        <Tabs.Screen name="profile" />
      </Tabs>
    </View>
  );
}
