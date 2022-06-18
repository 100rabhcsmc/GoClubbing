import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import Scale from '../utils/Font';

const Placeholder2 = ({
  PlaceholderName,
  value,
  onChangeText,
  secureTextEntry,
}) => {
  return (
    <View>
      <Text
        style={{
          color: '#363636',
          fontSize: Scale(15),
        }}>
        {PlaceholderName}
      </Text>
      <TextInput
        placeholder={PlaceholderName}
        placeholderTextColor="#BDBDBD"
        color="#000000"
        value={value}
        onChangeText={text => onChangeText(text)}
        secureTextEntry={secureTextEntry}
        style={{
          width: '170%',
          height: Scale(40),
          borderBottomWidth: 1,
          borderColor: '#BDBDBD',
          padding: Scale(8),
          color: '#000000',
        }}
      />
    </View>
  );
};

export default Placeholder2;
