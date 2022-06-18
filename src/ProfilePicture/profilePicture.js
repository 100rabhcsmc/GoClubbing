import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const ProfilePicture = () => {
  return (
    <View
      style={{
        marginLeft: 25,
        // height: 10,
        // width: 10,
        // borderRadius: 10,
        //   backgroundColor: 'black',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      {/* <Text style={{color: 'white', fontSize: 14}}>SC</Text> */}
      <Image
        source={require('../assets/profilePicture.png')}
        style={{width: 40, height: 40}}
      />
      {/* <Text style={{marginStart: 0, bottom: 0, fontSize: 17}}>
        {`Hi,Naveen! ${'\n'}
         Let’s goClubbing`}
      </Text> */}
    </View>
  );
};

export default ProfilePicture;

const styles = StyleSheet.create({});
