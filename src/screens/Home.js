import React from 'react';
import {StyleSheet, Text, View, I18nManager} from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Open up Home.js o start working on your app!</Text>
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
