import React, {useEffect} from 'react';
import NonUserStack from './navigation/NonUserStack';
import UsersStack from './navigation/UsersStack';
import {StatusBar, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {getProduts} from './store/app';

const App = () => {
  const isLoggedIn = false;

  return (
    <>
      <StatusBar backgroundColor={'transparent'} translucent={true} />
      {isLoggedIn ? <UsersStack /> : <NonUserStack />}
    </>
  );
};

export default App;
