import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const CustomInput = ({isPassword, title, value, onChangeText}) => {
  return (
    <View>
      {title && <Text>{title}</Text>}
      <TextInput
        style={styles.input}
        value={value}
        secureTextEntry={isPassword}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ced4da',
    borderBottomWidth: 1,
    borderRadius: 8,
    marginVertical: 10,
  },
});

export default CustomInput;
