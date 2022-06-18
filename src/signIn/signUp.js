import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {COLORS} from '../utils/themes';
import Placeholder2 from '../component/Placeholder2';
import Placeholder from '../component/Placeholder';
import PhoneInput from 'react-native-phone-number-input';
import Button from '../component/Button/Button';
import Scale from '../utils/Font';
import Icon from 'react-native-vector-icons/FontAwesome5';

const SignUp = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  const phoneInput = useRef(null);
  const phoneNo = phoneNumber.slice(3);

  const HandleSignUp = async () => {
    console.log('you are in the Sign Up man');
    console.log('firstName', firstName);
    console.log('lastname', lastName);
    console.log('phoneNumber', phoneNo);
    console.log('emamil', email);
    console.log('password', password);

    const SuccessfullAlert = () => {
      Alert.alert(
        'You are Successfully Register',
        'Would you like to go back to login ?',
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
          {text: 'Yes', onPress: () => onButtonPress()},
        ],
        {cancelable: false},
      );

      const onButtonPress = () => {
        navigation.navigate('LogIn');
      };
    };

    await fetch('https://backend.startso.in:8442/api/auth/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      // body :
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        password: password,
        phone_number: phoneNo,
        role: 'USER',
        user_name: email,
      }),
    })
      .then(response => response.json())
      .then(response => {
        console.log('hello saurabh registration done------->', response);
        if (response.access_token !== undefined) {
          // Alert.alert('You are Successfully Register');
          // navigation.navigate('LogIn');
          SuccessfullAlert();
        } else {
          console.log('sonmething wrong');
          Alert.alert('Please fill in all the fields');

          SuccessfullAlert();
        }
      });
  };

  return (
    <View style={{marginHorizontal: Scale(25), flex: 1}}>
      <KeyboardAvoidingView style={{flex: 1}}>
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <View style={{flex: 1, marginVertical: Scale(18)}}>
            <Text
              style={{
                fontSize: Scale(32),
                color: '#363636',
                fontWeight: '800',
                // top: 20,
              }}>
              Sign up
            </Text>
            <Text
              style={{
                marginVertical: Scale(10),
                marginRight: '23%',
                fontSize: Scale(15),
                fontWeight: '400',
              }}>
              Hi, Please fill the information to complete the sign up.
            </Text>
          </View>
          <View style={{flex: 1}}>
            <View style={{flexDirection: 'row'}}>
              <Placeholder2
                PlaceholderName="First Name"
                value={firstName}
                onChangeText={setFirstName}
              />
              <View style={{marginStart: '50%', position: 'absolute'}}>
                <Placeholder2
                  PlaceholderName="Last Name"
                  value={lastName}
                  onChangeText={setLastName}
                />
              </View>
            </View>
            <Text
              style={{
                color: '#363636',
                fontSize: Scale(15),
                marginTop: Scale(14),
              }}>
              Mobile No
            </Text>
            <PhoneInput
              ref={phoneInput}
              defaultValue={phoneNumber}
              defaultCode="IN"
              containerStyle={{
                height: Scale(50),
                marginTop: Scale(14),
                borderBottomWidth: 1,
                borderColor: '#BDBDBD',
              }}
              textContainerStyle={{paddingVertical: 0}}
              onChangeFormattedText={text => {
                setPhoneNumber(text);
              }}
            />
            <Placeholder
              placeholderName="Enter the Email ID                                  @gmail.com"
              value={email}
              onChangeText={setEmail}
              title="Email ID"
              borderColor="red"
            />
            <Placeholder
              placeholderName="Enter Your Password"
              value={password}
              onChangeText={setPassword}
              title="Password"
              borderColor="red"
              secureTextEntry={showPassword}
            />
            <Icon
              name={showPassword ? 'eye' : 'eye-slash'}
              size={15}
              color="#4F4F4F"
              onPress={() => setShowPassword(!showPassword)}
              style={{position: 'absolute', marginStart: '87%', top: '92%'}}
            />
          </View>
          <View style={{flex: 0.6, marginVertical: Scale(20)}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: Scale(15)}}>
                By accepting the following{' '}
              </Text>
              <Text
                style={{
                  color: COLORS.Mandy,
                  fontSize: Scale(15),
                  fontWeight: '600',
                }}>
                Terms & Conditions
              </Text>
            </View>
            <Button btnName="Sign up" onPress={HandleSignUp} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
