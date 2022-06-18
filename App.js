import {StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AuthNavigation from './src/navigator/authNavigator';
import MainNavigator from './src/navigator/MainNavigator';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <NavigationContainer>
        {/* <AuthNavigation /> */}
        <MainNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
