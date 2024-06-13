import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
const {width, height} = Dimensions.get('window');

const CommonHeader = () => {
  return <View style={styles.header}></View>;
};

export default CommonHeader;

const styles = StyleSheet.create({
  header: {
    width: width,
    backgroundColor: '#fff',
    height: 60,
    shadowColor: 'rgba(0,0,0,.5)',
    shadowOffset: {height: 1, width: 1},
    shadowOpacity: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
