import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Button,
} from 'react-native';
import CustomInput from '../components/CustomInput';
import {useDispatch} from 'react-redux';

const Signup = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.page}>
        <View style={styles.upperBar}>
          <TouchableOpacity
            style={styles.upperBarIcon}
            onPress={() => navigation.goBack()}>
            <Image
              source={require('../assets/backIcon.png')}
              style={styles.Img}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.headerText}>Sign up with Email</Text>
          <Text style={styles.subText}>
            Get chatting with friends and family today by signing up for our
            chat app!
          </Text>
          <CustomInput
            title="Email"
            isPassword={true}
            onChangeText={text => setEmail(text)}
          />
          <CustomInput
            title="Password"
            isPassword={true}
            onChangeText={text => setPassword(text)}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Create an account</Text>
          </TouchableOpacity>
          <Button
            title="go"
            onPress={() => {
              dispatch(Signup({email, password}));
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  page: {
    height: '100%',
    width: '100%',
  },
  upperBar: {
    paddingTop: 33,
    paddingBottom: 15,
    width: '100%',
    backgroundColor: '#fff',
  },
  upperBarIcon: {
    marginLeft: 16,
    width: 24,
    height: 24,
  },
  Img: {
    width: 24,
    height: 24,
  },
  formContainer: {
    paddingHorizontal: 30,
    marginTop: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#000000',
  },
  subText: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 30,
    color: '#797C7B',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ced4da',
    borderBottomWidth: 1,
    borderRadius: 8,
    // paddingHorizontal: 10,
    marginVertical: 10,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    fontSize: 16,
    color: '#6c757d',
  },
});

export default Signup;
