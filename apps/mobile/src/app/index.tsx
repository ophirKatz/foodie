import { Redirect } from 'expo-router';
import { useRecipesEffects } from './recipes/store/recipes.effects';

// Expand with login screen, and navigation to home screen
export default function Index() {
  // Use all features effects
  useRecipesEffects();

  // By default - redirect to /home
  return <Redirect href="/home" />;
}
