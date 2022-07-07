import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import SplashScreen from 'react-native-splash-screen';

import StackNavigation from './container/StackNavigation';

export default function App() {
  React.useEffect(() => SplashScreen.hide(), []);

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
