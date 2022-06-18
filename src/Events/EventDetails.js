import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import Scale from '../utils/Font';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const EventDetails = ({item}) => {
  console.log('hello saurabh', item);
  return (
    <View style={{flex: 1, marginTop: 5}}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#FFFFFF',
          marginBottom: 10,
          borderRadius: 10,
        }}>
        <Image
          source={require('../assets/Today1.png')}
          style={{
            flex: 1,
            width: '100%',
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
          resizeMode="cover"
        />
        <View style={{flex: 0.3}}>
          <View style={{flex: 0.8}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row', marginTop: 5}}>
                <Icon name="calendar-range-outline" size={25} color="#828282" />
                <Text style={{margin: 5, color: '#828282'}}>{item.Date}</Text>
              </View>
              <View style={{flexDirection: 'row', marginTop: 5}}>
                <Icon
                  name="clock-time-four-outline"
                  size={25}
                  color="#828282"
                />
                <Text style={{margin: 5, color: '#828282'}}>{item.Time}</Text>
              </View>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row', marginTop: 5}}>
                <SimpleLineIcons
                  name="location-pin"
                  size={25}
                  color="#828282"
                />
                <Text style={{margin: 5, color: '#828282'}}>
                  {item.Location}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => console.log('Booked')}
                style={{
                  marginTop: 5,
                  backgroundColor: '#E8505B',
                  // justifyContent: 'flex-start',
                  alignItems: 'center',
                  borderRadius: 20,
                  flexDirection: 'row',
                  marginEnd: 5,
                  paddingHorizontal: 20,
                  paddingVertical: 3,
                  marginBottom: 5,
                }}>
                <Text
                  style={{
                    fontSize: Scale(14),
                    color: '#FFFFFF',
                  }}>
                  View Details
                </Text>
                <Icon name="arrow-right" size={25} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default EventDetails;
