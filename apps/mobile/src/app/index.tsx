import { Redirect } from 'expo-router';

// Expand with login screen, and navigation to home screen
export default function Index() {
  // By default - redirect to /home
  return <Redirect href="/home" />;
}
