/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchData} from '../redux/action/actions';

function WeatherData() {
  const dispatch = useDispatch();
  const {loading, data, error} = useSelector(state => state);

  const fetchWeatherData = () => {
    dispatch(fetchData());
  };
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={fetchWeatherData}>
        <Text style={styles.makeCallText}>Make Api Call</Text>
      </TouchableOpacity>
      <Text>{loading ? loading : error ? error : data}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    maxWidth: 400,
    alignSelf: 'center',
    backgroundColor: '#2f2f',
    marginVertical: 20,
    justifyContent: 'center',
    padding: 5,
  },
  makeCallText: {fontWeight: '700', fontSize: 14, marginHorizontal: 20},
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default WeatherData;
