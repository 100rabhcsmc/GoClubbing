import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const EventText = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection: 'row',
        // justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: '500',
        }}>
        Today’s Events
      </Text>
      <TouchableOpacity style={{marginStart: '48%'}}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            //   marginTop: 23,
            color: '#376AED',
          }}>
          View all
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default EventText;
