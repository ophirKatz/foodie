import { Recipe } from '@wndr.foodie/models';
import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  StatusBar,
  View,
  ActivityIndicator,
  Text,
  FlatList,
} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store/store';

export const App = () => {
  throw new Error('ERRORRRRR');
  const scrollViewRef = useRef<null | ScrollView>(null);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Recipe[]>([]);

  const getRecipesAsync = async () => {
    try {
      const response = await fetch('http://192.168.1.102:3000/api/recipes');
      const json = await response.json();
      console.log('Received data', data);
      setData(json);
    } catch (error) {
      console.error('Error fetching recipes', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRecipesAsync();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      {/* <SafeAreaView> */}
      {/* <ScrollView
          ref={(ref) => {
            scrollViewRef.current = ref;
          }}
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        > */}
      <View style={{ padding: 24 }}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => (
              <Text>
                {item.name}, {item.description}
              </Text>
            )}
          />
        )}
      </View>
      {/* </ScrollView> */}
      {/* </SafeAreaView> */}
    </Provider>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
  },
});

export default App;
