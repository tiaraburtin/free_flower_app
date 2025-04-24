import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen';
import WombSoundscape from './WombSoundscape';

const Stack = createNativeStackNavigator();

export default function Layout() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="WombSoundscape" component={WombSoundscape} />
    </Stack.Navigator>
  );
}
