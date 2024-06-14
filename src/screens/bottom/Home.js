import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import CommonHeader from '../../components/CommonHeader/CommonHeader';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <CommonHeader onclickLeft={()=>{
        navigation.openDrawer()
      }}/>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
