import React from 'react';
import {StyleSheet, Text, View, I18nManager, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {logout} from '../store/auth';

export default function Home() {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text>Open up Home.js o start working on your app!</Text>
      <Button
        title="Logout"
        onPress={() => {
          dispatch(logout());
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
