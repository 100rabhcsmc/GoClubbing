import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../utils/themes';
import Placeholder from '../component/Placeholder';
import Button from '../component/Button/Button';
import Scale from '../utils/Font';
import Icon from 'react-native-vector-icons/FontAwesome5';

const LogIn = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(true);

  const HandleSubmit = async () => {
    console.log('hello naviagation witj sad face');

    setLoading(true);
    console.log('clicked');
    console.log('email------>', username);
    console.log('password------>', password);
    await fetch('https://backend.startso.in:8442/api/auth/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      // body :
      body: JSON.stringify({
        user_name: username,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(response => {
        setLoading(false);
        console.log('hello saurabh all good------?', response.access_token);
        if (username && password) {
          {
            response.access_token !== undefined
              ? navigation.navigate('MainApp')
              : console.log('username and password required');
            Alert.alert('Username and Password Wrong');
          }
        } else {
          console.log('sonmething wrong');
          Alert.alert('Username and Password required');
        }
      });
  };
  return (
    <View style={{marginHorizontal: Scale(35)}}>
      <Text
        style={{
          fontSize: Scale(25),
          marginTop: Scale(30),
          color: '#0D253C',
          fontWeight: '700',
        }}>
        Welcome back
      </Text>
      <Text
        style={{
          color: COLORS.DarkBlue,
          marginTop: Scale(10),
          fontSize: Scale(14),
        }}>
        Sign in with your account
      </Text>

      <Placeholder
        placeholderName="Enter Your Username"
        value={username}
        onChangeText={setUsername}
        title="Username"
      />

      <Placeholder
        placeholderName="Enter Your Password"
        value={password}
        onChangeText={setPassword}
        title="Password"
        secureTextEntry={showPassword}
      />
      <Icon
        name={showPassword ? 'eye' : 'eye-slash'}
        size={15}
        color="#4F4F4F"
        onPress={() => setShowPassword(!showPassword)}
        style={{position: 'absolute', marginStart: '87%', top: '59%'}}
      />
      <Button btnName="LOGIN" onPress={HandleSubmit} />
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: '10%',
          marginTop: Scale(20),
        }}>
        <Text
          style={{
            color: COLORS.DarkBlue,
            fontSize: Scale(15),
          }}>
          Forgot your password?
        </Text>
        <TouchableOpacity style={{marginStart: Scale(5)}}>
          <Text style={{color: '#376AED', fontSize: Scale(17)}}>
            Reset here
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LogIn;
