import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {COLORS} from '../utils/themes';
import Scale from '../utils/Font';

const Placeholder = ({
  placeholderName,
  value,
  onChangeText,
  title,
  secureTextEntry,
}) => {
  return (
    <>
      <Text
        style={{
          marginTop: Scale(20),
          color: 'black',
          fontSize: Scale(15),
        }}>
        {title}
      </Text>
      <TextInput
        placeholder={placeholderName}
        placeholderTextColor="#BDBDBD"
        color="#000000"
        value={value}
        onChangeText={text => onChangeText(text)}
        secureTextEntry={secureTextEntry}
        style={{
          height: Scale(40),
          borderBottomWidth: 1,
          padding: Scale(8),
          borderColor: '#BDBDBD',
          color: '#000000',
        }}
      />
    </>
  );
};

export default Placeholder;

const styles = StyleSheet.create({});
