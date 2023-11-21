import { View, Text, StyleSheet } from 'react-native';

function DiscoverScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Discover</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
  },
});

export default DiscoverScreen;
