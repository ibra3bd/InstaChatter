import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  Button,
  ScrollView,
} from 'react-native';
import CustomInput from '../components/CustomInput';
import {useDispatch, useSelector} from 'react-redux';
import {setAccesstoken, setUser} from '../../store/auth';
import {login} from '../store/auth';

export default function Login() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={styles.page}>
          <View style={styles.upperBar}>
            <TouchableOpacity style={styles.upperBarIcon}>
              <Image
                source={require('../assets/backIcon.png')}
                style={styles.Img}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.aboveLine}>
            <View style={styles.textComponents}>
              <Text style={styles.title}>Log in to Chatbox</Text>
              <Text style={styles.title2}>
                Welcome back! Sign in using your social account or email to
                continue us
              </Text>
            </View>
            <View style={{height: 25}} />

            <View style={styles.socialIcons}>
              <TouchableOpacity style={styles.icon}>
                <Image
                  source={require('../assets/facebookIcon.png')}
                  style={styles.iconImg}
                />
              </TouchableOpacity>
              <View style={{width: 20}} />
              <TouchableOpacity style={styles.icon}>
                <Image
                  source={require('../assets/googleIcon.png')}
                  style={styles.iconImg}
                />
              </TouchableOpacity>
              <View style={{width: 20}} />
              <TouchableOpacity style={styles.icon}>
                <Image
                  source={require('../assets/appleIcon.png')}
                  style={styles.iconImg}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.horizontalLine}>
            <View style={styles.hzLeft}></View>
            <Text style={styles.hzText}> OR </Text>
            <View style={styles.hzRight}></View>
          </View>
          <View style={styles.form}>
            <CustomInput
              title="Your Email"
              onChangeText={text => setEmail(text)}
            />
            <CustomInput
              title="Your Password"
              isPassword={true}
              onChangeText={text => setPassword(text)}
            />
          </View>
          <View style={{paddingHorizontal: 25}}>
            <Button
              title="Login"
              onPress={() => {
                dispatch(login({email, password}));
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  page: {
    height: '100%',
    width: '100%',
  },
  upperBar: {
    paddingTop: 33,
    width: '100%',
  },
  upperBarIcon: {
    marginLeft: 24,
    width: 24,
    height: 24,
  },
  Img: {
    width: 24,
    height: 24,
  },
  textComponents: {
    paddingTop: 0,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    width: 160,
    height: 25,
    fontSize: 18,
    color: '#000E08',
    fontWeight: 'bold',
  },
  title2: {
    paddingTop: 16,
    width: 300,
    height: 60,
    paddingLeft: 10,
    color: '#797C7B',
    fontSize: 14,
    textAlign: 'center',
  },
  socialIcons: {
    flexDirection: 'row',
  },
  icon: {
    // marginTop: 32,
  },
  iconImg: {
    width: 48,
    height: 48,
  },
  aboveLine: {
    paddingTop: 60,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontalLine: {
    paddingTop: 30,
    flexDirection: 'row',
    width: '100%',
  },
  hzLeft: {
    borderBottomWidth: 1,
    borderBottomColor: '#CDD1D0',
    height: 1,
    width: '30%',
    paddingRight: '45%',
    paddingTop: '2.5%',
  },
  hzRight: {
    borderBottomWidth: 1,
    borderBottomColor: '#CDD1D0',
    height: 1,
    width: '30%',
    paddingLeft: '45%',
    paddingTop: '2.5%',
  },
  hzText: {
    paddingHorizontal: '2%',
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
  form: {
    paddingHorizontal: 25,
    marginVertical: 25,
  },
});
