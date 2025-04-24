import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Linking } from 'react-native';

import HomeScreen from './components/HomeScreen';
import WombSoundscapeScreen from './components/WombSoundscapeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    const handleDeepLink = (event) => {
      const url = event.url;
      if (url && url.includes('/womb-soundscape')) {
        navigationRef.current?.navigate('WombSoundscape');
      }
    };

    Linking.addEventListener('url', handleDeepLink);

    // Check if app was opened with a link
    Linking.getInitialURL().then((url) => {
      if (url && url.includes('/womb-soundscape')) {
        navigationRef.current?.navigate('WombSoundscape');
      }
    });

    return () => {
      Linking.removeEventListener('url', handleDeepLink);
    };
  }, []);

  const navigationRef = React.useRef();

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="WombSoundscape" component={WombSoundscapeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
