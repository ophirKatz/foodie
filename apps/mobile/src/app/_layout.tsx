import { Stack } from 'expo-router/stack';
import { Provider } from 'react-redux';

import { store } from './store/store';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <StatusBar style="auto" />
        <SafeAreaProvider>
          <Stack screenOptions={{ headerShown: false }}>
            {/* Here will be the main content screen, any screen for modals. Inside top-content, in the home screen,
      there will be another stack using tabs?? */}
            <Stack.Screen name="index" />
          </Stack>
        </SafeAreaProvider>
      </PaperProvider>
    </Provider>
  );
}
