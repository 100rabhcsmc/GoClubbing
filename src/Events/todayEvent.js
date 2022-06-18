import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Scale from '../utils/Font';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const TodayEvent = () => {
  return (
    <SafeAreaView style={{flex: 1, marginHorizontal: 20}}>
      <View
        style={{
          flex: 2,
          //   backgroundColor: 'blue',
          //   justifyContent: 'center',
          //   alignItems: 'center',
          //   marginTop: 35,
          marginVertical: 10,
        }}>
        <Image
          source={require('../assets/TodayEvent12.png')}
          resizeMode="cover"
          //   style={{height: '58%', width: '90%'}}
        />
      </View>
      <View style={{flex: 1, flexDirection: 'row', marginTop: 20}}>
        <View style={{flex: 0.8}}>
          <Text style={{fontSize: 17, color: '#263238', fontWeight: '500'}}>
            Details:
          </Text>
          <View style={{flexDirection: 'row', marginTop: 5}}>
            <Icon name="calendar-range-outline" size={25} color="#828282" />
            <Text style={{margin: 5, color: '#828282'}}>12-03-2022</Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 5}}>
            <Icon name="clock-time-four-outline" size={25} color="#828282" />
            <Text style={{margin: 5, color: '#828282'}}>
              Fri,07:30–01:00 am
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 5}}>
            <SimpleLineIcons name="location-pin" size={25} color="#828282" />
            <Text style={{margin: 5, color: '#828282'}}>Koramangaka</Text>
          </View>
        </View>
        <View
          style={{
            // flexDirection: 'row',
            // justifyContent: 'space-between',
            flex: 1,
            // backgroundColor: 'green',
          }}>
          <Text style={{fontSize: 17, color: '#263238', fontWeight: '500'}}>
            Category, Mode & Price:
          </Text>
          <View
            style={{
              flexDirection: 'row',
              //   justifyContent: 'space-evenly',
              marginHorizontal: 20,
              justifyContent: 'space-evenly',
              marginTop: 10,
              //   borderRadius: 25,
            }}>
            <Text
              style={{
                color: '#E8505B',
                borderWidth: 1,
                textAlign: 'center',
                padding: 3,
                borderColor: '#E8505B',
                borderRadius: 5,
              }}>
              Music
            </Text>
            <Text
              style={{
                color: '#E8505B',
                borderWidth: 1,
                textAlign: 'center',
                padding: 3,
                borderColor: '#E8505B',
                borderRadius: 5,
              }}>
              Music
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              //   justifyContent: 'space-evenly',
              marginHorizontal: 40,
              //   justifyContent: 'space-evenly',
              marginTop: 15,
              //   borderRadius: 25,
            }}>
            <Text
              style={{
                color: '#FFFFFF ',
                backgroundColor: '#E8505B',
                borderWidth: 1,
                textAlign: 'center',
                padding: 4,
                borderColor: '#E8505B',
                borderRadius: 5,
              }}>
              2000 RS
            </Text>
            {/* <Text
              style={{
                color: '#E8505B',
                borderWidth: 1,
                textAlign: 'center',
                padding: 3,
                borderColor: '#E8505B',
                borderRadius: 5,
              }}>
              Music
            </Text> */}
          </View>
        </View>
      </View>
      <View style={{flex: 2}}>
        <Text style={{fontSize: 20, fontWeight: '600', color: '#263238'}}>
          Event DIscription
        </Text>
        <ScrollView>
          <Text style={{color: '828282'}}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like). There are many variations of passages of Lorem Ipsum
            available, but the majority have suffered alteration in some form,
            by injected humour, or randomised words which don't look even
            slightly believable. If you are going to use a passage of Lorem
            Ipsum, you need to be sure there isn't anything embarrassing hidden
            in the middle of text. All the Lorem Ipsum generators on the
            Internet tend to repeat predefined chunks as necessary, making this
            the first true generator on the Internet. It uses a dictionary of
            over 200 Latin words, combined with a handful of model sentence
            structures, to generate Lorem Ipsum which looks reasonable. The
            generated Lorem Ipsum is therefore always free from repetition,
            injected humour, or non-characteristic words etc.
          </Text>
        </ScrollView>
      </View>
      <View
        style={{
          flex: 0.3,
          //   backgroundColor: 'yellow',
          //   justifyContent: 'space-evenly',
          flexDirection: 'row',
        }}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-evenly',
          }}>
          <Image
            //   style={{tintColor: tintColor}}
            source={require('../assets/Profile.png')}
          />
          <Image
            //   style={{tintColor: tintColor}}
            source={require('../assets/Premium.png')}
          />
        </View>
        <View style={{flex: 1}}>
          <TouchableOpacity
            onPress={() => console.log('Booked')}
            style={{
              //   marginVertical: 18,
              // marginTop: 25,
              backgroundColor: '#E8505B',
              justifyContent: 'center',
              alignItems: 'center',
              // padding: Scale(18),
              //   paddingHorizontal: 40,
              // marginVertical: 40,
              borderRadius: 20,
            }}>
            <Text
              style={{
                fontSize: Scale(18),
                fontWeight: '700',
                color: '#FFFFFF',
                padding: 5,
              }}>
              Book
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TodayEvent;

const styles = StyleSheet.create({});
