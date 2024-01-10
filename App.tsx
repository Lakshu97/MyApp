/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppNavigation from './AppModules/Navigation/AppNavigation.js';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <AppNavigation />
    </SafeAreaView>
  );
}
export default App;
