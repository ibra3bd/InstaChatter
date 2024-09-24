import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store, {persistor} from './src/store';
import {PersistGate} from 'redux-persist/integration/react';

const myApp = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => myApp);

//libraries to use for navigation:
//npm install
//npm install @react-navigation/native @react-navigation/native-stack react-native-screens @react-navigation/stack react-native-safe-area-context react-native-gesture-handler
