/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import WeatherData from './src/components/WeatherData';
import store from './src/redux/store/store';

function App() {
  return (
    <SafeAreaView>
      <Provider store={store}>
        <View>
          <WeatherData />
        </View>
      </Provider>
    </SafeAreaView>
  );
}

export default App;
