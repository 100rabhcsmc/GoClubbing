import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import DemoCard from './demoCard';

const Home = ({navigation}) => {
  return (
    <View style={{marginHorizontal: 20, flex: 1}}>
      <TextInput
        placeholder="Search events to goClubbing"
        // value={value}
        // onChangeText={text => onChangeText(text)}
        style={{
          marginTop: 10,
          height: 40,
          padding: 10,
          backgroundColor: 'white',

          borderRadius: 5,
        }}
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '500',
            marginTop: 15,
          }}>
          Today’s Events
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('AllEvent')}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              marginTop: 23,
              color: '#376AED',
            }}>
            View all
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <DemoCard
          Img={require('../assets/todayEvent1.png')}
          currentLocation="Casino’va"
          date="12-03-2022"
          time=" Fri, 07:30 – 01:00 Am"
          location="Koramangala"
          navigation={navigation}
        />
        <DemoCard
          Img={require('../assets/todayEvent2.png')}
          currentLocation="Bangalore Adda"
          date="12-03-2022"
          time=" Fri, 07:30 – 01:00 Am"
          location="New BEL Road"
        />
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '500',
            marginTop: 45,
          }}>
          Featured Events
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            marginTop: 50,
            color: '#376AED',
          }}>
          View all
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <DemoCard
          Img={require('../assets/features1.png')}
          currentLocation="Ladies night @Casino’va"
          date="12-03-2022"
          time=" Fri, 07:30 – 01:00 Am"
          location="Koramangala"
        />
        <DemoCard
          Img={require('../assets/features2.png')}
          currentLocation="Bangalore Adda"
          date="12-03-2022"
          time=" Fri, 07:30 – 01:00 Am"
          location="New BEL Road"
        />
      </View>
    </View>
  );
};

export default Home;
