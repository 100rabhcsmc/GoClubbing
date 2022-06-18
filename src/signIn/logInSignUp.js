import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../utils/themes';

import LogIn from './login';
import Scale from '../utils/Font';

const LogInSignUp = ({navigation}) => {
  const [active, setActive] = useState(true);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <View
            style={{
              flex: 0.18,
              justifyContent: 'center',
              // backgroundColor: 'red',
            }}>
            <Image
              source={require('../assets/LOGO_SMALL.png')}
              style={{marginTop: Scale(35)}}
            />
          </View>
          <View
            style={{flex: 1, backgroundColor: COLORS.Mandy, borderRadius: 25}}>
            <View
              style={{
                // flex: 0.1,
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginHorizontal: Scale(40),
                marginVertical: Scale(10),
              }}>
              <TouchableOpacity onPress={() => setActive(true)}>
                <Text
                  style={{
                    fontSize: Scale(20),
                    fontWeight: '700',
                    color: active ? 'white' : 'rgba(255, 255, 255, 0.25)',
                  }}>
                  LOGIN
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text
                  style={{
                    fontSize: Scale(20),
                    fontWeight: '700',
                    color: active ? 'rgba(255, 255, 255, 0.25)' : 'white',
                  }}>
                  SIGN UP
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: COLORS.White,
                top: Scale(1),
                borderRadius: 25,
              }}>
              <LogIn navigation={navigation} />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LogInSignUp;
