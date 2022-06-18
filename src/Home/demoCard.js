import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const DemoCard = ({Img, currentLocation, date, time, location, navigation}) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        height: '105%',
        width: '50%',
        top: 20,
        borderRadius: 10,
        marginRight: 10,
        // flex: 1,
      }}>
      <TouchableOpacity onPress={() => navigation.navigate('TodayEvt')}>
        <Image
          source={Img}
          resizeMode="cover"
          style={{
            width: '100%',
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
        />
        <View
          style={{
            position: 'absolute',
            top: 15,
            backgroundColor: 'white',
            color: 'red',
            width: '70%',
            height: '10%',
            borderTopEndRadius: 5,
            borderBottomEndRadius: 5,
          }}>
          <Text style={{fontSize: 15, top: 3}}>{currentLocation}</Text>
        </View>
        <View style={{margin: 10}}>
          <View style={{flexDirection: 'row'}}>
            <Icon name="calendar-range-outline" size={25} color="#828282" />
            <Text style={{top: 7, marginStart: 5, color: '#828282'}}>
              {date}
            </Text>
          </View>
          <View style={{flexDirection: 'row', top: 7}}>
            <Icon name="clock-time-four-outline" size={25} color="#828282" />
            <Text style={{top: 7, marginStart: 5, color: '#828282'}}>
              {time}
            </Text>
          </View>
          <View style={{flexDirection: 'row', top: 14}}>
            <SimpleLineIcons name="location-pin" size={25} color="#828282" />
            <Text style={{top: 7, marginStart: 5, color: '#828282'}}>
              {location}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default DemoCard;

const styles = StyleSheet.create({});
