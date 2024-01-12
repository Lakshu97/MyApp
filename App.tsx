/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from "react";
import {SafeAreaView} from 'react-native-safe-area-context';
import AppNavigation from './AppModules/Navigation/AppNavigation.js';
import {Provider} from 'react-redux';
import { Toast, ToastProvider } from "react-native-toast-notifications";

import store from './AppModules/Redux/store';
import { requestUserPermission } from "./AppModules/Notification/notifications.js";
function App(): React.JSX.Element {
  useEffect(() => {
    requestUserPermission().then(r => Toast.show('Accepted')).catch(e => Toast.show('Error',{
      type:'danger'
    }))
  },[])
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
