import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../utils/themes';
import Scale from '../../utils/Font';

const Button = ({btnName, onPress}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={{
        marginTop: 25,
        backgroundColor: '#E8505B',
        justifyContent: 'center',
        alignItems: 'center',
        padding: Scale(18),
        borderRadius: 6,
      }}>
      <Text
        style={{fontSize: Scale(18), fontWeight: '700', color: COLORS.White}}>
        {btnName}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
