/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppNavigation from './AppModules/Navigation/AppNavigation.js';
import {Provider} from 'react-redux';
import {ToastProvider} from 'react-native-toast-notifications';

import store from './AppModules/Redux/store';
function App(): React.JSX.Element {
  return (
    <ToastProvider>
      <SafeAreaView style={{flex: 1}}>
        <Provider store={store}>
          <AppNavigation />
        </Provider>
      </SafeAreaView>
    </ToastProvider>
  );
}
export default App;
