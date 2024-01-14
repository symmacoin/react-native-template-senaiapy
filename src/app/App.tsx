/* eslint-disable unicorn/filename-case */
import {
  Rubik_300Light,
  Rubik_400Regular,
  Rubik_500Medium,
  useFonts,
} from '@expo-google-fonts/rubik';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import React from 'react';
import { StatusBar } from 'react-native';

// import { AppRoutes } from './src/routes/app.routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Rubik_300Light,
    Rubik_400Regular,
    Rubik_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </NavigationContainer>
  );
}
