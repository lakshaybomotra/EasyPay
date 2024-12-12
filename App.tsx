import React from 'react';
import {
  Text,
  View
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './src/BottomTabs';

function App(): JSX.Element {

  return (
    <NavigationContainer>
       <BottomTabs />
    </NavigationContainer>
  );
}

export default App;