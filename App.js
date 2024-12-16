import React from 'react';
import {
  Text,
  View
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './src/BottomTabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler'

function App() {

  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;