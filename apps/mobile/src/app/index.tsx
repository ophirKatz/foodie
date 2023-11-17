import { Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <>
      <Stack.Screen />
      <View style={styles.fullScreen}>
        <Text>Home Screen</Text>
      </View>
    </>
  );
}

// options={{
//     title: 'index',
//     headerStyle: { backgroundColor: '#f4511e' },
//     headerTintColor: '#fff',
//     headerTitleStyle: {
//       fontWeight: 'bold',
//     },
//   }}

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
});
