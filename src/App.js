import React, {useEffect} from 'react';
import NonUserStack from './navigation/NonUserStack';
import UsersStack from './navigation/UsersStack';
import {StatusBar, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getProduts} from './store/app';

const App = () => {
  const {token} = useSelector(state => state.auth);
  console.log('token:', token);
  return (
    <>
      <StatusBar backgroundColor={'transparent'} translucent={true} />
      {token ? <UsersStack /> : <NonUserStack />}
    </>
  );
};

export default App;
