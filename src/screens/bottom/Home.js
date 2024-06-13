import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import CommonHeader from '../../components/CommonHeader/CommonHeader';

const Home = () => {
  return (
    <View style={styles.container}>
      <CommonHeader />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
