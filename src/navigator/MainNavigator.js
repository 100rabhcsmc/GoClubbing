import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Home/Home';
import Profile from '../profile/profile';
import Card from '../Card/card';
import Premium from '../premium/premium';
import ProfilePicture from '../ProfilePicture/profilePicture';
import AllEvent from '../Events/AllEvent';
import TodayEvent from '../Events/todayEvent';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeDetails = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeDetails"
        component={Home}
        options={{
          headerTitle: 'Let’s goClubbing',
          headerLeft: () => <ProfilePicture />,
          headerRight: () => (
            <Image
              source={require('../assets/notification.png')}
              style={{marginRight: 25}}
            />
          ),
        }}
      />
      <Stack.Screen
        name="AllEvent"
        component={AllEvent}
        options={{headerTitle: 'Today Event', headerBackTitle: 'Back'}}
      />
      <Stack.Screen
        name="TodayEvt"
        component={TodayEvent}
        options={{headerTitle: 'Today Event', headerBackTitle: 'Back'}}
      />
    </Stack.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        title: () => null,
        tabBarLabel: () => null,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeDetails}
        options={{
          headerShown: false,
          activeTintColor: '#81B247',
          tabBarIcon: ({tintColor}) => (
            <Image
              style={{tintColor: tintColor}}
              source={require('../assets/Home.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Card"
        component={Card}
        options={{
          tabBarIcon: ({tintColor}) => (
            <Image
              style={{tintColor: tintColor}}
              source={require('../assets/Card.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Premium"
        component={Premium}
        options={{
          tabBarIcon: ({tintColor}) => (
            <Image
              style={{tintColor: tintColor}}
              source={require('../assets/Premium.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({tintColor}) => (
            <Image
              style={{tintColor: tintColor}}
              source={require('../assets/Profile.png')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
